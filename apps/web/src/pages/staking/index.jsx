import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

// css
import "assets/styles/main.css";

// image
import logo from "assets/farmingAssets/Images/logo.png";

///component
import CommonLoader from "components/Loader/SpinningLoader";
import Rewards from "./components/Rewards";
import TokenStaking from "./components/Staking";
import Withdraw from "./components/Withdraw";

//hooks && helpers
// import {useWallet} from "hooks/useWallet";
import * as request from "helpers/apiRequests";
import { priceGraphQl } from "helpers/constants";
import { toCommas } from "helpers/utils";
import Web3Intraction from "utils/web3Intraction";

import { useWallet } from "hooks/useWallet";

// css
import MigrationPop from "components/Modals/MigrationPop";
import { createPortal } from "react-dom";
import styles from "./staking.module.scss";

const Staking = () => {
  const { currentNetwork, isBlocked } = useSelector((state) => state.dashboard);
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);
  const [migration, setMigration] = useState(false);
  const [apr, setApr] = useState(0);

  const [price, setPrice] = useState({
    GOBInPrice: 0,
    WBCHInPrice: 0,
  });

  const [details, setDetails] = useState({
    stakeSymbol: null,
  });

  const getDetails = async () => {
    try {
      setLoading(true);
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      let detail = await web3.getDetailInfo();
      console.log(details, "detail", currentNetwork)

      let data = await web3.getTokenBalance(
        currentNetwork?.chainId === 56
          ? "0x701ACA29AE0F5d24555f1E8A6Cf007541291d110" // BSC
          : currentNetwork?.chainId === 10000
            ? "0x47c61F29B1458d234409Ebbe4B6a70F3b16528EF" // SmartBCH
            : currentNetwork?.chainId === 8453
              ? "0xcDBa3E4C5c505F37CfbBB7aCCF20D57e793568E3" // Base
              : "" // Fallback (optional)
      );

      setDetails({
        ...detail,
        unStakedAmountInDollar:
          detail.unStakedAmount * Number(price.GOBInPrice),
        stakedAmountInDollar: detail.stakedAmount * Number(price.GOBInPrice),
        balanceInDollar: detail.balance * Number(price.GOBInPrice),
        sGob: data.balance,
      });

      setLoading(false);
    } catch (error) {
      console.log(error, "<===err");
      setLoading(false);
    }
  };

  const handleMigrationPopup = () => {
    setMigration(!migration);
  };

  const getAPR = async (totalSupply, BCHPrice, GOBPrice) => {
    try {
      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      let getApr = await web3.getAPR(totalSupply, BCHPrice, GOBPrice);
      setApr(getApr);
    } catch (error) {
      setLoading(false);
    }
  };

  const getUsdPrice = async () => {
    try {
      const getUSDPrice = request.getUSDPrice(priceGraphQl);

      const GobAndWbchPair = await getUSDPrice(
        `query {
          pool(id:"0x2f19229617f37abfc990c8f6952bee5c8d4c1797"){
            id
            sqrtPrice
            id
            liquidity
            token0 {
              id
              decimals
              name
              symbol
            }
            token1 {
              id
              decimals
              name
              symbol
            }
            token0Price
            token1Price
            volumeUSD
          }  
       }`,
        {}
      );
      const WbchAndbcUsdtPair = await getUSDPrice(
        `query {
          pool(id:"0x934f434a226ed5b6c4f7fc9a2dc5dc0467bddee7"){
            id
            sqrtPrice
            id
            liquidity
            token0 {
              id
              decimals
              name
              symbol
            }
            token1 {
              id
              decimals
              name
              symbol
            }
            token0Price
            token1Price
            volumeUSD
          }  
       }`,
        {}
      );
      const priceData1 = await getUSDPrice(
        `query {
          pool(id:"0x934f434a226ed5b6c4f7fc9a2dc5dc0467bddee7"){
            id
            sqrtPrice
            id
            liquidity
            token0 {
              id
              decimals
              name
              symbol
            }
            token1 {
              id
              decimals
              name
              symbol
            }
            token0Price
            token1Price
            volumeUSD
          }  
       }`,
        {}
      );

      let getGobPrice =
        parseFloat(WbchAndbcUsdtPair.pool.token1Price) *
        parseFloat(GobAndWbchPair.pool.token0Price);

      setPrice({
        GOBInPrice: Number(getGobPrice || 0).toFixed(2),
        WBCHInPrice: Number(priceData1?.pool?.token1Price || 0).toFixed(2),
      });
    } catch (error) { }
  };

  useEffect(() => {
    if (details.stakeSymbol && price.GOBInPrice && price.WBCHInPrice) {
      getAPR(details.totalSupply, price.WBCHInPrice, price.GOBInPrice);
    }
  }, [details, price]);

  useEffect(() => {
    if (
      wallet.isActive &&
      wallet.address &&
      currentNetwork &&
      price.GOBInPrice
    ) {
      getDetails();
    }
  }, [wallet, currentNetwork, price]);

  useEffect(() => {
    getUsdPrice();
  }, []);


  return (
    <>
      {migration &&
        createPortal(
          <MigrationPop
            migration={migration}
            setMigration={setMigration}
            balance={details.sGob || 0}
            getDetails={getDetails}

          // load={load}
          />,
          document.body
        )}

      {loading && (
        <div
          className="fixed flex items-center justify-center w-full loaderCstm"
          style={{
            height: "calc(100vh - 72px)",
            background: "#00000099",
            zIndex: 9999,
          }}
        >
          <CommonLoader />
        </div>
      )}
      <section className={`${styles?.stakingSec} staking relative py-5 w-full`}>
        <div className="container mx-auto">
          <div className="grid gap-3  grid-cols-12">
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className={`${styles?.cardCstm} cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-col`}
              >
                <div className="top pb-3 text-center lg:mb-3 w-full">
                  <h4 className="m-0 text-3xl font-extrabold text-white">
                    YOUR BALANCE
                  </h4>
                </div>
                <div className="contentBody lg:px-4 w-full">
                  <ul className="text-white pl-0">
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50 font-medium">Total Unstaked: </span>
                      <span className=" w-50 font-medium pl-4 break-all">
                        $
                        {toCommas(
                          Number(details?.unStakedAmountInDollar || 0).toFixed(
                            2
                          )
                        )}
                      </span>
                    </li>
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50 font-medium">Total Staked: </span>
                      <span className="underline font-medium pl-4 w-50 break-all">
                        $
                        {toCommas(
                          Number(details?.stakedAmountInDollar || 0).toFixed(2)
                        )}
                      </span>
                    </li>

                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50 font-medium">Total Balance: </span>

                      <span className="pl-4 font-medium w-50 break-all">
                        $
                        {toCommas(
                          Number(details?.balanceInDollar || 0).toFixed(2)
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className={`${styles?.cardCstm} cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-col`}
              >
                <div className="contentBody text-center lg:px-4">
                  <div className="py-2">
                    <div className="imgWrp">
                      <img
                        src={logo}
                        className="max-w-full w-auto h-auto mx-auto"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="m-0 font-extrabold py-2 text-lg">
                    GOB Price: ${price?.GOBInPrice || 0}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    {details.sGob > 0 && currentNetwork?.chainId !== 56 && (
                      <button
                        onClick={handleMigrationPopup}
                        className="btn flex items-center justify-center commonBtn font-extrabold"
                      >
                        Migration
                      </button>
                    )}
                    <a
                      // href="/#/swap?inputCurrency=0xBc2F884680c95A02cea099dA2F524b366d9028Ba&outputCurrency=0x56381cB87C8990971f3e9d948939e1a95eA113a3&chain=sbch"
                      href={
                        currentNetwork?.chainId == 56 ? "/#/swap?inputCurrency=0x8ff795a6f4d97e7887c79bea79aba5cc76444adf&outputCurrency=0x701aca29ae0f5d24555f1e8a6cf007541291d110&chain=bsc"
                          : "/#/swap?inputCurrency=0xBc2F884680c95A02cea099dA2F524b366d9028Ba&outputCurrency=0x56381cB87C8990971f3e9d948939e1a95eA113a3&chain=sbch"
                      }
                      target="_blank"
                      onClick={(e) => (isBlocked ? e.preventDefault() : false)}
                    >
                      <button
                        className="btn font-bold my-2 inline-flex items-center justify-center commonBtn"
                        disabled={isBlocked}
                      >
                        BUY GOB
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className={`${styles?.cardCstm} cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-col`}
              >
                <div className="top pb-3 text-center lg:mb-3">
                  <h4 className="m-0 text-3xl font-extrabold text-white">
                    GOB SUPPLY
                  </h4>
                </div>

                <div className="contentBody lg:px-4 w-full">
                  <ul className="text-white">
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50 font-medium">Total Unstaked: </span>
                      <span className=" pl-4 font-medium w-50 break-all">
                        {toCommas(Number(details?.unStackTotalSupply || 0))}
                      </span>
                    </li>
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50 font-medium ">Total Staked: </span>
                      <span className="underline font-medium pl-4 w-50 break-all">
                        {toCommas(Number(details?.totalSupply || 0))}
                      </span>
                    </li>
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50 font-medium">Total Supply: </span>
                      <span className=" w-50 font-medium pl-4 break-all">
                        {toCommas(Number(details?.tokenTotalSupply || 0))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <TokenStaking
              styles={styles}
              details={details}
              getDetails={getDetails}
              isBlocked={isBlocked}
            />
            <Rewards
              styles={styles}
              details={details}
              getDetails={getDetails}
              isBlocked={isBlocked}
              apr={apr}
            />
            <Withdraw
              styles={styles}
              details={details}
              getDetails={getDetails}
              isBlocked={isBlocked}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Staking;
