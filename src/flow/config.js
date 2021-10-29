import { config } from "@onflow/fcl";

config({
  "accessNode.api": process.env.ACCESS_NODE_API,
  "discovery.wallet": process.env.DISCOVERY_WALLET,
  "0xProfile": process.env.PROFILE_ADDRESS
})