import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

//css
import styles from "../staking.module.scss";

// image
import logo from "assets/farmingAssets/Images/logoIcn.png";

//hooks && helpers
import { toCommas } from "helpers/utils";
import { useWallet } from "hooks/useWallet";
import Web3Intraction from "utils/web3Intraction";

function Withdraw({ getDetails, details, isBlocked }) {
  const { currentNetwork } = useSelector((state) => state.dashboard);
  const wallet = useWallet();

  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWithdraw = async (e) => {
    try {
      e.preventDefault();
      if (isBlocked)
        return toast.error(" Our Product is unavailable in your location");

      if (!Number(details?.stakedAmount)) {
        return toast.error("No GOB Staked!");
      }
      if (amount <= 0) return toast.error("Amount Must be greater then zero");

      if (amount > Number(details?.stakedAmount)) {
        return toast.error(
          "Withdraw must be less then or equal to staked amount"
        );
      }
      setLoading(true);
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      await web3.tokenWithdraw(amount);
      setLoading(false);
      setAmount(0);
      toast.success("Amount Withdraw");
      getDetails();
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  const handleExit = async (e) => {
    try {
      e.preventDefault();
      if (isBlocked)
        return toast.error(" Our Product is unavailable in your location");

      if (!details?.stakedAmount) {
        return toast.error("No GOB Staked!");
      }
      setLoading(true);
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      await web3.tokenExit();
      setLoading(false);
      setAmount(0);
      toast.success("Amount Reward Claimed & Withdraw!");
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  const handlePercentage = async (e, value) => {
    try {
      if (!Number(details?.stakedAmount)) {
        return toast.error("No GOB Staked!");
      }
      setPercentage(value);
      const amount =
        (parseFloat(value) / 100) * parseFloat(details?.stakedAmount);
      setAmount(amount);
    } catch (error) {
      console.log(error, "<====error");
    }
  };

  const handleChange = (e) => {
    let { value } = e.target;
    value = value.replace(/[^\d.]/g, "");
    if (isNaN(Number(value.replace(/,/g, "")))) {
      return;
    }
    const formattedValue = value.replace(/,/g, "");
    setAmount(formattedValue);
  };

  return (
    <div className="lg:col-span-4 sm:col-span-6 col-span-12">
      <div
        className={`${styles?.cardCstm} cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-col`}
      >
        <div className="top pb-3 text-center lg:mb-3 border-b-2 border-white w-full">
          <h4 className="m-0 text-3xl font-extrabold text-white">STAKED</h4>
          <div className="pt-3">
            <h6 className="m-0 font-extrabold py-2 text-lg flex items-center justify-center">
              {toCommas(Number(details?.stakedAmount || 0).toFixed(2) || 0)}{" "}
              {details?.stakeSymbol}
              <img
                src={logo}
                height={100}
                className="max-w-full flex-shrink-0 object-contain ms-2"
                width={100}
                style={{ height: 20, width: 20 }}
                alt=""
              />
            </h6>
          </div>
        </div>

        <form onSubmit={handleWithdraw}>
          <div className="contentBody lg:px-4 w-full">
            <div className="claimInput mt-4 my-2 text-center">
              {/* <div
                      className={`${styles?.InputWrp} InputWrp cursor-pointer mx-auto flex py-2 px-3 text-lg items-center justify-center font-bold text-white rounded`}
                    >
                      100
                    </div> */}

              <div className="relative iconWithText">
                {/* <button className="flex items-center justify-center btn absolute icn commonBtn h-auto py-2 right-2 rounded rounded text-xs px-2" >
                      Max
                    </button> */}
                <input
                  type="text"
                  value={toCommas(amount)}
                  onChange={handleChange}
                  placeholder="Enter Amount"
                  className={`${styles?.InputWrp} InputWrp text-center bg-transparent text-white cursor-pointer mx-auto flex py-2 px-3 text-lg items-center justify-center font-bold text-white rounded`}
                  required
                />
              </div>
              <h6 className="m-0 font-extrabold py-2 text-lg ">
                AMOUNT TO WITHDRAW
              </h6>
            </div>
            <div className="my-2">
              {/* <label
                htmlFor=""
                className="m-0 font-bold text-white block text-center"
              >
                Withdraw Percentage Amount
              </label> */}
              <ul
                className="list-none mt-3 pl-0 mb-0 flex items-center justify-center gap-2 radioList"
                style={{ listStyle: "none" }}
              >
                {[25, 50, 75, 100].map((data, key) => (
                  <li className="relative" key={key}>
                    <input
                      type="radio"
                      id="10%"
                      name="withdraw"
                      className="file w-full h-full left-0 top-0 z-9 cursor-pointer absolute opacity-0"
                      onClick={(e) => handlePercentage(e, data)}
                      checked={percentage == data}
                    />
                    <label
                      htmlFor="10%"
                      className=" h-auto radioBtn text-xs font-bold  p-2 text-white"
                    >
                      {data === 100 ? "Max" : data + "%"}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btnWrpper text-center mt-3">
              <div className="py-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center commonBtn font-bold btn px-4"
                  disabled={isBlocked || loading || !details?.stakedAmount}
                >
                  {loading ? (
                    <div className="spinner">
                      <span className=""> Please wait...</span>
                    </div>
                  ) : (
                    "WITHDRAW"
                  )}
                </button>
              </div>
              {/* <div className="py-2">
                <button
                  type="button"
                  onClick={handleExit}
                  disabled={isBlocked || loading || !details?.stakedAmount}
                  className="inline-flex items-center justify-center commonBtn font-bold btn px-4"
                >
                  {loading ? (
                    <div className="spinner">
                      <span className=""> Please wait...</span>
                    </div>
                  ) : (
                    "WITHDRAW & CLAIM"
                  )}
                </button>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Withdraw;
