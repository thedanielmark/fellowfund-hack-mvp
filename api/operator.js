const ethers = require('ethers');
const fellowFundAbi = require('../contracts/ignition/deployments/chain-80002/artifacts/FellowFund#FellowFund.json');
var dotenv = require('dotenv');
dotenv.config();

// Initialize polling data
let lastPollData = {
  timestamp: Date.now(),
};

let fellowshipEvents = [];
let fellowshipApplications = new Map(); // Map fellowshipId -> array of applications
let operatorWallet;

const listenForFellowshipEvents = () => {
    console.log("Listening for fellowship events");

    if (fellowshipEvents.length == 0) {
        // Create a sample fellowship event
        const sampleFellowship = {
            metadata: `{ 
                "githubOrg": "fellowfund",
                "kpiTargets": {
                    "totalCommits": {
                        "targetValue": 3,
                        "weight": 0.7
                    },
                    "poapEvents": {
                        "targetValue": 1,
                        "weight": 0.3
                    }
                }
            }`,
            funds: 1000000000000000000n, // 1 ETH in wei
            applicationDeadline: BigInt(Math.floor(Date.now()/1000)), // starts immediately
            marketDeadline: BigInt(Math.floor(Date.now()/1000) + 60), // 1 minute after application deadline
            epochEndTime: BigInt(Math.floor(Date.now()/1000) + 180), // 2 minutes after market deadline
            status: 0, // FellowshipStatus.AcceptingApplications
            maxApplicants: 2
        };
        const sampleFellowshipId = 1;
        // Add the sample fellowship to the fellowshipEvents array
        fellowshipEvents.push(sampleFellowship);
        executeEveryXSeconds(listenForFellowshipApplications, 5, sampleFellowshipId)
    }
    
};

const listenForFellowshipApplications = (fellowshipId) => {
    console.log(`Listening for fellowship applications of fellowshipId=${fellowshipId}`);

    const sampleApplication = {
        applicant: "0x9DaD0C0903dcD9a691504c674D8D87bF570e4fC4",
        metadata: `{
            "githubHandle": "gsmachado"
        }`,
        achieved: false,
        verified: false,
        yesStakes: 0n,
        noStakes: 0n,
        accepted: false,
        grantAmount: 0n
    };

    if (!fellowshipApplications.has(fellowshipId)) {
        console.log(`Adding sample application (NEW) to fellowshipId=${fellowshipId}`);
        fellowshipApplications.set(fellowshipId, [sampleApplication]);
    }
    // else {
    //     let applications = fellowshipApplications.get(fellowshipId);
    //     console.log(`Adding sample application (EXISTING) to fellowshipId=${fellowshipId}`);
    //     applications.push(sampleApplication);
    // }
};

const callOpenFellowshipMarkets = (fellowshipId) => {
    console.log(`Calling openFellowshipMarkets() for fellowshipId=${fellowshipId}`);
    const fellowFundAddress = process.env.FELLOWFUND_CONTRACT_ADDRESS;

    const provider = operatorWallet.provider;
    const fellowFundContract = new ethers.Contract(fellowFundAddress, fellowFundAbi, provider);

    fellowFundContract.connect(operatorWallet).openFellowshipMarkets(fellowshipId)
        .then((tx) => {
            console.log(`Transaction sent: ${tx.hash}`);
            return tx.wait();
        })
        .then((receipt) => {
            console.log(`Transaction confirmed: ${receipt.transactionHash}`);
        })
        .catch((error) => {
            console.error(`Failed to evaluate market: ${error}`);
        });
};

const callEvaluateMarket = (fellowshipId) => {
    console.log(`Calling evaluateMarket() for fellowshipId=${fellowshipId}`);
    const fellowFundAddress = process.env.FELLOWFUND_CONTRACT_ADDRESS;

    const provider = operatorWallet.provider;
    const fellowFundContract = new ethers.Contract(fellowFundAddress, fellowFundAbi, provider);

    fellowFundContract.connect(operatorWallet).evaluateMarket(fellowshipId)
        .then((tx) => {
            console.log(`Transaction sent: ${tx.hash}`);
            return tx.wait();
        })
        .then((receipt) => {
            console.log(`Transaction confirmed: ${receipt.transactionHash}`);
        })
        .catch((error) => {
            console.error(`Failed to evaluate market: ${error}`);
        });
}

const executeEveryXSeconds = (func, seconds, ...args) => {
  // Execute immediately
  func(...args);

  // Schedule next execution
  setTimeout(() => executeEveryXSeconds(func, seconds, ...args), seconds * 1000);
};

const loadOperatorWallet = async () => {
    try {
        // Load private key from environment variable for security
        const privateKey = process.env.OPERATOR_PRIVATE_KEY;
        if (!privateKey) {
            throw new Error("Operator private key not found in environment variables");
        }

        // Connect to provider (e.g. local hardhat node, testnet, or mainnet)
        const provider = new ethers.JsonRpcProvider(process.env.RPC_URL || "http://localhost:8545");
        
        // Create wallet instance
        operatorWallet = new ethers.Wallet(privateKey, provider);
        
        console.log("Operator wallet loaded with address:", operatorWallet.address);
        
        return operatorWallet;
    } catch (error) {
        console.error("Failed to load operator wallet:", error);
        throw error;
    }
};

module.exports = {
    loadOperatorWallet,
    executeEveryXSeconds,
    listenForFellowshipApplications,
    listenForFellowshipEvents,
    callOpenFellowshipMarkets,
    callEvaluateMarket,
};

