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

import { contractNft, multiStake, ownerNft, stakedNft, updateFarm, withdrawNft } from "state/action";
import ActiveStakingTable from "./ActiveStakingTable";
import Loader2 from "components/Loader/Loader2";
import { useV3Positions } from "hooks/useV3Positions";
import { loadUserNft } from "helpers/useNftHelpers";
import { wait } from "lib/hooks/transactions/retry";

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


const StakePop = ({ handleStake, detail, setActiveTab, activeFarm }) => {
  const wallet = useWallet();
  const dispatch = useDispatch();

  const { currentNetwork } = useSelector((state) => state.dashboard);
  const { contractNftlist, contractNftLoading, ownerNftlist, ownerNftLoading } = useSelector((state) => state.nft);

  const [loading, setLoading] = useState(false);
  const [farmLoading, setfarmLoading] = useState(false);
  const [activeTabNew, setActiveTabNew] = useState(1);
  const [selectedFarm, setSelectedFarm] = useState([]);

  const [singleStakeTokenIds, setSingleStakeTokenIds] = useState([]);

  const [multiStakeTokenIds, setMultiStakeTokenIds] = useState([]);
  // const [singleStakeTokenIds, setSingleStakeTokenIds] = useState(ownerNftlist);

  const [tokenId, setTokenId] = useState(null);
  const [farmList, setfarmList] = useState(null);
  const [loadInteraction, setLoadInteraction] = useState(false)
  const [loadingNft, setLoadingNft] = useState(true);

  const handleChange = (token) => {
    // console.log(token.value, "<===val");
    setTokenId(token?.value);
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

  const handleStakeAction = async (e) => {
    try {
      e.preventDefault();
      if (validateSubmit()) return;
      setLoadInteraction(true)
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);

      setLoading(true);
      let getPool = await web3.getNftPoolAddress(tokenId);

      if (getPool.toLowerCase() !== detail.key.pool) {
        setLoading(false);
        setLoadInteraction(false)
        return toast.error(
          `Nft Pool and farm pool must be same. so try to stake that nft in this pool ${getPool.toLowerCase()} Farm`
        );
      }
      await web3.stake(detail.key, tokenId, wallet.address);

      dispatch(
        updateFarm({
          data: {
            chainId: wallet.chainId,
            type: "Deposit",
            tokenId: tokenId,
            wallet: wallet.address,
            farmId: detail._id,
            isMutliStake: false,
          },
        })
      );

      dispatch(
        ownerNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          ownerNft: true,
          web3: web3,
        })
      );

      dispatch(
        contractNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          ownerNft: false,
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
      dispatch(
        stakedNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          stakedNft: true,
          web3: web3,
        })
      );
      toast.success(
        "Deposit successfully, some time it will take some seconds for reflect in list!"
      );
      setLoading(false);
      handleStake();
      setLoadInteraction(false)
      setLoadingNft(true)
    } catch (error) {
      setLoading(false);

      toast.error(error);
      console.log(error, "<<==err");
      setLoadInteraction(false)
    }
  };

  const handleMultiStakeAction = async (e) => {
    try {
      e.preventDefault();
      if (validateSubmit()) return;

      if (!selectedFarm.length)
        return toast.error("Please select farm for multi stake!");

      setLoadInteraction(true)
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      setLoading(true);
      let makeKeys = selectedFarm.map((data) => [
        data.key.rewardToken,
        data.key.pool,
        data.key.startTime,
        data.key.endTime,
        data.key.refundee,
      ]);
      await web3.multiStakeWithMultiCall(makeKeys, tokenId);

      dispatch(
        multiStake({
          data: {
            chainId: wallet.chainId,
            type: "MultiStake",
            tokenId: tokenId,
            wallet: wallet.address,
            incentiveId: selectedFarm.map((data) => data.incentiveId),
            farmId: selectedFarm.map((data) => data._id)
          },
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

      dispatch(
        stakedNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          stakedNft: true,
          web3: web3,
        })
      );
      toast.success(
        "Deposit successfully, some time it will take some seconds for reflect in list!"
      );

      setLoading(false);
      handleStake();
      setLoadInteraction(false)
    } catch (error) {
      setLoading(false);
      setLoadInteraction(false)
      toast.error(error);
      console.log(error, "<<==err");
    }
  };

  const getRelvantFarm = async (tokenId) => {

    let verifyTokenId = multiStakeTokenIds && multiStakeTokenIds.find((data) => data.value == tokenId);

    if (!verifyTokenId) return
    const web3 = new Web3Intraction(currentNetwork, wallet.provider);
    let farm = [];


    setfarmLoading(true);

    try {
      for (let i = 0; i < activeFarm.length; i++) {
        let keyData = [
          activeFarm[i].key.rewardToken,
          activeFarm[i].key.pool,
          activeFarm[i].key.startTime,
          activeFarm[i].key.endTime,
          activeFarm[i].key.refundee,
        ];
        let getRewards = await web3.getRewardInfo(keyData, tokenId);

        if (!getRewards) {
          farm.push(activeFarm[i]);
        }
      }
      let getPool = await web3.getNftPoolAddress(tokenId);
      setfarmLoading(false);
      setfarmList(
        farm.filter((data) => data.key.pool == getPool.toLowerCase())
      );
    } catch (error) {
      setfarmLoading(false);
      console.log(error, "<===error");
    }
  };

  const handleSelect = (data) => {
    if (selectedFarm.find((_d) => _d.incentiveId === data.incentiveId)) {
      setSelectedFarm(
        selectedFarm.filter((_d) => _d.incentiveId !== data.incentiveId)
      );
    } else {
      setSelectedFarm((pre) => [...pre, data]);
    }
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setSingleStakeTokenIds(ownerNftlist);

  //     // if(activeTabNew ==1)
  //   }
  // }, [ownerNftlist]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMultiStakeTokenIds(contractNftlist);

      // if(activeTabNew ==1)
    }
  }, [contractNftlist]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTokenId(null);
      setfarmList([]);
      // if(activeTabNew ==1)
    }
  }, [activeTabNew]);

  useEffect(() => {
    if (activeTabNew == 2 && tokenId && activeFarm.length && currentNetwork) {
      getRelvantFarm(tokenId);
    }
  }, [tokenId, activeFarm, currentNetwork, activeTabNew]);

  const showTab = (tab) => {
    if (loading) return;
    setActiveTabNew(tab);
  };

  const { positions } = useV3Positions(wallet?.address)

  const [openPositions] = positions?.reduce(
    (acc, p) => {
      acc[p.liquidity?.isZero() ? 1 : 0].push(p)
      return acc
    },
    [[], []]
  ) ?? [[], []]

  useEffect(() => {
   if(loadingNft){
    if (openPositions?.length) {
      loadNFT()
    } 
   }
  }, [openPositions])

  const loadNFT = async () => {
      setLoadingNft(true)
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      const nfts = await loadUserNft(openPositions, web3, true)
      setSingleStakeTokenIds(nfts)
      setLoadingNft(false)
  }

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
            onClick={handleStake}
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
          <div className="undefined flex nav pillsTab rounded flex-nowrap overflow-x-scroll p-1">
            <button
              style={{ minWidth: 100 }}
              // key={key}
              onClick={() => showTab(1)}
              disabled={activeTabNew === 2 && loading}
              className={`${activeTabNew === 1 && "active"
                } tab-button    relative text-white py-2 flex-shrink-0 text-base px-3 capitalize rounded text-gray-500`}
            >
              {activeTabNew === 2 && loading ? "Loading..." : "Single Stake"}
            </button>
            {/* <button
              style={{ minWidth: 100 }}
              // key={key}
              onClick={() => showTab(2)}
              disabled={activeTabNew === 1 && loading}
              className={`${activeTabNew === 2 && "active"
                } tab-button    relative text-white py-2 flex-shrink-0 text-base px-3 capitalize rounded text-gray-500`}
            >
              {activeTabNew === 1 && loading ? "Loading..." : "Multi Stake"}
            </button> */}
          </div>
          <div className={`${styles.tabContent} tabContent pt-3`}>
            <div
              // key={key}
              id="tabContent1"
              className={`${activeTabNew === 1 ? "" : "hidden"
                } tab-content border-0`}
            >
              <div className="top flex items-center justify-between gap-2 pt-2 px-3">
                <div className="left flex items-center gap-2">
                  <p className="m-0   text-white text-lg">
                    {"Approve & Stake"}
                  </p>
                </div>
              </div>
              <div className="modalBody py-2">
                <div className="inner p-3">
                  <form onSubmit={handleStakeAction}>
                    <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">
                      <div className=" col-span-12">
                        <div className="relative labelInput">
                          <label
                            htmlFor=""
                            className="form-label    px-2 z-10 text-white"
                          >
                            {loadingNft
                              ? "NFT Loading..."
                              : singleStakeTokenIds.length
                                ? "Select NFT Token Id"
                                : "No NFT Found"}
                          </label>

                          {!singleStakeTokenIds.length ? (
                            ""
                          ) : (
                            <>
                              <div className="text-dark">
                                <Select
                                  classNamePrefix="goblin"
                                  // menuIsOpen
                                  value={singleStakeTokenIds.find(
                                    (data) => data.value == tokenId
                                  ) || null}
                                  options={singleStakeTokenIds}
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
                          disabled={loading || !singleStakeTokenIds.length}
                          className=" commonBtn    mx-auto flex items-center justify-center btn w-full"
                        >
                          {loading ? (
                            <div className="spinner">
                              <span className=""> Please wait...</span>
                            </div>
                          ) : (
                            "Stake"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              // key={key}
              id="tabContent1"
              className={`${activeTabNew === 2 ? "" : "hidden"
                } tab-content border-0`}
            >
              <div className="top flex items-center justify-between gap-2 pt-2 px-3">
                <div className="left flex items-center gap-2">
                  <p className="m-0   text-white text-lg">
                    {"Stake In Multiple Farms"}
                  </p>
                </div>
              </div>
              <div className="modalBody py-2">
                <div className="inner p-3">
                  <form onSubmit={handleMultiStakeAction}>
                    <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">
                      <div className=" col-span-12">
                        <div className="relative labelInput">
                          <label
                            htmlFor=""
                            className="form-label    px-2 z-10 text-white"
                          >
                            {contractNftLoading && !multiStakeTokenIds.length
                              ? "NFT Loading..."
                              : !multiStakeTokenIds.length
                                ? "No Nft Found"
                                : "Select NFT Token Id"}
                          </label>

                          {!multiStakeTokenIds.length ? (
                            ""
                          ) : (
                            <>
                              <div className="text-dark">
                                <Select
                                  classNamePrefix="goblin"
                                  // menuIsOpen
                                  value={multiStakeTokenIds.find(
                                    (data) => data.value == tokenId
                                  ) || null}
                                  options={multiStakeTokenIds}
                                  components={{ Option: customOption }}
                                  menuPortalTarget={document.body}
                                  onChange={handleChange}
                                  isClearable
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <ActiveStakingTable
                      list={farmList}
                      handleSelect={handleSelect}
                      selectedFarm={selectedFarm}
                      loading={farmLoading}
                    />
                    <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">
                      <div className="col-span-12">
                        <button
                          type="submit"
                          disabled={contractNftLoading || loading || !multiStakeTokenIds.length}
                          className=" commonBtn    mx-auto flex items-center justify-center btn w-full"
                        >
                          {loading ? (
                            <div className="spinner">
                              <span className=""> Please wait...</span>
                            </div>
                          ) : (
                            "Stake"
                          )}
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

export default StakePop;
