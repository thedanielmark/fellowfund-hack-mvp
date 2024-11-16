// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Application, Fellowship, Market, PoolKey, Target} from "./Types.sol";
import {IGithubVerifier} from "./vlayer/GithubVerificationRegistry.sol";

interface IFellowFund {
    event ApplicationSubmitted(uint256 indexed fellowshipId, string indexed githubUsername);
    event FellowshipCreated(uint256 indexed fellowshipId, Fellowship fellowship);

    function createFellowship(
        string calldata _name,
        string calldata _description,
        uint256 _funds,
        Target[2] calldata kpiTargets
    ) external payable;

    function applyToFellowship(uint256 _fellowshipId, string memory _githubUsername) external;

    function openFellowshipMarket(uint256 _fellowshipId) external;

    // function to interact with pools -> should happen directly via pools (Uniswap)
    // Todo: Check if Uniswap supports pools for tokens in ERC1155 contract
}

interface IBidding {
    function buy(uint256 _fellowshipId, uint256 _applicantId, bool yesToken) external payable;
    function sell(uint256 _fellowshipId, uint256 _applicantId, uint256 _amount, bool yesToken) external;
}

contract FellowFund is IFellowFund, IBidding, Ownable {
    IGithubVerifier vLayerVerifierContract;

    uint256 fellowshipsCount = 0;
    mapping(uint256 fellowshipId => Fellowship) fellowships;
    mapping(uint256 fellowshipId => Application[] applications) fellowshipApplications;
    mapping(uint256 fellowshipId => Market[] applications) fellowshipMarkets;

    constructor() Ownable(msg.sender) {}

    function createFellowship(
        string calldata _name,
        string calldata _description,
        uint256 _funds,
        Target[2] calldata kpiTargets
    ) external payable onlyOwner {
        require(msg.value == _funds, "Fund mismatch");

        uint256 fellowshipId = fellowshipsCount;
        Fellowship memory fellowship = Fellowship(_name, _description, _funds, kpiTargets);
        fellowships[fellowshipId] = fellowship;
        fellowshipsCount++;
        emit FellowshipCreated(fellowshipId, fellowship);
    }

    function applyToFellowship(uint256 _fellowshipId, string memory _githubUsername) external {
        // Todo: Add value to specify in which phase the fellowship currently is at.
        // Make sure that the github username is verified with the msg.sender.
        require(msg.sender == vLayerVerifierContract.resolve(_githubUsername), "Verification incorrect");
        fellowshipApplications[_fellowshipId].push(Application(msg.sender, _githubUsername));
        emit ApplicationSubmitted(_fellowshipId, _githubUsername);
    }

    /**
     * @notice Opens the market for a fellowship. Creates Yes/No pools for each applicant.
     * @param _fellowshipId The id of the fellowship for which the market should be opened
     */
    function openFellowshipMarket(uint256 _fellowshipId) external {
        uint256 fundsForMarkets = fellowships[_fellowshipId].funds / 10;
        Application[] memory applications = fellowshipApplications[_fellowshipId];
        uint256 nrApps = applications.length;
        uint256 fundsPerApplicantMarket = fundsForMarkets / nrApps;
        for (uint256 i = 0; i < nrApps; i++) {
            _createMarket(_fellowshipId, applications[i], fundsPerApplicantMarket);
        }
    }

    function _createMarket(uint256 _fellowshipId, Application memory application, uint256 fundsForMarket) internal {
        uint256 yesCollateral = fundsForMarket / 2;
        uint256 noCollateral = yesCollateral;
        // Todo: Create 2 ERC20 tokens for YES/NO
        // Todo: Create a pool for both tokens with 10% from the fellowship funds
    }

    function buy(uint256 _fellowshipId, uint256 _applicantId, bool yesToken) external payable {
        uint256 amount = msg.value;
        // Todo: Send amount of eth to the pool and get the corresponding token
    }

    function sell(uint256 _fellowshipId, uint256 _applicantId, uint256 _amount, bool yesToken) external {
        // Todo: Send amount of eth to the pool and get the corresponding token
    }
}
