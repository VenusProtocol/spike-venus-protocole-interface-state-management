import React from "react";

import { useGetMarkets, useStakeCoins } from "../clients/api";
import { Dashboard } from "../components/Dashboard";

const someSigner = {} as any;

// The container is responsible for handling the logic related to side effects.
// In this example we're only showcasing how to handle data fetching and
// mutations, but this container could also contain local states, functions for
// handling local storage etc. We can then test the container too. If we are
// doing end-to-end tests, we can boot up the app and make it point to a local
// network (using Hardhat for example). If we are doing functional tests, we can
// mock the individual functions; for example by mocking getMarkets.ts to make
// it export a function that returns mocked data (or an error if we want to test
// unhappy paths for example).
export const DashboardContainer = () => {
  const {
    isLoading: isGetMarketsLoading,
    error: getMarketsError,
    data: getMarketsData,
  } = useGetMarkets({
    onSuccess: (data) => {
      // This code is called when a request is successfully only. It also
      // returns the data fetched from that query, so you can then do anything
      // you want from here (update local storage, redirect to another page
      // etc.)
    },
    onError: (error) => {
      // Handle error
    },
    onSettled: () => {
      // This is called whenever the query finishes, whether it was successful
      // or not
    },
    // There's plenty more options, you can check the documentation at:
    // https://react-query.tanstack.com/reference/useQuery
  });

  const {
    mutate: mutationStakeCoins,
    isLoading: isStakeCoinsLoading,
    error: stakeCoinsError,
  } = useStakeCoins({
    // Some story here: there's plenty of options available for mutations too:
    // https://react-query.tanstack.com/reference/useMutation
  });

  const stakeCoins = (args: { coinAddress: string; coinAmount: string }) =>
    mutationStakeCoins({
      signer: someSigner,
      ...args,
    });

  return (
    <Dashboard
      markets={getMarketsData.markets}
      isGetMarketsLoading={isGetMarketsLoading}
      getMarketsError={getMarketsError}
      stakeCoins={stakeCoins}
      isStakeCoinsLoading={isStakeCoinsLoading}
      stakeCoinsError={stakeCoinsError}
    />
  );
};
