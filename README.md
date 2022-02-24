# [SPIKE] Venus Protocol Interface - State management using React Query

## What is this about?

This repo is here to explore how we could fetch, store and cache data on the
Venus web app using [React Query](https://react-query.tanstack.com/). The goal
is to have a separate layer that handles fetched data, regardless of its origin
(on-chain data, Venus backend service, third-party backend etc.). Using React
Query means we get access to some great features out of the box: parallel
queries, automatic refetching, automatic garbage collection, dependent queries,
macro and micro cache control, infinite scroll queries...

## Getting started

I'd advise you to clone this repo locally and install the dependencies with
`yarn`, this way you can benefit from the type features of your IDE.

## Structure

In this example, I've focused on showing a potential file structure we could use
to fetch data from a contract. I've used an hypothetic `Vault` contract as an
example (the ABI and the addresses used in this example are fake). That
contract is imagined to contain two functions: `getMarkets` and `stakeCoins`.

However, this structure can be extended to handle fetching data from other
sources, for example a third-party backend. We could have everything bundled up
inside the current `api` folder, or separated into different modules based on
origin, data type... It's up to us!

That said, the current file structure inside the `src` folder is as follows:

```
├── components          # Pure components only
├── containers          # Components that handle side effects and pass down props to pure components they import
└── clients             # Analytics, API etc.
    └── api
        ├── contracts   # ABIs, addresses and getters to use contracts in Web3 (with ethers.js in this case)
        ├── mutations   # Mutations and their respective hooks
        └── queries     # Queries and their respective hooks
```

I've added comments inside the files too. Feel free to talk in Slack if you
think some things should be done differently, if some things are unclear etc...
Nothing is set in stone and I'm happy to discuss and change anything and
everything if we have to.
