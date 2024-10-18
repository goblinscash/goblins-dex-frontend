import { useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";

import { cryptoData } from "helpers/constants";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setCurrentNetwork } from "state/dashboard/actions";

/**
 * Description:- Here we creating context provider for wallet where we managing all actions for wallet like:-connect, disconnect,switchNetwork, address, balance etc
 * @param {any} {children}
 * @returns {any}
 */
export const useWallet = () => {
  const wallet = useWeb3React();
  let dispatch = useDispatch();

  // console.log(useWeb3ModalAccount, "<====useWeb3ModalAccount");

  const [isActive, setIsActive] = useState(false);

  const [address, setaddress] = useState(null);

  const { account, provider, chainId } = wallet;

  // console.log(providerHook, "<====providerHook")
  useEffect(() => {
    setIsActive(wallet?.isActive);
    setaddress(account || "");
    // setaddress("0x64Da84B4e73a9189521198c6ABCa617E30644FCf");

  }, [account, wallet?.isActive]);

  useEffect(() => {
    if (provider && isActive) {
      provider?.on("disconnect", (res) => {
        disconnect();
        dispatch(setCurrentNetwork(null));
      });
    }
  }, [provider, isActive]);

  useEffect(() => {
    try {
      // toast.success(walletType);
      if (chainId && isActive) {
        let findChain = cryptoData.find(
          (network) => network.chainId === chainId
        );
        if (findChain) {
          dispatch(setCurrentNetwork(findChain));
        } else {
          dispatch(setCurrentNetwork(null));
          // toast.error(
          //   "This platform support only BNB, SmartBCH Please switch to that chain!"
          // );
        }
      }
    } catch (error) {}
  }, [isActive, chainId]);

  // console.log(state,accountHook, "<====state")

  const values = useMemo(
    () => ({
      isActive,
      address,

      provider,
      chainId,
    }),

    [isActive, address, chainId, provider]
  );

  return values;
};
