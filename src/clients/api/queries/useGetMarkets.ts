import { QueryObserverOptions, useQuery } from "react-query";

import getMarkets, { IGetMarketsOutput } from "./getMarkets";

export interface IUseGetMarketsOptions
  extends QueryObserverOptions<IGetMarketsOutput, Error> {}

export const GET_MARKETS_QUERY_KEY = "GET_MARKETS_QUERY_KEY";

const useGetMarkets = (options: IUseGetMarketsOptions = {}) =>
  useQuery<IGetMarketsOutput, Error>(GET_MARKETS_QUERY_KEY, getMarkets, {
    // This is where we can pass any option we want in order to control the cached
    // data:
    // Mark the data as fresh for 10 seconds, after which it will be
    // considered stale and automatically refetched in the background
    // if the hook re-renders (for example if a user navigates to
    // another page that also renders this hook).
    staleTime: 1000 * 10,
    // Automatically delete the data cached after executing this query
    // if no other component is currently rendering this hook.
    cacheTime: 0,
    // Automatically refetch data in the background every 10 seconds.
    refetchInterval: 1000 * 60,
    ...options,
  });

export default useGetMarkets;
