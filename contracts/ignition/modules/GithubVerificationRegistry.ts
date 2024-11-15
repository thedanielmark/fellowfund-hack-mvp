// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const githubVerificationRegistryModule = buildModule("GithubVerificationRegistry", (m) => {
    // If parameters are required for deployment, they can be provided in a JSON file:
    // npx hardhat ignition deploy ignition/modules/FellowFund.ts --parameters ignition/parameters.json
    const verifierContract = m.getParameter("verifier", "0x5fbdb2315678afecb367f032d93f642f64180aa3");

    const githubVerificationRegistry = m.contract("GithubVerificationRegistry", [verifierContract], {});
    return { githubVerificationRegistry };
});

export default githubVerificationRegistryModule;
