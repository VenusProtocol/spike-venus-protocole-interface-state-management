import { useMutation, MutationObserverOptions } from "react-query";

import stakeCoins, { IStakeCoinsInput, IStakeCoinsOutput } from "./stakeCoins";

export const STAKE_COINS_QUERY_KEY = "STAKE_COINS_QUERY_KEY";

const useStakeCoins = (
  options?: MutationObserverOptions<IStakeCoinsOutput, Error, IStakeCoinsInput>
) =>
  useMutation<IStakeCoinsOutput, Error, IStakeCoinsInput>(
    [STAKE_COINS_QUERY_KEY, options?.variables],
    stakeCoins,
    // Same thing as for queries in terms of caching (check useGetMarkets.ts for
    // a more complete example)
    options
  );

export default useStakeCoins;
