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
     * @notice The amount of funds in Eth that is spent on the fellowship.
     */
    uint256 funds;
    /**
     * @notice The kpi targets are wheighted metrics that need to be achieved to pass the fellowship successfully.
     */
    Target[2] kpiTargets;
}

struct Target {
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

struct Market {
    PoolKey yesPool;
    PoolKey noPool;
}

type Currency is address;

type IHooks is address;

struct PoolKey {
    Currency currency0;
    Currency currency1;
    uint24 fee;
    int24 tickSpacing;
    IHooks hooks;
}
