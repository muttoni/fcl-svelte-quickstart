# Flow Client Library (FCL) Svelte Quickstart App

This library serves as a Svelte alternative to the [FCL React Quick Start App found on the official Flow developer documentation](https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/).

## Why?

Svelte is awesome.

## Significant Changes From the React version?

Due to Svelte's cool functionality, I've re-arranged some of the project structure compared to the React app to make it more modular. For example:

- Flow authentication is handled via the `Auth.svelte` component
- Instead of React's setState/useState, I've used Svelte stores.
- All Flow related JS files are in a separate folder (config, actions and stores)
  - All authentication actions are in `actions.js`
  - All Flow-related stores are in `stores.js`
  - All configs are in `config.js`
- More organized layout