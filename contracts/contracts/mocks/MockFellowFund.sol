// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "../Types.sol";
import {IGithubVerifier} from "../vlayer/GithubVerificationRegistry.sol";
import {IFellowFund} from "../FellowFund.sol";

contract FellowFund is IFellowFund {
    IGithubVerifier vLayerVerifierContract;

    uint256 fellowshipsCount = 0;
    mapping(uint256 fellowshipId => Fellowship) fellowships;
    mapping(uint256 fellowshipId => Application[] applications) fellowshipApplications;

    constructor() {}

    function createFellowship(Fellowship memory _fellowship) external payable {
        uint256 fellowshipId = fellowshipsCount;
        fellowships[fellowshipId] = _fellowship;
        fellowshipsCount++;
        emit FellowshipCreated(fellowshipId, fellowships[fellowshipId]);
    }

    function applyToFellowship(uint256 fellowshipId, string calldata metadata) external {}

    function openFellowshipMarkets(uint256 fellowshipId) external {
        // Todo: For each applicant, do the following:
        //  - Deploy 2 ERC20 token contracts for YES/NO. (Fixed total supply, which will all be put into the pool)
        //  - Invoke Uniswap PoolManager to create a pool for both tokens.
        //  - Transfer the collateral to the pool (if not done so during creation).
    }

    function evaluateMarket(uint256 fellowshipId) external {}

    function setApplicantImpact(uint256 fellowshipId, uint256 applicationId, bool achieved, bytes calldata proof)
        external
    {}

    function resolveFellowship(uint256 fellowshipId) external {}
}
