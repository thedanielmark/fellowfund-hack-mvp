// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "lib/forge-std/src/Test.sol";
import {FellowFund} from "../src/FellowFund.sol";
import {Fellowship, WeightedMetric} from "../src/Types.sol";

contract FellowFundTest is Test {
    FellowFund fellowFund;

    function setUp() public {
        fellowFund = new FellowFund();
    }

    function testCreateFellowship() public {
        WeightedMetric memory githubCommitMetric = WeightedMetric({weight: 1, count: 10});
        WeightedMetric memory poapMetric = WeightedMetric({weight: 2, count: 20});
        WeightedMetric[2] memory requiredMetrics;
        requiredMetrics[0] = githubCommitMetric;
        requiredMetrics[1] = poapMetric;
        Fellowship memory fellowship = Fellowship({
            name: "TestFellowship",
            description: "This is a test fellowship",
            liquidity: 1e23,
            requiredMetrics: requiredMetrics
        });
        fellowFund.createFellowship(fellowship);
    }
}
