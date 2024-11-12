import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

///css
import "assets/styles/main.css";
import styles from "./Dashboard.module.scss";

// //component
import CreateIncentivePop from "components/Modals/CreateIncentivePop";
import StakePop from "components/Modals/StakePop";

import ConfirmPopup from "components/Modals/confirmPop";
import UnStakePopup from "components/Modals/unStake";
import WithdrawPop from "components/Modals/withdrawPop";
import ClaimTable from "./components/Table/ClaimedTable";
import CommonTable from "./components/Table/Common";
import MyFarmTable from "./components/Table/MyFarm";

//hooks
import { getSortedData } from "helpers/constants";
import { useWallet } from "hooks/useWallet";

//action
import StakedPop from "components/Modals/StakedPop";
import { createPortal } from "react-dom";
import * as Act from "state/action";

const Dashboard = () => {
  const { currentNetwork, isBlocked } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  let getCurrentUnix = moment().unix();
  const {
    farmLoading: loading,
    farmList: incentiveIds,
    myFarmLoading: farmLoading,
    myFarmList: myFarm,
    deletedFarmLoading: endedLoading,
    deletedFarmList: endedFarms,
    updateLoading,
  } = useSelector((state) => state.Incentive);

  const wallet = useWallet();

  const tabs = [
    { id: 1, name: "Active", component: "asdfasd" },
    { id: 2, name: "My Farms", component: "ASdf" },
    { id: 3, name: "Ended", component: "ASdf" },
  ];

  const [search, setSearch] = useState("");
  const [incentiveForm, setIncentiveForm] = useState("");
  const [filteredIncentiveIds, setFilteredIncentiveIds] = useState([]);
  const [filteredMyFarm, setFilteredMyFarm] = useState([]);
  const [sortingData, setSortingData] = useState({
    sortKey: "startTime",
    sortOrder: "asc",
  });

  const [stake, setStake] = useState({
    isOpen: false,
    detail: null,
    isUnstake: null,
  });
  const [confirm, setConfirm] = useState({
    isOpen: false,
    detail: null,
    isRestake: false,
    isClaim: false,
  });
  const [unStake, setUnStake] = useState({
    isOpen: false,
    detail: null,
  });
  const [withdraw, setwithdraw] = useState({
    isOpen: false,
    detail: null,
  });

  const [staked, setStaked] = useState({
    isOpen: false,
    isClaimAll: false,
  });
  const [activeTab, setActiveTab] = useState(1);
  const [toggleEnded, setToggleEnded] = useState(false);

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  const handleIncentiveForm = () => {
    if (!wallet.isActive) return toast.error("Please connect wallet!");
    if (isBlocked)
      return toast.error(" Our Product is unavailable in your location");

    setIncentiveForm(!incentiveForm);
  };
  const handleStake = (item, isUnstake) => {
    if (isBlocked)
      return toast.error(" Our Product is unavailable in your location");

    setStake((pre) => ({
      isOpen: !pre.isOpen,
      detail: item || null,
      isUnstake: isUnstake || null,
    }));
  };


  // old one
  const handleConfirm = (item, isRestake, isClaim) => {
    if (isBlocked)
      return toast.error("Our Product is unavailable in your location");

    setConfirm((pre) => ({
      isOpen: !pre.isOpen,
      detail: item || null,
      isRestake: isRestake || false,
      isClaim: isClaim || false,
    }));
  };


  const handleUnStake = (item) => {
    if (isBlocked)
      return toast.error(" Our Product is unavailable in your location");

    setUnStake((pre) => ({
      isOpen: !pre.isOpen,
      detail: item || null,
    }));
  };

  const handleWithdraw = (item) => {
    if (isBlocked)
      return toast.error(" Our Product is unavailable in your location");

    setwithdraw((pre) => ({
      isOpen: !pre.isOpen,
      detail: item || null,
    }));
  };

  const handleStaked = (isClaimAll) => {
    if (isBlocked)
      return toast.error(" Our Product is unavailable in your location");

    setStaked({
      isOpen: !staked.isOpen,
      isClaimAll: isClaimAll || false,
    });
  };

  const load = () => {
    dispatch(
      Act.farmList({
        chainId: wallet.chainId,
        isEnded: activeTab === 3 ? true : false,
      })
    );
  };

  const myFarmUpdate = async () => {
    dispatch(
      Act.updateMyFarm({
        chainId: wallet.chainId,
        walletAddress: wallet.address,
      })
    );
  };

  useEffect(() => {
    if (wallet.chainId && wallet.address) {
      myFarmUpdate();
    }
  }, [wallet.chainId, wallet.address]);

  const loadEnded = () => {
    dispatch(
      Act.deletedFarmList({
        chainId: wallet.chainId,
        walletAddress: wallet.address,
      })
    );
  };

  const myFarmload = () => {
    dispatch(
      Act.myFarmList({
        chainId: wallet.chainId,
        walletAddress: wallet.address,
      })
    );
  };

  function filterByTokenSymbol() {
    if (!search) return;

    let data =
      activeTab === 2
        ? myFarm
        : incentiveIds.filter((data) =>
            activeTab === 1
              ? !data.isEnded
              : activeTab === 3
              ? data.isEnded
              : data.isEnded === "xyz"
          );

          let filteredData = data?.filter((item) => {
            const token0Symbol = item.getPoolDetail.token0Symbol || "";
            const token1Symbol = item.getPoolDetail.token1Symbol || "";
      
            return (
              token0Symbol.toLowerCase().includes(search.toLowerCase()) ||
              token1Symbol.toLowerCase().includes(search.toLowerCase())
            );
          });
          console.log("Filtered data length:", filteredData.length);

          if (activeTab === 2) {
            setFilteredMyFarm(filteredData);
          } else {
            setFilteredIncentiveIds(filteredData);
          }
  }

  function clearSearch(e) {
    e.preventDefault();
    if (!search) return;

    // Reset filtered data based on activeTab
    if (activeTab === 2) {
      setFilteredMyFarm(myFarm);
    } else {
      setFilteredIncentiveIds(incentiveIds);
    }

    setSearch("");
  }

  const handleSort = (key) => {
    if (sortingData.sortKey === key) {
      setSortingData((pre) => ({
        ...pre,
        sortOrder: pre.sortOrder === "asc" ? "desc" : "asc",
      }));
    } else {
      setSortingData((pre) => ({
        ...pre,
        sortKey: key,
        sortOrder: "asc",
      }));
    }
  };

  const filterBySorting = () => {
    let arr = activeTab == 2 ? filteredMyFarm : filteredIncentiveIds;
    let sortedData = getSortedData(
      arr,
      sortingData.sortKey,
      sortingData.sortOrder
    );

    activeTab == 2
      ? setFilteredMyFarm(sortedData)
      : setFilteredIncentiveIds(sortedData);
  };

  // load incentives
  useEffect(() => {
    if (activeTab == 2) {
      myFarmload();
    }
  }, [activeTab, wallet.chainId, wallet.address]);

  useEffect(() => {
    if (wallet.chainId && wallet.address) {
      dispatch(
        Act.ownerNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          ownerNft: true,
        })
      );

      dispatch(
        Act.contractNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          ownerNft: false,
        })
      );

      dispatch(
        Act.withdrawNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          withdrawNft: true,
        })
      );

      dispatch(
        Act.stakedNft({
          chainId: wallet.chainId,
          walletAddress: wallet.address,
          stakedNft: true,
        })
      );
    }
  }, [wallet.chainId, wallet.address]);

  useEffect(() => {
    if (currentNetwork && wallet.provider && activeTab == 3) {
      loadEnded();
      load(true);
    }
  }, [
    currentNetwork,
    wallet.provider,
    activeTab,
    wallet.chainId,
    wallet.address,
  ]);

  useEffect(() => {
    if (wallet.chainId) {
      if (activeTab == 1) {
        load();
      }
      if (activeTab == 3) {
        load(true);
      }
    }
  }, [wallet.chainId, activeTab]);

  useEffect(() => {
    // Reset filtered data when activeTab changes
    if (activeTab === 2) {
      setFilteredMyFarm(myFarm);
    } else {
      setFilteredIncentiveIds(incentiveIds);
    }
    setSearch("");
  }, [activeTab, myFarm, incentiveIds]);

  useEffect(() => {
    setFilteredIncentiveIds(incentiveIds);
  }, [incentiveIds]);

  useEffect(() => {
    setFilteredMyFarm(myFarm);
  }, [myFarm]);

  useEffect(() => {
    if (sortingData.sortKey && sortingData.sortOrder) {
      filterBySorting();
    }
  }, [sortingData.sortKey, sortingData.sortOrder]);

  return (
    <>
      {
        incentiveForm &&
        createPortal(
          <CreateIncentivePop
            incentiveForm={incentiveForm}
            setIncentiveForm={setIncentiveForm}
            load={load}
          />,
          document.body
        )
      }

      {confirm.isOpen &&
        createPortal(
          <ConfirmPopup
            handleConfirm={handleConfirm}
            detail={confirm.detail}
            load={
              activeTab == 3 && toggleEnded
                ? loadEnded
                : activeTab == 2
                ? myFarmload
                : load
            }
            isRestake={confirm.isRestake}
            isClaim={confirm.isClaim}
          />,
          document.body
        )}

      {unStake.isOpen &&
        createPortal(
          <UnStakePopup
            handleConfirm={handleUnStake}
            detail={unStake.detail}
            myFarmload={myFarmload}
          />,
          document.body
        )}

      {stake.isOpen && (
        <StakePop
          handleStake={handleStake}
          detail={stake.detail}
          setActiveTab={setActiveTab}
          isUnstake={stake.isUnstake}
          myFarmload={myFarmload}
          activeFarm={incentiveIds.filter(
            (data) => !data.isEnded && getCurrentUnix > data.key?.startTime
          )}
        />
      )}

      {withdraw.isOpen && (
        <WithdrawPop handleWithdrawPop={handleWithdraw} detail={stake.detail} />
      )}

      {staked.isOpen && (
        <StakedPop
          handleStaked={handleStaked}
          myFarm={myFarm}
          isClaimAll={staked.isClaimAll || false}
          setActiveTab={setActiveTab}
        />
      )}
      <section className={`${styles.Dashboard} Dashboard py-3 relative w-full`}>
        <div className="container mx-auto">
          <div className="grid gap-3 grid-cols-12">
            <div className="col-span-12">
              <div
                className={`${styles.dashbaordHead} flex justify-between flex-wrap gap-2 rounded p-2`}
                style={{ background: "#002628" }}
              >
                <div className={`${styles.NavWrp} left`}>
                  <div className={`${styles.tabContainer} tabcontainer`}>
                    <div
                      className={`${styles.nav} flex nav pillsTab rounded flex-nowrap overflow-x-scroll p-1`}
                      style={{ background: "#011b1c", scrollbarWidth: "none" }}
                    >
                      {tabs &&
                        tabs.length > 0 &&
                        tabs.map((item, key) => (
                          <button
                            style={{ minWidth: 100 }}
                            key={key}
                            onClick={() => showTab(item.id)}
                            className={`${
                              activeTab === item.id && "active"
                            } tab-button  relative text-white py-2 flex-shrink-0 text-base px-3 capitalize rounded text-gray-500`}
                          >
                            {item.name}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.searcForm} searchForm relative iconWithText`}
                >
                  <button
                    className="icn absolute right-4"
                    onClick={filterByTokenSymbol}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2938 12.5697 16.0025 10.8204 16 9C16 5.133 12.867 2 9 2C5.133 2 2 5.133 2 9C2 12.867 5.133 16 9 16C10.8204 16.0025 12.5697 15.2938 13.875 14.025L14.025 13.875Z"
                        fill="#00FF00"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control rounded pl-8"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    // style={{ minWidth: 400 }}
                  />

                  {search !== "" && (
                    <button
                      className="icn absolute right-n25"
                      onClick={clearSearch}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g>
                          <clipPath id="a">
                            <path
                              d="M0 0h24v24H0z"
                              fill="#00FF00"
                              opacity="1"
                              data-original="#00FF00"
                            ></path>
                          </clipPath>
                          <g clip-path="url(#a)">
                            <path
                              fill="#00FF00"
                              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                              opacity="1"
                              data-original="#00FF00"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  )}
                </div>
                <div className="right flex items-center gap-2">
                  <button
                    onClick={handleIncentiveForm}
                    className="flex items-center justify-center btn commonBtn"
                    disabled={isBlocked}
                  >
                    Create Farm
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              {/* <div className={`${styles.tabContent} tabContent pt-3`}>
                {tabs &&
                  tabs.length > 0 &&
                  tabs.map((item, key) => {
                    if (activeTab !== item.id) return;
                    return (
                      <div key={key} id="tabContent1" className={`tab-content border-0`}>
                        {item.component}
                      </div>
                    );
                  })}
              </div> */}
              <div
                className="cardCstm box pb-3 rounded-xl"
                style={{ background: "#002628" }}
              >
                {activeTab === 3 && (
                  <div className="topHead p-3 flex items-center justify-end">
                    <div className="flex items-center gap-2">
                      <label htmlFor="" className="form-label m-0  themeClr">
                        Claim Rewards
                      </label>
                      <div
                        onClick={() => setToggleEnded(!toggleEnded)}
                        className="toggle-container"
                        style={{
                          background: toggleEnded ? "#00ff00" : "#001213",
                        }}
                      >
                        <span
                          className={`toggle-indicator ${
                            toggleEnded ? "translate-right" : "translate-left"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="cardBody">
                  {activeTab == 3 && toggleEnded ? (
                    <ClaimTable
                      wallet={wallet}
                      moment={moment}
                      loading={endedLoading}
                      incentiveIds={endedFarms}
                      handleStake={handleStake}
                      handleConfirm={handleConfirm}
                      activeTab={activeTab}
                      isBlocked={isBlocked}
                      handleSort={handleSort}
                      toggleEnded={toggleEnded}
                    />
                  ) : [1, 3].includes(activeTab) ? (
                    <CommonTable
                      wallet={wallet}
                      moment={moment}
                      loading={loading}
                      incentiveIds={filteredIncentiveIds}
                      handleStake={handleStake}
                      handleConfirm={handleConfirm}
                      activeTab={activeTab}
                      isBlocked={isBlocked}
                      handleSort={handleSort}
                    />
                  ) : (
                    <MyFarmTable
                      wallet={wallet}
                      moment={moment}
                      loading={farmLoading}
                      incentiveIds={filteredMyFarm}
                      handleUnStake={handleUnStake}
                      handleClaim={handleStake}
                      activeTab={activeTab}
                      handleWithdraw={handleWithdraw}
                      handleStaked={handleStaked}
                      handleRestake={handleConfirm}
                      isBlocked={isBlocked}
                      handleSort={handleSort}
                      myFarmload={myFarmload}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
