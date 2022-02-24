import { ethers, Signer } from "ethers";

import abi from "./abi.json";
import addresses from "./addresses.json";

export const getVaultContract = (signer?: Signer) => {
  const address =
    process.env.REACT_APP_CHAIN_ID === "1"
      ? addresses.mainnet
      : addresses.ropsten;

  // Note: we could use TypeChain (https://github.com/dethcrypto/TypeChain) to
  // get types for contracts
  return new ethers.Contract(address, abi, signer);
};
