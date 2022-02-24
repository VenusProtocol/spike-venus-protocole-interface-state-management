import React from "react";

import { Market as IMarket } from "../clients/api";

export interface IDashboardProps {
  markets: IMarket[];
  isGetMarketsLoading: boolean;
  isStakeCoinsLoading: boolean;
  stakeCoins: (params: { coinAddress: string; coinAmount: string }) => void;
  getMarketsError?: Error;
  stakeCoinsError?: Error;
}

// Our page component stays pure, with all of the logic to handle side effects
// contained in its respective container. Note that the container imports and
// renders this component, not the other way around. This way components can be
// reusable and easily testable (by just passing mocked props).
export const Dashboard: React.FC<IDashboardProps> = ({
  markets,
  isGetMarketsLoading,
  isStakeCoinsLoading,
  stakeCoins,
  getMarketsError,
  stakeCoinsError,
}) => {
  // From here we then have access to markets, isGetMarketsLoading and
  // getMarketsError to decide on what to render.

  // We also have access to the stakeCoins mutation we passed down, as well as
  // its loading state and eventual errors (isStakeCoinsLoading,
  // stakeCoinsError)

  return <></>;
};
