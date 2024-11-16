// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "lib/forge-std/src/Test.sol";
import {FellowFund} from "../contracts/FellowFund.sol";
import "../contracts/Types.sol";

contract FellowFundTest is Test {
    uint256 private constant ONE_SECOND = 1;
    uint256 private constant ONE_MINUTE = 60 * ONE_SECOND;
    uint256 private constant ONE_HOUR = 60 * ONE_MINUTE;
    uint256 private constant ONE_DAY = 24 * ONE_HOUR;
    uint256 private constant ONE_WEEK = 7 * ONE_DAY;
    uint256 private constant ONE_MONTH = 30 * ONE_DAY;
    uint256 private constant ONE_YEAR = 365 * ONE_DAY;
    FellowFund fellowFund;

    address private constant VERIFIER = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address private constant OPERATOR = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;

    function setUp() public {
        fellowFund = new FellowFund(VERIFIER, OPERATOR);
    }

    function testCreateFellowship() public payable {
        uint256 applicationDeadline = block.timestamp + ONE_MINUTE;
        uint256 marketDeadline = applicationDeadline + ONE_MINUTE;
        uint256 epochEndTime = marketDeadline + ONE_MINUTE;
        uint256 funds = 1e20;
        string memory metadata = "TestFellowship";
        fellowFund.createFellowship{value: funds}(metadata, funds, applicationDeadline, marketDeadline, epochEndTime);
    }
}
