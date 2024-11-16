# FellowFund

**FellowFund** is an on-chain platform for fellowship funding that uses prediction markets to support individuals. By allowing bettors to stake on future outcomes, it reduces governance overhead and promotes informed, outcome-driven funding for ecosystem growth. This "skin in the game" approach aligns incentives and improves decision-making.

## Project Organization

This repository is structured as follows:

- [`./contracts`](./contracts/): Contains the smart contracts for the FellowFund platform.
- [`./subgraphs`](./subgraphs/): Contains The Graph schema and event handlers.
- [`./api`](./api/): Contains a lightweight backend for demonstration purposes.
- [`./web`](./web/): Contains the frontend implementation for the FellowFund platform.

Additionally, the project includes the following repository:

- [nextjs-viem-tee-sim-template](https://github.com/fellowfund/nextjs-viem-tee-sim-template): This repository implements APIs running in Phala Network's TEE, serving as a trusted Oracle for FellowFund.

> 🚨 Each directory and repository within FellowFund includes a `README.md` file with instructions on how to set up and run the project.