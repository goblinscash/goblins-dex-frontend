import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios"

// img
import loader from "assets/farmingAssets/Images/loading.gif";
import sortIcon from "assets/farmingAssets/Images/sort.svg";
import { getSymbols } from "helpers/constants";
import { toFixedCustm } from "helpers/utils";
import Web3Intraction from "utils/web3Intraction";
import { useDispatch, useSelector } from "react-redux";
import { updateFarm, withdrawNft } from "state/action";
import { toast } from "react-toastify";

function MyFarm({
  wallet,
  loading,
  incentiveIds,
  handleUnStake,  //used before with confirmation pop up
  handleStaked,
  handleWithdraw,
  isBlocked,
  myFarmload,
  handleSort,
  setActiveTab
}) {
  const dispatch = useDispatch()
  const { currentNetwork } = useSelector((state) => state.dashboard);

  const [internalLoading, setInternalLoading] = useState(false)

  const [tokenList, setTokenList] = useState(null)
  useEffect(() => {

    const uri = 'https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json';

    axios.get(uri).then((res) => {
      if (res.data.tokens) {

        setTokenList(res.data.tokens.reduce((acc, token) => {
          acc[token.address.toLowerCase()] = token.logoURI;
          return acc;
        }, {}))
        
      } else {
        return null
      }
    }).catch((err) => {
      console.log(err)
    })

  }, [])

  // adding funtion to skip confirmation modal
  const handleClaim = async (e, detail) => {
    try {
      e.preventDefault();
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      setInternalLoading(true)
      await web3.mutliCallReStake(
        [
          detail.key.rewardToken,
          detail.key.pool,
          detail.key.startTime,
          detail.key.endTime,
          detail.key.refundee,
        ],
        detail.tokenId,
        wallet.address
      );
    } catch (error) {
      console.log(error, "<====error");
      toast.error(error);
    }finally{
      setInternalLoading(false)

    }
  };

  const handleunStake = async (e, detail) => {
    try {
      e.preventDefault();
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      setInternalLoading(true);
      await web3.mutliCallUnstake(
        [
          detail.key.rewardToken,
          detail.key.pool,
          detail.key.startTime,
          detail.key.endTime,
          detail.key.refundee,
        ],
        detail.tokenId,
        wallet.address
      );

      dispatch(
        updateFarm({
          data: {
            chainId: wallet.chainId,
            type: "Unstake",
            walletAddress: wallet.address,
            incentiveId: detail.incentiveId,
          },
        })
      );

      dispatch(
        withdrawNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          withdrawNft: true,
        })
      );
      
      setActiveTab(1)
      // handleConfirm();
      myFarmload();
    } catch (error) {
      console.log(error, "<====error");
      toast.error(error);
    } finally {
      setInternalLoading(false)
    }
  };



  return (
    <>
      <div className="py-4 text-right">
        <div className="flex items-center justify-end gap-10">
          <button
            type="button"
            onClick={handleWithdraw}
            disabled={isBlocked}
            className=" commonBtn  mx-auto inline-flex items-center justify-end btn m-0"
          >
            Withdraw Tokens
          </button>
          {incentiveIds.length > 0 && (
            <>
              <button
                type="button"
                onClick={(e) => handleStaked(null)}
                disabled={isBlocked}
                className=" commonBtn  mx-auto inline-flex items-center justify-end btn m-0"
              >
                Unstake All
              </button>

              <button
                type="button"
                onClick={(e) => handleStaked(true)}
                disabled={isBlocked}
                className=" commonBtn  mx-auto inline-flex items-center justify-end btn m-0"
              >
                Claim All
              </button>
            </>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table
          className="min-w-full transparent stipped"
          style={{ borderCollapse: "separate", borderSpacing: "0" }}
        >
          <thead>
            <tr className=" text-sm leading-normal transparent">
              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{
                  background: "#011b1c",
                  borderTopLeftRadius: 5,
                }}
              >
                <button className="border-0 p-0 bg-transparent flex items-center">
                  Farm
                </button>
              </th>

              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{ background: "#011b1c" }}
              >
                <button className="border-0 p-0 bg-transparent flex items-center">
                  Rewards
                </button>
              </th>

              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{ background: "#011b1c" }}
              >
                <button className="border-0 p-0 bg-transparent flex items-center">
                  Token Id
                </button>
              </th>
              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{ background: "#011b1c" }}
              >
                <button
                  className="border-0 p-0 bg-transparent flex items-center"
                  onClick={() => handleSort("startTime")}
                >
                  Start Time
                  <img
                    src={sortIcon}
                    className="max-w-full"
                    style={{ height: 20, width: 20 }}
                    height={100}
                    width={100}
                    alt=""
                  />
                </button>
              </th>

              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{ background: "#011b1c" }}
              >
                <button
                  className="border-0 p-0 bg-transparent flex items-center"
                  onClick={() => handleSort("endTime")}
                >
                  End Time
                  <img
                    src={sortIcon}
                    className="max-w-full"
                    style={{ height: 20, width: 20 }}
                    height={100}
                    width={100}
                    alt=""
                  />
                </button>
              </th>

              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{
                  background: "#011b1c",
                  borderTopRightRadius: 5,
                }}
              ></th>
            </tr>
          </thead>
          <tbody className="text-white text-sm font-light">
            {!wallet?.isActive ? (
              <tr>
                <td
                  className="py-3 px-6 text-left border-b border-gray-600 transparent"
                  style={{ background: "#002628" }}
                  colSpan={6}
                >
                  <div
                    className="text-center flex items-center justify-center"
                    style={{
                      height: 200,
                    }}
                  >
                    <p>Please Connect wallet</p>
                  </div>
                </td>
              </tr>
            ) : loading  ? (
              <tr>
                <td
                  className="py-3 px-6 text-left border-b border-gray-600 transparent"
                  style={{ background: "#002628" }}
                  colSpan={6}
                >
                  <div
                    className="text-center flex items-center justify-center"
                    style={{
                      height: 500,
                    }}
                  >
                    <img
                      src={loader}
                      className="max-w-full"
                      style={{ height: 30, width: 30 }}
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                </td>
              </tr>
            ) : !incentiveIds.length ? (
              <tr>
                <td
                  className="py-3 px-6 text-left border-b border-gray-600 transparent"
                  style={{ background: "#002628" }}
                  colSpan={6}
                >
                  <div
                    className="text-center flex items-center justify-center"
                    style={{
                      height: 200,
                    }}
                  >
                    <p>No Farm Found</p>
                  </div>
                </td>
              </tr>
            ) : (
              incentiveIds &&
              incentiveIds?.length > 0 &&
              incentiveIds.map((item, key) => {

                return(
                <tr
                  key={key}
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <td
                    createIncentive
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="imgWrp flex-shrink-0 flex items-center">
                      {getSymbols[item?.getPoolDetail?.token0Address] ? (
                        <img
                          src={getSymbols[item?.getPoolDetail?.token0Address]}
                          alt=""
                          className="rounded-pill max-w-full object-cover shadow-sm"
                          height={1000}
                          width={1000}
                          style={{ height: 30, width: 30 }}
                        />
                      ): tokenList&& tokenList[item?.getPoolDetail?.token0Address] ? (
                        <img
                          src={tokenList[item?.getPoolDetail?.token0Address]}
                          alt=""
                          className="rounded-pill max-w-full object-cover shadow-sm"
                          height={1000}
                          width={1000}
                          style={{ height: 30, width: 30 }}
                        />
                      ) : (
                        item?.getPoolDetail?.token0Symbol + "/ "
                      )}

                        {getSymbols[item?.getPoolDetail?.token1Address] ? (
                          <img
                            src={getSymbols[item?.getPoolDetail?.token1Address]}
                            alt=""
                            className="rounded-pill max-w-full object-cover shadow-sm"
                            height={1000}
                            width={1000}
                            style={{ height: 30, width: 30, marginLeft: -10 }}
                          />
                        ) : tokenList && tokenList[item?.getPoolDetail?.token1Address.toLowerCase()] ? (
                          <img
                            src={tokenList[item?.getPoolDetail?.token1Address.toLowerCase()]}
                            alt=""
                            className="rounded-pill max-w-full object-cover shadow-sm"
                            height={1000}
                            width={1000}
                            style={{ height: 30, width: 30 }}
                          />
                        ) : (

                          <>

                            <p>{item?.getPoolDetail?.token1Symbol}</p>
                          </>
                        )}

                        <span className="ml-2">
                          {" "}
                          {item?.getPoolDetail?.token0Symbol +
                            " / " +
                            item?.getPoolDetail?.token1Symbol}
                        </span>
                      </div>
                      <div className="content">
                        <p className="m-0 ">
                          {" "}
                          {Number(item.feeTier).toFixed(2)} %
                        </p>
                      </div>
                    </div>
                  </td>

                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0  capitalize`}>
                      {" "}
                      {toFixedCustm(item?.rewardInfo?.reward) + " " + item.rewardSymbol}{" "}
                    </p>
                  </td>
                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <a href={`/#/pools/${item.tokenId}`} target="_blank">
                      <p className={` m-0  capitalize`}>{item.tokenId} </p>
                    </a>
                  </td>

                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={`m-0 capitalize text-white`}>
                      {moment
                        .unix(item.key?.startTime)
                        .format("YYYY-MM-DD HH:mm")}
                    </p>
                  </td>
                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0  capitalize text-white`}>
                      {moment
                        .unix(item.key?.endTime)
                        .format("YYYY-MM-DD HH:mm")}
                    </p>
                  </td>

                  {/* ----------Removing confirmation modal---------- */}
                  <td
                    colSpan={6}
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    {
                      <div className="flex items-center">
                        <p className={`   capitalize mr-2`}>
                          <button
                            // onClick={(e) => handleRestake(item, true)}  //previous---
                            onClick={(e) => handleClaim(e, item)}
                            className="btn flex items-center commonBtn justify-center rounded"
                            style={{ background: "#00ff00" }}
                            disabled={isBlocked || item.rewardInfo?.reward <= 0 || internalLoading}
                          >
                            {!internalLoading ? "Claim":"Loading..."}
                          </button>
                        </p>
                        <p className={`   capitalize mr-2`}>
                          <button
                            // onClick={(e) => handleUnStake(item, true)} //previous---
                            onClick={(e) => handleunStake(e, item)}
                            className="btn flex items-center commonBtn justify-center rounded"
                            style={{ background: "#00ff00" }}
                            disabled={isBlocked || item.isUnstaked || internalLoading}
                          >
                             {!internalLoading ? "Unstake":"Loading..."}
                          </button>
                        </p>
                      </div>
                    }
                  </td>
                </tr>
              )})
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyFarm;
