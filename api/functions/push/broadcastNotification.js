const { PushAPI, CONSTANTS } = require("@pushprotocol/restapi");
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/cF6vdciZhe1Kdk63D63NfrJXeBvna1d0"
);
const signer = new ethers.Wallet(
  "6bec59d4979fdaaf7f4b7174b84332246fb89e42b159e930bf7ea2351483b5a0",
  provider
);

async function broadcastNotification(type, body) {
  const userAlice = await PushAPI.initialize(signer, {
    env: CONSTANTS.ENV.STAGING,
  });

  if (type == 1) {
    const sendNotifRes = await userAlice.channel.send(["*"], {
      notification: { title: "New Fellow Applied", body: body, category: 1 },
    });
  } else if (type == 2) {
    const sendNotifRes = await userAlice.channel.send(["*"], {
      notification: {
        title: "New Betting has been placed",
        body: body,
        category: 2,
      },
    });
  } else {
    const sendNotifRes = await userAlice.channel.send(["*"], {
      notification: {
        title: "Markets Notification",
        body: body,
        category: 3,
      },
    });
  }
}

broadcastNotification(2, "A new fellow has applied to your fellowship");
