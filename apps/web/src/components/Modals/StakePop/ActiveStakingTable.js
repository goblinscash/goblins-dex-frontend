import { getSymbols } from "helpers/constants";

import loader from "assets/farmingAssets/Images/loading.gif";

function ActiveStakingTable({ list, handleSelect, selectedFarm, loading }) {

  console.log(list, "11111111111111")
  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full transparent stipped"
        style={{ borderCollapse: "separate", borderSpacing: 0 }}
      >
        <thead>
          <tr className=" text-sm leading-normal transparent">
            <th
              className="py-3 px-6 text-left transparent font-light"
              style={{
                background: "rgb(1, 27, 28)",
                borderTopLeftRadius: 5,
              }}
            >
              {/* <input type="checkbox" className="form-check" /> */}
            </th>
            <th
              className="py-3 px-6 text-left transparent font-light"
              style={{
                background: "rgb(1, 27, 28)",
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
                NFT Staked
              </button>
            </th>
            <th
              className="py-3 px-6 text-left transparent font-light"
              style={{ background: "rgb(1, 27, 28)" }}
            >
              <button className="border-0 p-0 bg-transparent flex items-center">
                Min Width
              </button>
            </th>
            <th
              className="py-3 px-6 text-left transparent font-light"
              style={{ background: "rgb(1, 27, 28)" }}
            >
              <button className="border-0 p-0 bg-transparent flex items-center">
                Rewards
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="text-white text-sm font-light">
          {loading ? (
            <tr>
              <td
                className="py-3 px-6 text-left border-b border-gray-600 transparent"
                style={{ background: "#002628" }}
                colSpan={5}
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
          ) : !list || !list.length ? (
            <tr>
              <td
                className="py-3 px-6 text-left border-b border-gray-600 transparent"
                style={{ background: "#002628" }}
                colSpan={5}
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
            list.map((item, key) => (
              <tr
                key={key}
                className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <td
                  className="py-0 px-6 text-left  border-b border-gray-600 transparent "
                  style={{ background: "rgb(0, 38, 40)" }}
                >
                  <input
                    type="checkbox"
                    className="form-check"
                    onClick={() => handleSelect(item)}
                    checked={selectedFarm?.find(
                      (_d) => _d.incentiveId === item.incentiveId
                    )}
                  />
                </td>
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
                          height={100}
                          width={100}
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
                          height={100}
                          width={100}
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
                      <p className="m-0  ">
                        {" "}
                        {Number(item.feeTier).toFixed(2)} %
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className="py-0 px-6 text-left  border-b border-gray-600 transparent "
                  style={{ background: "#002628" }}
                >
                  <p className={` m-0   capitalize`}>
                    {item.nftCount || "0"}{" "}
                  </p>
                </td>
                <td
                  className="py-0 px-6 text-left  border-b border-gray-600 transparent "
                  style={{ background: "#002628" }}
                >
                  <p className={` m-0   capitalize`}>
                    {console.log(item.minWidth, "item.minWidthitem.minWidth")}
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
                  <p className={` m-0   capitalize`}>
                    {item.reward + " " + item.rewardSymbol}{" "}
                  </p>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveStakingTable;
