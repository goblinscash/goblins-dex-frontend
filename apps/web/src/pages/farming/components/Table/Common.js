import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios"


// img
import loader from "assets/farmingAssets/Images/loading.gif";
import sortIcon from "assets/farmingAssets/Images/sort.svg";

// css
import styles from "../../Dashboard.module.scss"

import { getSymbols } from "helpers/constants";
import useTokenLogoSource from 'hooks/useAssetLogoSource'

import { formatValue } from "helpers/utils";
import useAssetLogoSource from "hooks/useAssetLogoSource";

function CommonTable({
  wallet,
  loading,
  incentiveIds,
  handleStake,
  activeTab,
  handleConfirm,
  isBlocked,
  handleSort,
  toggleEnded,
}) {
  let getCurrentUnix = moment().unix();


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


  // filtering the data which have same pool and rewardtoken address
  const newData = incentiveIds.filter(item => item.key.rewardToken !== item.key.pool);
  return (
    <div className="overflow-x-auto" style={{ overflow: "auto" }}>
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
            {activeTab == 1 && (
              <th
                className="py-3 px-6 text-left transparent font-light"
                style={{ background: "#011b1c" }}
              >
                <button
                  className="border-0 p-0 bg-transparent flex items-center"
                  onClick={() => handleSort("nftCount")}
                >
                  NFT Staked
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
            )}

            <th
              className="py-3 px-6 text-left transparent font-light"
              style={{ background: "#011b1c" }}
            >
              <button className="border-0 p-0 bg-transparent flex items-center">
                Min Width
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
            {activeTab == 1 && (
              <>
                <th
                  className="py-3 px-6 text-left transparent d-flex font-light"
                  style={{ background: "#011b1c" }}
                >
                  <button
                    className="border-0 p-0 bg-transparent flex items-center"
                    onClick={() => handleSort("apr")}
                  >
                    APR
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
                    onClick={() => handleSort("tvl")}
                  >
                    TVL
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
              </>
            )}
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
          </tr>
        </thead>
        <tbody className="text-white text-sm font-light">
          {!wallet?.isActive ? (
            <tr>
              <td
                className="py-3 px-6 text-left border-b border-gray-600 transparent"
                style={{ background: "#002628" }}
                colSpan={8}
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
          ) : loading ? (
            <tr>
              <td
                className="py-3 px-6 text-left border-b border-gray-600 transparent"
                style={{ background: "#002628" }}
                colSpan={8}
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
          ) : !newData.length ? (
            <tr>
              <td
                className="py-3 px-6 text-left border-b border-gray-600 transparent"
                style={{ background: "#002628" }}
                colSpan={8}
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
            newData &&
            newData?.length > 0 &&
            newData.map((item, key) => {

              // if (!getSymbols[item?.getPoolDetail?.token0Address]) {

              //   const [token1Logo] = useTokenLogoSource(item?.getPoolDetail?.token0Address, wallet.chainId, false);


                // console.log(item, "<====token1Logo")
              // }

              return (
                <tr
                  key={key}
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <td
                    createIncentive
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <div className={`${styles.flexWrp} flex items-center gap-2`}>
                      <div className="imgWrp flex-shrink-0 flex items-center">
                        {console.log(getSymbols[item?.getPoolDetail?.token0Address], "PPPPPPP", item?.getPoolDetail?.token0Address)}
                        {getSymbols[item?.getPoolDetail?.token0Address] ? (
                          <img
                            src={getSymbols[item?.getPoolDetail?.token0Address]}
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
                        ) : (
                          item?.getPoolDetail?.token1Symbol
                        )}
                      </div>
                      <div className="">
                        <span className="whitespace-nowrap">
                          {" "}
                          {item?.getPoolDetail?.token0Symbol +
                            " / " +
                            item?.getPoolDetail?.token1Symbol}
                        </span>
                        <p className="m-0  whitespace-nowrap">
                          {Number(item.feeTier).toFixed(2)} %
                        </p>
                      </div>
                    </div>
                  </td>

                  {activeTab == 1 && (
                    <td
                      className="py-0 px-6 text-left  border-b border-gray-600 transparent "
                      style={{ background: "#002628" }}
                    >
                      <p className={` m-0  capitalize`}>
                        {item.nftCount || "0"}{" "}
                      </p>
                    </td>
                  )}
                  <td
                    className="py-0 px-6 text-left  border-b border-gray-600 transparent "
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0  capitalize`}>
                      {item.minWidth >= 100
                        ? Number(item.minWidth) / 100
                        : item.minWidth}
                      {"%"}
                    </p>
                  </td>
                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0  capitalize`} style={{ whiteSpace: "nowrap" }}>
                      {item.reward + " " + item.rewardSymbol}{" "}
                    </p>
                  </td>
                  {activeTab == 1 && (
                    <>
                      <td
                        className="py-3 px-6 text-left border-b border-gray-600 transparent"
                        style={{ background: "#002628" }}
                      >
                        <p className={` m-0  capitalize`}>
                          {item.apr}
                          {"%"}
                        </p>
                      </td>
                      <td
                        className="py-3 px-6 text-left border-b border-gray-600 transparent"
                        style={{ background: "#002628" }}
                      >
                        <p className={` m-0  capitalize`}>
                          $ {formatValue(item.tvl)}
                        </p>
                      </td>
                    </>
                  )}

                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0  capitalize text-white`}>
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
                      {moment.unix(item.key?.endTime).format("YYYY-MM-DD HH:mm")}
                    </p>
                  </td>

                  {toggleEnded ? (
                    <td
                      colSpan={6}
                      className="py-3 px-6 text-left border-b border-gray-600 transparent"
                      style={{ background: "#002628" }}
                    >
                      <p className={` m-0  capitalize`}>
                        {" "}
                        <button
                          onClick={(e) => handleConfirm(item, false, true)}
                          className="btn flex items-center commonBtn justify-center rounded"
                          style={{ background: "#00ff00" }}
                          disabled={isBlocked}
                        >
                          Claim
                        </button>{" "}
                      </p>
                    </td>
                  ) : activeTab !== 3 ? (
                    <td
                      colSpan={6}
                      className="py-3 px-6 text-left border-b border-gray-600 transparent"
                      style={{ background: "#002628" }}
                    >
                      <p className={` m-0  capitalize`}>
                        {" "}
                        <button
                          onClick={(e) => {
                            item.key?.startTime > getCurrentUnix
                              ? e.preventDefault()
                              : handleStake(item);
                          }}
                          className="btn flex items-center commonBtn justify-center rounded"
                          style={{ background: "#00ff00", minWidth: 120 }}
                          disabled={
                            isBlocked || item.key?.startTime > getCurrentUnix
                          }
                        >
                          {item.key?.startTime > getCurrentUnix
                            ? "Not Started"
                            : "Deposit"}
                        </button>{" "}
                      </p>
                    </td>
                  ) : (
                    <td
                      colSpan={6}
                      className="py-3 px-6 text-left border-b border-gray-600 transparent"
                      style={{ background: "#002628" }}
                    >
                      <p className={` m-0  capitalize`}>
                        {" "}
                        <button
                          onClick={(e) => handleConfirm(item)}
                          className="btn flex items-center commonBtn justify-center rounded"
                          style={{ background: "#00ff00" }}
                          disabled={isBlocked}
                        >
                          End
                        </button>{" "}
                      </p>
                    </td>
                  )}
                </tr>
              )
            })
          )}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default CommonTable;