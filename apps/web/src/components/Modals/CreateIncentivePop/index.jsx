import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";

// css
import styles from "./CreateIncentivePop.module.scss";
// img
import logo from "assets/farmingAssets/Images/logo.png";

// Hooks and Utils
import { useWallet } from "hooks/useWallet";
import Web3Intraction from "utils/web3Intraction";
import { getCheckSumAddress } from "helpers/utils";
import { createFarm } from "state/action";
import { useTopPools } from 'graphql/thegraph/TopPools'
import { GOBAddress } from "helpers/constants";
import Loader2 from "components/Loader/Loader2";


const CreateIncentivePop = ({ incentiveForm, setIncentiveForm, load }) => {
  const wallet = useWallet();
  const dispatch = useDispatch();
  const { currentNetwork } = useSelector((state) => state.dashboard);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    incentiveAddress: "",
    minimumWidth: "",
    rewardAddress: "",
    rewardAmount: "",
    refundeeAddress: "",
    startDate: "",
    endDate: "",
  });
  const [showSelect, setShowSelect] = useState(false);
  const [showSelect2, setShowSelect2] = useState(false);
  const [loadInteraction, setLoadInteraction] = useState(false)
  const { topPools, loading: subgraphLoading, error } = useTopPools(wallet.chainId, "totalValueLockedUSD", "desc")



  const top7Pools = Array.isArray(topPools) ? topPools.slice(0, 7) : [];
  const extractedData = top7Pools.map(pool => ({
    hash: pool?.hash,
    token0Symbol: pool?.token0?.symbol,
    token1Symbol: pool?.token1?.symbol,
    feeTier: pool?.feeTier
  }));

  const addresses = extractedData.map(pool => ({
    hash: pool.hash,
    name: `${pool.token0Symbol} / ${pool.token1Symbol}`,
    feeTier: (pool.feeTier / 10000) + '%'
  }));

  const handleSelectChange = (e) => {
    const selectedHash = e.target.value;

    // Finding the selected pool by hash
    const selectedPool = addresses.find(address => address.hash === selectedHash);

    if (selectedPool) {
      setFields((prev) => ({
        ...prev,
        incentiveAddress: selectedPool.hash,
        // incentiveAddress: `${selectedPool.name} (Address: ${selectedPool.hash}, Fee Tier: ${selectedPool.feeTier})`,
        // rewardAddress: selectedHash,
      }));
    } else {
      console.log("Hash not found in addresses.");
    }

    setShowSelect(false);
  };

  const handleNewSelectChange = (e) => {
    const selectedRewardAddress = e.target.value;

    // console.log(selectedRewardAddress, "selectedRewardAddress")

    setFields((prev) => ({
      ...prev,
      rewardAddress: selectedRewardAddress,
    }));

    setShowSelect2(false);
  };

  const toggleDropdown = () => {
    setShowSelect((prev) => !prev);
  };
  const toggleDropdown2 = () => {
    setShowSelect2((prev) => !prev);
  };



  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFields((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  // New handleChange for specific rewardAddress
  const handleNewChange = (e) => {
    const { name, value } = e.target;

    setFields((prev) => ({
      ...prev,
      [name]: value,  // Updates only the relevant field
    }));
  };

  const handleIncentiveForm = () => {
    setIncentiveForm(!incentiveForm);
  };

  const validateSubmit = () => {
    if (!wallet.address) {
      // await wallet.connect();
      return toast.error("Please connect wallet first!");
    }

    if (!currentNetwork) {
      return toast.error("Something went wrong!");
    }

    if (wallet?.chainId && currentNetwork.chainId != wallet.chainId) {
      return toast.error("Switch wallet network to " + currentNetwork.symbol);
    }
    if (!getCheckSumAddress(fields.incentiveAddress)) {
      return toast.error("Farm invalid address!");
    }

    if (!getCheckSumAddress(fields.rewardAddress)) {
      return toast.error("Reward invalid token address!");
    }
    if (!getCheckSumAddress(fields.refundeeAddress)) {
      return toast.error("Refundee invalid address!");
    }

    return false;
  };

  const convertToTimestamp = (date) => {
    const momentDate = moment(date).unix();
    return momentDate;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validateSubmit()) return;

      
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      setLoading(true);

      let startTimeStamp = convertToTimestamp(fields.startDate);
      let endTimeStamp = convertToTimestamp(fields.endDate);
      setLoadInteraction(true)
      await web3.createIncentive(
        [
          fields.rewardAddress,
          fields.incentiveAddress,
          startTimeStamp,
          endTimeStamp,
          fields.refundeeAddress,
        ],
        fields.rewardAmount,
        Number(fields.minimumWidth) * 100,
        fields.rewardAddress
      );

      // Dispatch the create farm
      dispatch(
        createFarm({
          data: {
            chainId: wallet.chainId,
            type: "Create",
            createdData: {
              rewardToken: fields.rewardAddress,
              pool: fields.incentiveAddress,
              startTime: startTimeStamp,
              endTime: endTimeStamp,
              refundee: fields.refundeeAddress,
              minWidth: Number(fields.minimumWidth) * 100,
              reward: fields.rewardAmount,
            },
          },
          callback: (err) => {
            load();
            setLoading(false);
            handleIncentiveForm();
            if (!err) {
              toast.success("Farm created successfully, some time it will take some seconds for reflect in list!");
            }
          }
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

  return (
    <>
    {loadInteraction && <Loader2 />} 
      <div
        className={`${styles.CreateIncentivePop} fixed inset-0 flex items-center justify-center cstmModal`}
      >
        <div className="absolute inset-0 opacity-50" style={{ background: "#000", opacity: .5 }}></div>
        <div
          className={`${styles.modalDialog} modalDialog p-2 mx-auto rounded-lg z-10`}
        >
          <div className="top flex items-center justify-between gap-2 pt-2 px-3">
            <div className="left flex items-center gap-2">
              <p className="m-0   text-white text-lg">Create Farm</p>
            </div>

            <button
              onClick={handleIncentiveForm}
              className="m-0 border-0 p-0 transparent    text-gray-400 "
              disabled={loading}
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
          </div>
          <div className="modalBody py-2">
            <div className="inner p-3">
              <div className="top text-center pb-2">
                <img
                  src={logo}
                  height={100}
                  width={100}
                  className="max-w-full object-contain"
                  style={{ height: 50 }}
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">


                  {/* <div className=" col-span-12">
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="form-label themeClr   m-0 px-2 z-10">
                        Advanced
                      </label>
                      <SwitchBtn />{" "}
                    </div>
                  </div> */}

                  <div className=" col-span-12">
                    <div className="relative labelInput">
                      <label
                        htmlFor=""
                        className="form-label    px-2 z-10 text-white"
                      >
                        Farm
                      </label>
                      {/* ------------------------------------------------------------ */}
                      <input
                        type="text"
                        placeholder="Farm Address"
                        className="form-control rounded"
                        name="incentiveAddress"
                        value={fields.incentiveAddress}
                        onChange={handleChange}
                        required
                      />

                      <button
                        type="button"
                        className="absolute icn right-2 top-1/2 transform -translate-y-1/2 text-gray-500" // Positioned inside input
                        style={{ right: 5, zIndex: 999, top: "50%" }}
                        onClick={toggleDropdown}
                      >


                        ▼


                      </button>
                     {showSelect && (
                        <select
                          className="absolute left-0 mt-2 form-control rounded w-full"
                          onChange={handleSelectChange}
                          value={fields.incentiveAddress}
                        >
                          <option value="">Select Address</option>
                          {addresses.map(({ hash, name, feeTier }) => (
                            <option key={hash} value={hash}>
                              {`${name} (Fee Tier: ${feeTier})`}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>
                  <div className=" col-span-12">
                    <div className="relative labelInput">
                      <label
                        htmlFor=""
                        className="form-label    px-2 z-10 text-white"
                      >
                        Minimum Width (%)
                      </label>
                      {/* <input
                        type="text"
                        placeholder="Pool Address"
                        className="form-control rounded"
                      /> */}
                      <select
                        id="example"
                        className="form-control rounded"
                        name="minimumWidth"
                        value={fields.minimumWidth}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Width</option>
                        <option value={1}>1</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor=""
                      className="form-label    px-2 z-10 text-white"
                    >
                      Rewards Token and Amount
                    </label>

                    <div className="grid gap-3 grid-cols-12">
                      <div className="col-span-8">
                        <div className="relative labelInput iconWithText">
                          <input
                            type="text"
                            placeholder="Address"
                            className="form-control rounded"
                            name="rewardAddress"
                            value={fields.rewardAddress}
                            onChange={handleNewChange}  // Using new handleNewChange
                            required
                          />
                          <button
                            type="button"
                            className="absolute icn right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ right: 5, zIndex: 999, top: "50%" }}
                            onClick={toggleDropdown2}
                          >
                            ▼
                          </button>
                          {showSelect2 && (
                            <select
                              className="absolute left-0 mt-2 form-control rounded w-full"
                              onChange={handleNewSelectChange}  // Using new handleNewSelectChange
                              value={fields.rewardAddress}
                            >
                              <option value="">Select Address</option>
                              <option value={GOBAddress[wallet.chainId]}>{GOBAddress[wallet.chainId]}</option>
                            </select>
                          )}
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="relative labelInput">
                          <input
                            type="number"
                            placeholder="Amount"
                            className="form-control rounded"
                            name="rewardAmount"
                            value={fields.rewardAmount}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className=" col-span-12">
                    <div className="relative labelInput">
                      <label
                        htmlFor=""
                        className="form-label    px-2 z-10 text-white"
                      >
                        Refundee
                      </label>
                      <input
                        type="text"
                        placeholder="Refundee Address"
                        className="form-control rounded"
                        name="refundeeAddress"
                        value={fields.refundeeAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="grid gap-3 grid-cols-12">
                      <div className=" col-span-6">
                        <label
                          htmlFor=""
                          className="form-label    px-2 z-10 text-white"
                        >
                          Start Date
                        </label>
                        <div className="relative labelInput">
                          <input
                            type="datetime-local"
                            placeholder=""
                            className="form-control rounded"
                            name="startDate"
                            value={fields.startDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className=" col-span-6">
                        <label
                          htmlFor=""
                          className="form-label    px-2 z-10 text-white"
                        >
                          End Date
                        </label>
                        <div className="relative labelInput">
                          <input
                            type="datetime-local"
                            placeholder=""
                            className="form-control rounded"
                            name="endDate"
                            value={fields.endDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-x-5 gap-y-8 grid-cols-12 py-3">
                  <div className="col-span-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className=" commonBtn    mx-auto flex items-center justify-center btn w-full"
                    >
                      {loading ? (
                        <div className="spinner">
                          <span className=""> Please wait...</span>
                        </div>
                      ) : (
                        "Add Farm"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIncentivePop;
