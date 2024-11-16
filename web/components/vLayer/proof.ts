"use client";
import webProofProver from "./webProver";
import { foundry } from "viem/chains";

import {
  createVlayerClient,
  type WebProof,
  type Proof,
  isDefined,
} from "@vlayer/sdk";

import {
  createExtensionWebProofProvider,
  expectUrl,
  notarize,
  startPage,
} from "@vlayer/sdk/web_proof";

import { createContext } from "@vlayer/sdk/config";
import webProofVerifier from "./webProofVerifier";
import { Hex } from "viem";

const context: {
  webProof: WebProof | undefined;
  provingResult: [Proof, string, Hex] | undefined;
} = { webProof: undefined, provingResult: undefined };

const { chain, ethClient, account, proverUrl, confirmations } =
  await createContext({
    chainName: "polygonAmoy",
    proverUrl: "https://test-prover.vlayer.xyz/",
    jsonRpcUrl: "https://rpc.ankr.com/polygon_amoy",
    privateKey:
      "0x6bec59d4979fdaaf7f4b7174b84332246fb89e42b159e930bf7ea2351483b5a0",
  });

const GithubUserAddress = account.address;

export async function setupRequestProveButton() {
  const provider = createExtensionWebProofProvider({
    notaryUrl: "http://localhost:7047",
    wsProxyUrl: "ws://localhost:55688",
  });
  const webProof = await provider.getWebProof({
    proverCallCommitment: {
      address: "0x93316ebf65bd209b3832a6d383d53905a97f9d90",
      proverAbi: webProofProver.abi,
      chainId: foundry.id,
      functionName: "main",
      commitmentArgs: ["0x"],
    },
    logoUrl: "http://twitterswap.com/logo.png",
    steps: [
      startPage("https://github.com/login", "Go to x.com login page"),
      expectUrl("https://github.com/LeoFranklin015", "Log in"),
      notarize("https://api.github.com/users/LeoFranklin015", "GET", "Prove"),
    ],
  });

  console.log("WebProof generated!", webProof);
  context.webProof = webProof;
}
