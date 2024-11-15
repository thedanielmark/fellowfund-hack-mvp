// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "lib/forge-std/src/Test.sol";
import {FellowFund} from "../src/FellowFund.sol";

contract FellowFundTest is Test {
    FellowFund fellowFund;

    function setUp() public {
        fellowFund = new FellowFund();
    }

    function testCreateFellowship() public view {
        string memory expected = "Hello, there!";
        assertEq(fellowFund.createFellowship(), expected);
    }
}
