# FellowFund Smart Contracts

This project is based on [hardhat](https://hardhat.org/) and using [Ignition](https://hardhat.org/ignition/docs/getting-started#overview).

## Deployed Contracts and Networks

> 🚨 A **complete list** of the deployed contracts, its versions and networks, can be found here:
> 
> [testnetDeployments.json](./ignition/deployments/testnetDeployments.json)

## Getting Started

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/FellowFund.ts
npx hardhat vars # (list, set <key> <value>, delete <key>)
```