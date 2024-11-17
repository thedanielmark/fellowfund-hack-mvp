# FellowFund

**FellowFund** is an on-chain platform for fellowship funding that uses prediction markets to support individual contributors (a.k.a. BUIDLers 😅). By allowing bettors to stake on future outcomes of fellows' performance, it reduces governance overhead and promotes informed, outcome-driven funding for ecosystem growth. This "skin in the game" approach aligns incentives and improves decision-making.

## Project Organization

This repository is structured as follows:

- [`./contracts`](./contracts/): Contains the smart contracts for the FellowFund platform.
- [`./subgraphs`](./subgraphs/): Contains The Graph schema and event handlers.
- [`./api`](./api/): Contains a lightweight backend for demonstration purposes.
- [`./web`](./web/): Contains the frontend implementation for the FellowFund platform.

Additionally, the project includes the following repository:

- [nextjs-viem-tee-sim-template](https://github.com/fellowfund/nextjs-viem-tee-sim-template): This repository implements APIs running in Phala Network's TEE, serving as a trusted Oracle for FellowFund.

> 🚨 Each directory and repository within FellowFund includes a `README.md` file with instructions on how to set up and run the project.

## Deployed Contracts and Networks

> 🚨 A **complete list** of the deployed contracts, its versions and networks, can be found here: [testnetDeployments.json](./ignition/deployments/testnetDeployments.json)

* Polygon Amoy
  * [`0x54668Ac3E509020b2349b5e66851d9bf9Ee88B5A`](https://www.oklink.com/amoy/address/0x54668ac3e509020b2349b5e66851d9bf9ee88b5a)
* Optimism Sepolia
  * [`0x54668Ac3E509020b2349b5e66851d9bf9Ee88B5A`](https://optimism-sepolia.blockscout.com/address/0x54668Ac3E509020b2349b5e66851d9bf9Ee88B5A)
* Flow Testnet
  * [`0xc6197dF92872B6665B7A3ba6857e3D8580D1A6d5`](https://testnet.flowdiver.io/c6197dF92872B6665B7A3ba6857e3D8580D1A6d5)
* Mantle Sepolia
  * [`0x2323Cd8097708f4C8D4BA37aE72644Af712bAD76`](https://sepolia.mantlescan.xyz/address/0x2323Cd8097708f4C8D4BA37aE72644Af712bAD76)
* Celo Alfajores Testnet
  * [`0x0810B2d3C23d7207C6B15fb6B3303e99561cb80f`](https://alfajores.celoscan.io/address/0x0810B2d3C23d7207C6B15fb6B3303e99561cb80f)
* Unichain Sepolia
  * [`0x0810B2d3C23d7207C6B15fb6B3303e99561cb80f`](https://unichain-sepolia.blockscout.com/address/0x0810B2d3C23d7207C6B15fb6B3303e99561cb80f)
* Rootstock Testnet
  * [`0x2323Cd8097708f4C8D4BA37aE72644Af712bAD76`](https://explorer.testnet.rootstock.io/address/0x2323cd8097708f4c8d4ba37ae72644af712bad76)
* Base Sepolia
  * [`0x54668Ac3E509020b2349b5e66851d9bf9Ee88B5A`](https://sepolia.basescan.org/address/0x54668Ac3E509020b2349b5e66851d9bf9Ee88B5A)
