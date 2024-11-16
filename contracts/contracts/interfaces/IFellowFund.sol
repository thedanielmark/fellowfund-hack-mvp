// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Fellowship, Application, FellowshipStatus} from "../Types.sol";

interface IFellowFund {
    event FellowshipCreated(uint256 indexed fellowshipId, Fellowship fellowship);
    event ApplicationSubmitted(
        uint256 indexed fellowshipId, uint256 indexed applicationId, address applicant, string metadata
    );
    event MarketOpened(uint256 indexed fellowshipId, address indexed marketAddress, uint256 indexed applicationId);
    event EpochStarted(
        uint256 indexed fellowshipId, uint256 grantPerAccepted, uint256 acceptedCount, uint256 totalApplications
    );
    event EpochResolved(uint256 indexed fellowshipId);
    event FellowshipResolved(uint256 indexed fellowshipId);
    event ApplicationEvaluated(uint256 indexed fellowshipId, uint256 indexed applicationId, bool achieved);
    event ApplicantAccepted(uint256 indexed fellowshipId, uint256 indexed applicationId);

    function createFellowship(
        string calldata _metadata,
        uint256 _funds,
        uint256 _applicationDeadline,
        uint256 _marketDeadline,
        uint256 _epochDeadline
    ) external payable;

    function applyToFellowship(uint256 fellowshipId, string calldata metadata) external;

    function openFellowshipMarkets(uint256 fellowshipId) external;

    function evaluateMarket(uint256 fellowshipId) external;

    function setApplicantImpact(uint256 fellowshipId, uint256 applicationId, bool achieved, bytes calldata proof)
        external;

    function resolveFellowship(uint256 fellowshipId) external;
}
