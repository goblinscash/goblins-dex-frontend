// img
import loader from "assets/farmingAssets/Images/loading.gif";



import { getSymbols } from "helpers/constants";


function ClaimTable({
  wallet,
  loading,
  incentiveIds,

  handleConfirm,
  isBlocked,
 
}) {


  return (
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
                Token
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
          </tr>
        </thead>
        <tbody className="text-white text-sm font-light">
          {!wallet?.isActive ? (
            <tr>
              <td
                className="py-3 px-6 text-left border-b border-gray-600 transparent"
                style={{ background: "#002628" }}
                colSpan={3}
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
                colSpan={3}
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
                colSpan={8}
              >
                <div
                  className="text-center flex items-center justify-center"
                  style={{
                    height: 200,
                  }}
                >
                  <p>No Claim Found</p>
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
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="imgWrp flex-shrink-0 flex items-center">
                      {/* {item?.getPoolDetail?.token0Symbol} /{" "}
                      {item?.getPoolDetail?.token1Symbol} */}
                      {getSymbols[item?.key?.rewardToken] ? (
                        <Image
                          src={getSymbols[item?.key?.rewardToken]}
                          alt=""
                          className="rounded-pill max-w-full object-cover shadow-sm"
                          height={1000}
                          width={1000}
                          style={{ height: 30, width: 30 }}
                        />
                      ) : (
                        item?.getPoolDetail?.token0Symbol + " / "
                      )}
                    </div>
                    <div className="">
                      <span className="whitespace-nowrap">
                        {" "}
                        {item.rewardSymbol}
                      </span>
                    </div>
                  </div>
                </td>

                <td
                  className="py-3 px-6 text-left border-b border-gray-600 transparent"
                  style={{ background: "#002628" }}
                >
                  <p className={` m-0 font-bold capitalize`}>{item.rewardInfo?.reward} </p>
                </td>

                <td
                  colSpan={2}
                  className="py-3 px-6 text-center border-b border-gray-600 transparent"
                  style={{ background: "#002628" }}
                >
                  <p className={` m-0 font-bold capitalize`}>
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
              </tr>
            ))
          )}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default ClaimTable;
