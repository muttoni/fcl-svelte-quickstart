# Flow Client Library (FCL) Svelte Quickstart App

This library serves as a Svelte alternative to the [FCL React Quick Start App found on the official Flow developer documentation](https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/).

## How to use?

```npm install```

Then

```npm run dev```

(For publishing on external JAMSTACK providers use `npm run build`, although most providers do this automatically) 


## Why?

Svelte is awesome, and porting something to another framework forces you to learn (and appreciate) the differences and similarities.

## Significant Changes From the React version?

- Flow authentication is handled via the `Auth.svelte` component
- Uses `.env` variables
- Instead of React's setState/useState, I've used Svelte stores.
- All Flow related JS files are in a separate folder (config, actions and stores)
  - All authentication actions are in `actions.js`
  - All Flow-related stores are in `stores.js`
  - All configs are in `config.js`
- More organized layout