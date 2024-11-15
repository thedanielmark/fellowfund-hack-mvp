// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// The contents of this file have been copied from the vLayer SDK.

struct Proof {
    Seal seal;
    bytes32 callGuestId;
    uint256 length;
    CallAssumptions callAssumptions;
}

struct Seal {
    bytes4 verifierSelector;
    bytes32[8] seal;
    ProofMode mode;
}

enum ProofMode {
    GROTH16,
    FAKE
}

/// @notice A CallAssumptions struct representing a block number and its block hash.
struct CallAssumptions {
    address proverContractAddress;
    bytes4 functionSelector;
    uint256 settleBlockNumber; // Block number for which assumptions was made.
    bytes32 settleBlockHash; // Hash of the block at the specified block number.
}
