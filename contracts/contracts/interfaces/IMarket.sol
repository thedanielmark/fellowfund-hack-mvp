// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "../Types.sol";

interface IMarket {
    function getBet(Side side) external view returns (uint256);
    function resolve(Side _winner) external;
}
