// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IFellowFund} from "./interfaces/IFellowFund.sol";
import {Fellowship, Application, FellowshipStatus} from "./Types.sol";
import {Market} from "./Market.sol";
import {IMarket} from "./interfaces/IMarket.sol";
import "./Types.sol";

contract FellowFund is IFellowFund, Ownable {
    uint256 public fellowshipCount;
    mapping(uint256 => Fellowship) public fellowships;
    mapping(uint256 => Application[]) public applications;
    mapping(uint256 => mapping(uint256 => IMarket)) public markets;

    address public phalaVerifier;
    address public operator;

    constructor(address _phalaVerifier, address _operator) Ownable(msg.sender) {
        phalaVerifier = _phalaVerifier;
        operator = _operator;
    }

    modifier onlyVerifier() {
        // require(msg.sender == verifier, "Only the verifier can call this function");
        _;
    }

    modifier onlyOperator() {
        require(msg.sender == operator, "Only the operator can call this function");
        _;
    }

    function createFellowship(
        string calldata _metadata,
        uint256 _funds,
        uint256 _applicationDeadline,
        uint256 _marketDeadline,
        uint256 _epochDeadline
    ) external payable {
        require(msg.value == _funds, "Incorrect funds sent");
        // For the sake of the hackathon, these require statements is commented to simplify demonstrations.
        // require(
        //     _applicationDeadline > block.timestamp,
        //     "Invalid application deadline"
        // );
        // require(
        //     _marketDeadline > _applicationDeadline,
        //     "Invalid market deadline"
        // );
        // require(_epochDeadline > _marketDeadline, "Invalid epoch end time");

        uint256 fellowshipId = fellowshipCount;
        fellowshipCount++;

        Fellowship storage fellowship = fellowships[fellowshipId];
        fellowship.metadata = _metadata;
        fellowship.funds = _funds;
        fellowship.applicationDeadline = _applicationDeadline;
        fellowship.marketDeadline = _marketDeadline;
        fellowship.epochEndTime = _epochDeadline;
        fellowship.status = FellowshipStatus.Created;

        fellowships[fellowshipId] = fellowship;
        fellowships[fellowshipId].status = FellowshipStatus.AcceptingApplications;

        emit FellowshipCreated(fellowshipId, fellowships[fellowshipId]);
    }

    function applyToFellowship(uint256 fellowshipId, string calldata metadata) external {
        applyToFellowshipWithCustomAddress(fellowshipId, metadata, msg.sender);
    }

    function applyToFellowshipWithCustomAddress(
        uint256 fellowshipId,
        string calldata metadata,
        address applicantAddress
    ) public {
        Fellowship storage fellowship = fellowships[fellowshipId];
        require(fellowship.status == FellowshipStatus.AcceptingApplications, "Not accepting applications");
        // For the sake of the hackathon, this require statement is commented to simplify demonstrations.
        // require(
        //     block.timestamp < fellowship.applicationDeadline,
        //     "Application period ended"
        // );

        // Todo: Add vlayer verification logic here - use vlayerProof as parameter

        uint256 applicationId = applications[fellowshipId].length;
        applications[fellowshipId].push(
            Application({
                applicant: applicantAddress,
                metadata: metadata,
                achieved: false,
                verified: false,
                accepted: false,
                grantAmount: 0
            })
        );

        emit ApplicationSubmitted(fellowshipId, applicationId, msg.sender, metadata); // add metadata
    }

    function openFellowshipMarkets(uint256 fellowshipId) external onlyOperator {
        Fellowship storage fellowship = fellowships[fellowshipId];
        // TODO: For the sake of the hackathon, we will not check if the application period has ended
        // require(block.timestamp >= fellowship.applicationDeadline, "Application period not ended");
        require(fellowship.status == FellowshipStatus.AcceptingApplications, "Invalid status");

        Application[] storage apps = applications[fellowshipId];
        require(apps.length > 0, "No applications to create markets for");

        // Create market for each applicant
        for (uint256 i = 0; i < apps.length; i++) {
            Market market = new Market(address(this), fellowshipId, apps[i].applicant);
            markets[fellowshipId][i] = IMarket(address(market));

            // Emit event for each market creation
            emit MarketOpened(fellowshipId, address(market), i);
        }

        fellowship.status = FellowshipStatus.MarketOpen;
    }

    function evaluateMarket(uint256 fellowshipId) external onlyOperator {
        Fellowship storage fellowship = fellowships[fellowshipId];
        // TODO: For the sake of the hackathon, we will not check if the market is still open
        // require(block.timestamp >= fellowship.marketDeadline, "Market still open");
        require(fellowship.status == FellowshipStatus.MarketOpen, "Invalid status");

        Application[] storage apps = applications[fellowshipId];
        uint256 acceptedApplicantsCount = 0;

        uint256 nrApps = apps.length;
        // Evaluate each application based on market stakes
        for (uint256 i = 0; i < nrApps; i++) {
            Application storage app = apps[i];
            IMarket market = markets[fellowshipId][i];
            uint256 yesBets = market.getBet(Side.Yes);
            uint256 noBets = market.getBet(Side.No);
            uint256 totalBets = yesBets + noBets;

            if (totalBets > 0) {
                if (yesBets > noBets) {
                    app.accepted = true;
                    acceptedApplicantsCount++;
                    emit ApplicantAccepted(fellowshipId, i);
                }
            }
        }
        uint256 grantPerAccepted = 0;
        if (acceptedApplicantsCount > 0) {
            grantPerAccepted = fellowship.funds / acceptedApplicantsCount;
        }

        // Calculate grant amount for accepted applications
        if (acceptedApplicantsCount > 0) {
            for (uint256 i = 0; i < nrApps; i++) {
                if (apps[i].accepted) {
                    apps[i].grantAmount = grantPerAccepted;
                    (bool success,) = payable(apps[i].applicant).call{value: grantPerAccepted}("");
                    require(success, "Transfer failed"); // Fine for the hackathon, but will need different approach in the future, since a single failing transfer (e.g., if the recipient is a contract) could block the whole payout in the evaluation.
                }
            }
        }
        fellowship.status = FellowshipStatus.EpochStarted;
        emit EpochStarted(fellowshipId, grantPerAccepted, acceptedApplicantsCount, apps.length);
    }

    function setApplicantImpact(uint256 fellowshipId, uint256 applicationId, bool achieved, bytes calldata proof)
        external
        onlyVerifier
    {
        require(fellowships[fellowshipId].status == FellowshipStatus.EpochStarted, "Invalid status");

        // Verify TEE proof
        (bool success,) = phalaVerifier.call(proof);
        require(success, "Invalid achievement proof");

        Application storage application = applications[fellowshipId][applicationId];
        application.achieved = achieved;
        application.verified = true;

        emit ApplicationEvaluated(fellowshipId, applicationId, achieved);
    }

    function resolveFellowship(uint256 fellowshipId) external onlyOperator {
        Fellowship storage fellowship = fellowships[fellowshipId];
        // TODO: For the sake of the hackathon, we will not check if the epoch has ended
        // require(block.timestamp >= fellowship.epochEndTime, "Epoch not ended");
        require(fellowship.status == FellowshipStatus.EpochStarted, "Invalid status");

        Application[] storage apps = applications[fellowshipId];
        for (uint256 i = 0; i < apps.length; i++) {
            Application storage app = apps[i];
            require(app.verified, "Not all applications verified");

            if (app.achieved) {
                markets[fellowshipId][i].resolve(Side.Yes);
            } else {
                markets[fellowshipId][i].resolve(Side.No);
            }
        }

        fellowship.status = FellowshipStatus.Resolved;
        emit FellowshipResolved(fellowshipId);
    }

    function setVerifier(address _verifier) external onlyOwner {
        phalaVerifier = _verifier;
    }

    function setOperator(address _operator) external onlyOwner {
        operator = _operator;
    }
}
