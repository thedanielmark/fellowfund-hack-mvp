// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IFellowFund {
    function createFellowship() external;
    function applyToFellowship(string memory someData) external;
    function openFellowshipMarket() external;
    // function to interact with pools -> should happen directly via pools (Uniswap)
    // Todo: Check if Uniswap supports pools for tokens in ERC1155 contract
}

interface IVerifier {
    function verifyProof(bytes memory) external;
}

contract FellowFund is IFellowFund, Ownable {
    address vLayerVerifierContract; // Todo: use interface

    constructor() Ownable(msg.sender) {}

    function createFellowship() external {
        // Todo: Create a new fellowship
        // - Define liquidity - make sure funds are there - could be fixed
        // - Define how much percentage should be used for initial liquidity for applicants - could be fixed
        // - Move liquidity to fellowship (depends if fellowship is a separate contract or it's just handled here in this contract)

        // Optional:
        // - Define number of applicants
    }

    function applyToFellowship(string memory someData) external {
        // vlayer proof is web proof = impact metric proof
        // Internally call the verifier contract with the proof and check if valid
        // -> createMarket(metadata(stringified JSON)) - internal method
    }

    function openFellowshipMarket() external {
        // createMarket(metadata(stringified JSON)) - internal method
        // Create a pools for each applicant (YES/NO tokens against collateral) based on # of applicants → Use Auto Router V2 Pools
    }
}
