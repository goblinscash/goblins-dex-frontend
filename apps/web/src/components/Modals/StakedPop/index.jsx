"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Select from "react-select";

// css
import styles from "./StakePop.module.scss";

//helpers
import { useWallet } from "hooks/useWallet";
import Web3Intraction from "utils/web3Intraction";

import { stakedNft, unstakeMultiFarm, updateMyFarm, withdrawNft } from "state/action";
import { truncate } from "fs";
import Loader2 from "components/Loader/Loader2";

const customOption = (props) => (
  <div className="custom-option flex items-center py-2" {...props.innerProps}>
    <img
      height={100}
      width={100}
      style={{ height: 100, width: 100 }}
      src={props?.data?.image}
      alt={props.data.label}
      className="max-w-full object-contain option-image"
    />
    <span className="text-dark" style={{ color: "#000" }}>
      {props.data.label}
    </span>
  </div>
);

const StakedPop = ({ handleStaked, myFarm, setActiveTab, isClaimAll }) => {
  const wallet = useWallet();
  const dispatch = useDispatch();

  const { currentNetwork } = useSelector((state) => state.dashboard);
  const { stakedNftlist, stakedNftLoading } = useSelector((state) => state.nft);
  const [loadInteraction, setLoadInteraction] = useState(false)
  const [loading, setLoading] = useState(false);

  const [tokenIds, setTokenIds] = useState(stakedNftlist);

  const [tokenId, setTokenId] = useState(null);

  const handleChange = (token) => {
    // console.log(token.value, "<===val");
    setTokenId(token.value);
  };

  const validateSubmit = () => {
    if (!wallet.address) {
      // await wallet.connect();
      return toast.error("Please connect wallet first!");
    }
    if (!currentNetwork) {
      return toast.error("Something went wrong!");
    }
    if (!currentNetwork) {
      return toast.error("Something went wrong!");
    }
    if (wallet?.chainId && currentNetwork.chainId != wallet.chainId) {
      return toast.error("Switch wallet network to " + currentNetwork.symbol);
    }
    if (!tokenId || tokenId == "") {
      return toast.error("token id required!");
    }
    return false;
  };

  const handleMultiUnStakeAction = async (e) => {
    try {
      e.preventDefault();
      if (validateSubmit()) return;

      let getTokenFarms = myFarm.filter((farm) => farm.tokenId === tokenId);

      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      setLoading(true);
      setLoadInteraction(true)
      let makeKeys = getTokenFarms.map((data) => [
        data.key.rewardToken,
        data.key.pool,
        data.key.startTime,
        data.key.endTime,
        data.key.refundee,
      ]);

      if (isClaimAll) {
        await web3.mutliCallClaimAll(makeKeys, tokenId, wallet.address);
        toast.success(`Successfully Claim All.`);
      } else {
        await web3.mutliCallUnstakeAll(makeKeys, tokenId, wallet.address);

        toast.success(`#${tokenId} unstaked from all farms`);
      }

      setLoading(false);
      handleStaked();
      setActiveTab(1);

      dispatch(
        unstakeMultiFarm({
          data: {
            type: "unstakesFarm",
            chainId: wallet.chainId,
            wallet: wallet.address,
            tokenId: tokenId
          }
        })
      );

      dispatch(
        stakedNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          stakedNft: true,
          web3: web3
        })
      );

      dispatch(
        withdrawNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          withdrawNft: true,
          web3: web3

        })
      );
      setLoadInteraction(false)
    } catch (error) {
      setLoading(false);

      toast.error(error);
      console.log(error, "<<==err");
      setLoadInteraction(false)
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTokenIds(stakedNftlist);
      setTokenId(null);

      // if(activeTabNew ==1)
    }
  }, []);

  return (
    <>
    {loadInteraction && <Loader2 />}  
      <div
        className={`${styles.StakePop} fixed inset-0 flex items-center justify-center cstmModal`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className={`${styles.modalDialog} modalDialog p-2 relative mx-auto rounded-lg z-10`}
        >
          <button
            onClick={handleStaked}
            disabled={loading}
            className="m-0 border-0 p-0 transparent    text-gray-400 absolute top-1 right-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M20.425 2.5H9.5875C5.35 2.5 2.5 5.475 2.5 9.9V20.1125C2.5 24.525 5.35 27.5 9.5875 27.5H20.425C24.6625 27.5 27.5 24.525 27.5 20.1125V9.9C27.5 5.475 24.6625 2.5 20.425 2.5Z"
                fill="#00FF00"
              />
              <path
                d="M18.7697 17.2131L16.5459 14.9906L18.7684 12.7681C19.1959 12.3419 19.1959 11.6481 18.7684 11.2219C18.3409 10.7919 17.6497 10.7931 17.2222 11.2206L14.9984 13.4431L12.7747 11.2181C12.3472 10.7906 11.6547 10.7931 11.2272 11.2181C10.8009 11.6456 10.8009 12.3394 11.2272 12.7656L13.4522 14.9906L11.2322 17.2094C10.8047 17.6369 10.8047 18.3306 11.2322 18.7556C11.4459 18.9706 11.7247 19.0769 12.0047 19.0769C12.2859 19.0769 12.5647 18.9706 12.7784 18.7569L14.9984 16.5369L17.2234 18.7606C17.4372 18.9744 17.7159 19.0806 17.9959 19.0806C18.2759 19.0806 18.5559 18.9731 18.7697 18.7606C19.1972 18.3331 19.1972 17.6406 18.7697 17.2131Z"
                fill="#00FF00"
              />
            </svg>
          </button>

          <div className={`${styles.tabContent} tabContent pt-3`}>
            <div
              // key={key}
              id="tabContent1"
              className={`tab-content border-0`}
            >
              <div className="top flex items-center justify-between gap-2 pt-2 px-3">
                <div className="left flex items-center gap-2">
                  <p className="m-0   text-white text-lg">
                    {isClaimAll ? "Claim All" : "UnStake All"}
                  </p>
                </div>
              </div>
              <div className="modalBody py-2">
                <div className="inner p-3">
                  <form onSubmit={handleMultiUnStakeAction}>
                    <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">
                      <div className=" col-span-12">
                        <div className="relative labelInput">
                          <label
                            htmlFor=""
                            className="form-label    px-2 z-10 text-white"
                          >
                            {stakedNftLoading && !tokenIds.length
                              ? "NFT Loading..."
                              : !tokenIds.length
                                ? "No Nft Found"
                                : "Select NFT Token Id"}
                          </label>

                          {!loading && !tokenIds.length ? (
                            ""
                          ) : (
                            <>
                              <div className="text-dark">
                                <Select
                                  classNamePrefix="goblin"
                                  // menuIsOpen
                                  value={tokenIds.find(
                                    (data) => data.value == tokenId
                                  )}
                                  options={tokenIds}
                                  components={{ Option: customOption }}
                                  menuPortalTarget={document.body}
                                  onChange={handleChange}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">
                      <div className="col-span-12">
                        <button
                          type="submit"
                          disabled={loading || !tokenIds.length}
                          className=" commonBtn    mx-auto flex items-center justify-center btn w-full"
                        >
                          {loading ? (
                            <div className="spinner">
                              <span className=""> Please wait...</span>
                            </div>
                          ) : (
                            isClaimAll ? "Claim" : "UnStake"
                          )
                          }
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakedPop;
