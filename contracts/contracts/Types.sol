// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

enum Side {
    Yes,
    No
}

enum FellowshipStatus {
    Created,
    AcceptingApplications,
    MarketOpen,
    EpochStarted,
    Resolved
}

struct Fellowship {
    string metadata;
    uint256 funds;
    uint256 applicationDeadline;
    uint256 marketDeadline;
    uint256 epochEndTime;
    FellowshipStatus status;
}

struct Application {
    address applicant;
    string metadata;
    bool achieved;
    bool verified;
    bool accepted;
    uint256 grantAmount;
}
