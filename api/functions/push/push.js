const { PushAPI, CONSTANTS } = require("@pushprotocol/restapi");
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  process.env.SEPOLIA_RPC_URL
);
const signer = new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`, provider);

async function sendNotification() {
  const userAlice = await PushAPI.initialize(signer, {
    env: CONSTANTS.ENV.STAGING,
  });

  const aliceSubscriptions = await userAlice.notification.subscriptions();
  console.log(aliceSubscriptions);

  const sendNotifRes = await userAlice.channel.send(["*"], {
    notification: { title: "test", body: "test" },
  });

  //   console.log(sendNotifRes);
}

sendNotification();
