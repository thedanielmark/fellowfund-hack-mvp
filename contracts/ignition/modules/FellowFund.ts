// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const fellowFundModule = buildModule("FellowFund", (m) => {
    // If parameters are required for deployment, they can be provided in a JSON file:
    // npx hardhat ignition deploy ignition/modules/FellowFund.ts --parameters ignition/parameters.json

    const phalaVerifier = m.getParameter("phalaVerifier", "0xB20F6adf676D488b22962f0C84CD011BE6DD63cB");
    const operator = m.getParameter("operator", "0x77FC2336f8d077Fa42BDBF8a11cfe0d0F5330c69");

    const fellowFund = m.contract("FellowFund", [phalaVerifier, operator], {});
    return { fellowFund };
});

export default fellowFundModule;
