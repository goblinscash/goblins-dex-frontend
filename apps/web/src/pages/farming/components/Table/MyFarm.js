import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

// img
import user from "assets/farmingAssets/Images/authBg.jpg";
import loader from "assets/farmingAssets/Images/loading.gif";
import sortIcon from "assets/farmingAssets/Images/sort.svg";


import { truncateWalletAddress } from "helpers/utils";
import { getSymbols } from "helpers/constants";

function MyFarm({
  wallet,
  loading,
  incentiveIds,
  handleUnStake,
  handleClaim,
  handleWithdraw,
  isBlocked,
  handleRestake,
  handleSort,
}) {
  return (
    <>
      <div className="py-4 text-right">
        <button
          type="button"
          onClick={handleWithdraw}
          disabled={isBlocked}
          className=" commonBtn font-semibold mx-auto inline-flex items-center justify-end btn"
        >
          Withdraw Tokens
        </button>
      </div>
      <div className="overflow-x-auto">
        <table
          className="min-w-full transparent stipped"
          style={{ borderCollapse: "separate", borderSpacing: "0" }}
        >
          <thead>
            <tr className=" text-sm leading-normal transparent">
              <th
                className="py-3 px-6 text-left transparent "
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
                className="py-3 px-6 text-left transparent "
                style={{ background: "#011b1c" }}
              >
                <button className="border-0 p-0 bg-transparent flex items-center">
                  Rewards
                </button>
              </th>

              <th
                className="py-3 px-6 text-left transparent "
                style={{ background: "#011b1c" }}
              >
                <button className="border-0 p-0 bg-transparent flex items-center">
                  Token Id
                </button>
              </th>
              <th
                className="py-3 px-6 text-left transparent "
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
                className="py-3 px-6 text-left transparent "
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
                className="py-3 px-6 text-left transparent "
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
            ) : loading ? (
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
              incentiveIds.map((item, key) => (
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
                        ) : (
                          item?.getPoolDetail?.token0Symbol + " / "
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

                        <span className="ml-2">
                          {" "}
                          {item?.getPoolDetail?.token0Symbol +
                            " / " +
                            item?.getPoolDetail?.token1Symbol}
                        </span>
                      </div>
                      <div className="content">
                        <p className="m-0 font-bold">
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
                    <p className={` m-0 font-bold capitalize`}>
                      {" "}
                      {item.reward + " " + item.rewardSymbol}{" "}
                    </p>
                  </td>
                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0 font-bold capitalize`}>
                      {item.tokenId}{" "}
                    </p>
                  </td>

                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0 font-bold capitalize text-white`}>
                      {moment
                        .unix(item.key?.startTime)
                        .format("YYYY-MM-DD HH:mm")}
                    </p>
                  </td>
                  <td
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    <p className={` m-0 font-bold capitalize text-white`}>
                      {moment
                        .unix(item.key?.endTime)
                        .format("YYYY-MM-DD HH:mm")}
                    </p>
                  </td>

                  <td
                    colSpan={6}
                    className="py-3 px-6 text-left border-b border-gray-600 transparent"
                    style={{ background: "#002628" }}
                  >
                    {
                      <div className="flex items-center">
                        <p className={`  font-bold capitalize mr-2`}>
                          <button
                            onClick={(e) => handleRestake(item, true)}
                            className="btn flex items-center commonBtn justify-center rounded"
                            style={{ background: "#00ff00" }}
                            disabled={isBlocked || item.isUnstaked}
                          >
                            {"Claim"}
                          </button>
                        </p>
                        <p className={`  font-bold capitalize mr-2`}>
                          <button
                            onClick={(e) => handleUnStake(item, true)}
                            className="btn flex items-center commonBtn justify-center rounded"
                            style={{ background: "#00ff00" }}
                            disabled={isBlocked || item.isUnstaked}
                          >
                            {item.isUnstaked ? "Already Unstaked" : "UnStake"}
                          </button>
                        </p>
                      </div>
                    }
                  </td>
                </tr>
              ))
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyFarm;
