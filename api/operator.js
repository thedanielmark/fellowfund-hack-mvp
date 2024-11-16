var dotenv = require('dotenv');
dotenv.config();

// Initialize polling data
let lastPollData = {
  timestamp: Date.now(),
};

let fellowshipEvents = [];
let fellowshipApplications = new Map(); // Map fellowshipId -> array of applications

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
    console.log("Listening for fellowship applications for fellowshipId:", fellowshipId);

    if (!fellowshipApplications.has(fellowshipId)) {
        const sampleApplication = {
            applicant: "0x1234567890123456789012345678901234567890",
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
        fellowshipApplications.set(fellowshipId, []);
    }
};

const executeEveryXSeconds = (func, seconds, ...args) => {
  // Execute immediately
  func(...args);

  // Schedule next execution
  setTimeout(() => executeEveryXSeconds(func, seconds, ...args), seconds * 1000);
};

const ethers = require('ethers');

let operatorWallet;

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
    listenForFellowshipEvents
};

