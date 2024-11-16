// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Fellowship, Application, FellowshipStatus} from "../Types.sol";

interface IFellowFund {
    event FellowshipCreated(
        uint256 indexed fellowshipId,
        Fellowship fellowship
    );
    event ApplicationSubmitted(
        uint256 indexed fellowshipId,
        uint256 indexed applicationId,
        address applicant
    );
    event MarketOpened(
        uint256 indexed fellowshipId,
        address indexed marketAddress
    );
    event EpochStarted(
        uint256 indexed fellowshipId,
        uint256 grantPerAccepted,
        uint256 acceptedCount,
        uint256 totalApplications
    );
    event EpochResolved(uint256 indexed fellowshipId);
    event FellowshipResolved(uint256 indexed fellowshipId);
    event ApplicationEvaluated(
        uint256 indexed fellowshipId,
        uint256 indexed applicationId,
        bool achieved
    );

    function createFellowship(Fellowship calldata fellowship) external payable;

    function applyToFellowship(
        uint256 fellowshipId,
        string calldata metadata
    ) external;

    function openFellowshipMarkets(uint256 fellowshipId) external;

    function evaluateMarket(uint256 fellowshipId) external;

    function setApplicantImpact(
        uint256 fellowshipId,
        uint256 applicationId,
        bool achieved,
        bytes calldata proof
    ) external;

    function resolveFellowship(uint256 fellowshipId) external;
}
