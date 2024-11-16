// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Application, Fellowship, Target} from "../Types.sol";
import {IGithubVerifier} from "../vlayer/GithubVerificationRegistry.sol";
import {IFellowFund} from "../FellowFund.sol";

contract FellowFund is IFellowFund, Ownable {
    IGithubVerifier vLayerVerifierContract;

    uint256 fellowshipsCount = 0;
    mapping(uint256 fellowshipId => Fellowship) fellowships;
    mapping(uint256 fellowshipId => Application[] applications) fellowshipApplications;

    constructor() Ownable(msg.sender) {}

    function createFellowship(
        string calldata _name,
        string calldata _description,
        uint256 _funds,
        Target[2] calldata kpiTargets
    ) external payable onlyOwner {
        Fellowship memory fellowship = Fellowship(_name, _description, _funds, kpiTargets);
        uint256 fellowshipId = fellowshipsCount;
        fellowshipsCount++;
        emit FellowshipCreated(fellowshipId, fellowship);
    }

    function applyToFellowship(uint256 _fellowshipId, string memory _githubUsername) external {}

    function openFellowshipMarket(uint256 _fellowshipId) external {
        // Todo: For each applicant, do the following:
        //  - Deploy 2 ERC20 token contracts for YES/NO. (Fixed total supply, which will all be put into the pool)
        //  - Invoke Uniswap PoolManager to create a pool for both tokens.
        //  - Transfer the collateral to the pool (if not done so during creation).
    }
}
