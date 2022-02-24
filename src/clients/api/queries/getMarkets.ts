import { Market } from "../types";
import { getVaultContract } from "../contracts";

export type IGetMarketsOutput = {
  markets: Market[];
};

// This function is in charge of fetching the markets from the vault contract.
const getMarkets = async () => {
  const contract = getVaultContract();

  // Format result here (sanitizing, shaping etc.)
  const res = await contract.getMarkets();

  return res;
};

export default getMarkets;
