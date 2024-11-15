// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const githubVerificationRegistryModule = buildModule("GithubVerificationRegistry", (m) => {
    // If parameters are required for deployment, they can be provided in a JSON file:
    // npx hardhat ignition deploy ignition/modules/FellowFund.ts --parameters ignition/parameters.json
    const name = m.getParameter("name", "githubVerificationRegistry");

    const githubVerificationRegistry = m.contract("GithubVerificationRegistry", [name], {});
    return { githubVerificationRegistry };
});

export default githubVerificationRegistryModule;
