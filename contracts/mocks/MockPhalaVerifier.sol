// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract MockPhalaVerifier {
    fallback() external returns (bool, bytes memory) {
        return (true, "");
    }

    receive() external payable {}
}
