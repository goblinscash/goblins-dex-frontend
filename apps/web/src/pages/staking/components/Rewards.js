import { useState } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

//css
import styles from "../staking.module.scss";

// image
import wbchlogo from "assets/farmingAssets/Images/wbchlogo.png";
// import logo from "components/Logo/ChainSymbols/sbch.svg";

//hooks && helpers
import { toCommas } from "helpers/utils";
import { useWallet } from "hooks/useWallet";
import Web3Intraction from "utils/web3Intraction";

function Rewards({ details, getDetails, isBlocked, apr }) {
  const { currentNetwork } = useSelector((state) => state.dashboard);
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);

  const getRewards = async (e) => {
    try {
      e.preventDefault();
      if (isBlocked)
        return toast.error(" Our Product is unavailable in your location");
      setLoading(true);
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      await web3.getTokenRewards();
      setLoading(false);
      getDetails();
      toast.success("Reward Claimed");
    } catch (error) {
      setLoading(false);
      toast.error(error);
      console.log(error, "<====error");
    }
  };

  console.log(apr, "apr")
  return (
    <div className="lg:col-span-4 sm:col-span-6 col-span-12">
      <div
        className={`${styles?.cardCstm} cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-col`}
      >
        <div className="top pb-3 text-center lg:mb-3 border-b-2 border-white w-full">
          <h4 className="m-0 text-3xl font-extrabold text-white">REWARDS</h4>
          <div className="pt-3">
            <h6 className="m-0 font-extrabold py-2 text-lg flex items-center justify-center">
              {toCommas(Number(details?.earnedAmount || 0).toFixed(4)) + " "}
              {details?.rewardSymbol ? details.rewardSymbol : ""}
              <img
                src={details?.rewardSymbol === "WBCH" ? wbchlogo : "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartchain/assets/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf/logo.png"}
                height={100}
                className="max-w-full flex-shrink-0 object-contain ms-2"
                width={100}
                style={{ height: 20, width: 20 }}
                alt=""
              />
            </h6>
          </div>
        </div>

        <div className="contentBody lg:px-4 w-full">
          <div className="claimInput mt-4 my-2 text-center">
            <h6 className="m-0 font-extrabold py-2 text-lg ">APR: </h6>
            <h6 className="m-0 font-extrabold py-2 text-lg ">{apr}%</h6>
          </div>

          <div className="btnWrpper text-center mt-3">
            <div className="py-2">
              <button
                type="button"
                onClick={getRewards}
                disabled={isBlocked || loading || !details?.earnedAmount}
                className="inline-flex items-center justify-center commonBtn font-bold btn px-4"
              >
                {loading ? (
                  <div className="spinner">
                    <span className=""> Please wait...</span>
                  </div>
                ) : (
                  "CLAIM"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
