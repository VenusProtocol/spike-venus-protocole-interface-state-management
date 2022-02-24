import { Signer } from "ethers";

import { getVaultContract } from "../contracts";

export interface IStakeCoinsInput {
  signer: Signer;
  coinAddress: string;
  coinAmount: string;
}

export interface IStakeCoinsOutput {}

const stakeCoins = async ({ signer, ...params }: IStakeCoinsInput) => {
  const contract = getVaultContract(signer);
  return contract.stakeCoins(params.coinAddress, params.coinAmount);
};

export default stakeCoins;
