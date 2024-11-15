// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Proof} from "./Proof.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IProofVerifier {
    function verify(Proof calldata, string memory username, address account) external;
}

interface IProofVerificationRegistry is IProofVerifier {
    event ProofVerified(string username, address account);

    function resolve(string memory username) external view returns (address account);
}

contract GithubVerificationRegistry is IProofVerificationRegistry, Ownable {
    IProofVerifier public proofVerifier;
    mapping(string githubUsername => address account) public githubUsernameToAccount;

    constructor(IProofVerifier _proofVerifier) Ownable(msg.sender) {
        proofVerifier = _proofVerifier;
    }

    function setProofVerifier(address _proofVerifier) external onlyOwner {
        proofVerifier = IProofVerifier(_proofVerifier);
    }

    function resolve(string memory _username) external view returns (address) {
        return githubUsernameToAccount[_username];
    }

    function verify(Proof calldata _proof, string memory _username, address _account) external {
        proofVerifier.verify(_proof, _username, _account);
        emit ProofVerified(_username, _account);
    }
}