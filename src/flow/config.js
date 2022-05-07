import { config } from "@onflow/fcl";

config({
  "app.detail.title": "Flow Svelte Quick Start",
  "app.detail.icon": "https://unavatar.io/twitter/muttonia",
  "accessNode.api": process.env.ACCESS_NODE_API,
  "discovery.wallet": process.env.DISCOVERY_WALLET,
  "0xProfile": process.env.PROFILE_ADDRESS
})