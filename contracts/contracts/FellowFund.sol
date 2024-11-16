// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Fellowship} from "./Types.sol";

interface IFellowFund {
    event FellowshipCreated(uint256 indexed fellowshipId, Fellowship fellowship);

    function createFellowship(Fellowship calldata _fellowship) external payable;

    function applyToFellowship(string memory someData) external;

    function openFellowshipMarket() external;

    // function to interact with pools -> should happen directly via pools (Uniswap)
    // Todo: Check if Uniswap supports pools for tokens in ERC1155 contract
}

interface IVerifier {
    // Todo: Define exact parameters
    function verifyProof(bytes memory) external;
}

contract FellowFund is IFellowFund, Ownable {
    IVerifier vLayerVerifierContract;

    uint256 fellowshipsCount = 0;
    mapping(uint256 fellowshipId => Fellowship) fellowships;

    constructor() Ownable(msg.sender) {}

    function createFellowship(Fellowship calldata _fellowship) external payable onlyOwner {
        uint256 fellowshipId = fellowshipsCount;
        fellowships[fellowshipId] = _fellowship;
        fellowshipsCount++;
        require(msg.value == _fellowship.funds, "Fund mismatch");
        emit FellowshipCreated(fellowshipId, _fellowship);
    }

    function applyToFellowship(string memory proof) external {
        // vlayer proof is web proof = impact metric proof
        // Internally call the verifier contract with the proof and check if valid
        // -> createMarket(metadata(stringified JSON)) - internal method
    }

    function openFellowshipMarket() external {
        // createMarket(metadata(stringified JSON)) - internal method
        // Create a pools for each applicant (YES/NO tokens against collateral) based on # of applicants → Use Auto Router V2 Pools
    }
}
