// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

struct Fellowship {
    /**
     * @notice The name of the fellowship
     */
    string name;
    /**
     * @notice The description of the fellowship
     */
    string description;
    /**
     * @notice How much liquidity the fellowship should have.
     */
    uint256 liquidity;
    /**
     * @notice The wheighted metrics that need to be achieved to pass the fellowship successfully.
     * @dev The metrics should be github commits and poaps.
     */
    WeightedMetric[2] requiredMetrics;
}

struct WeightedMetric {
    uint256 weight;
    uint256 count;
}

struct Application {
    /**
     * @notice The address of the applicant
     */
    address applicant;
    /**
     * @notice The github username of the applicant
     */
    string githubUsername;
}
