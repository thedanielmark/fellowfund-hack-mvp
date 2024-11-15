// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

struct Fellowship {
    /**
     * @notice The unique identifier of the fellowship
     */
    uint256 uuid;
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
     * @notice How much percentage of the liquidity should be used for initial liquidity for applicants' token pools.
     */
    uint256 initialLiquidityForApplicants;
    Achievement[] achievements;
    // Todo: Specify metadata for the fellowship - what should be achieved with which weights?
    string metadata;
}

struct Achievement {
    uint8 weight;
    string description;
}
// Todo: this should reference which achievements should be checked against after epoch end to determine the outcome of the fellow's performance.

struct Application {
    /**
     * @notice The unique identifier of the application
     */
    uint256 uuid;
    /**
     * @notice The address of the applicant
     */
    address applicant;
}
