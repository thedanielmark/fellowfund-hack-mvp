# FellowFund

**FellowFund** is an on-chain fellowship funding platform leveraging prediction markets to fund individuals. Bettors back future outcomes with stakes, minimizing governance overhead and enabling informed, outcome-driven funding for ecosystem growth. This "skin in the game" aligns incentives and enhances decision-making.

## Project Organization

This repo is organized as follows:

- [`./contracts`](./contracts/): Contains the smart contracts for the FellowFund platform.
- [`./subgraphs`](./subgraphs/): Contains the The Graph schema and event handlers.
- [`./api`](./api/): Contains a lean backend just for demonstration purposes.
- [`./web`](./web/): Contains the frontend implementation for the FellowFund platform.

Besides that, we have the following repository as part of the project:

- (nextjs-viem-tee-sim-template)[https://github.com/fellowfund/nextjs-viem-tee-sim-template]: this directory is an implementation of APIs running in Phala Network's TEE, and used as a trusted Oracle for FellowFund.

In each of the directories and repos that compose FellowFund, a `README.md` file is present to explain how to set-up and run the project.