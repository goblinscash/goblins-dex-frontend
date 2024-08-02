import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

// // css
// import styles from "./staking.module.scss";

// image
import logo from "assets/farmingAssets/Images/logo.png";



///component
// import Rewards from "./components/Rewards";
// import TokenStaking from "./components/Staking";
// import Withdraw from "./components/Withdraw";
// import { CommonLoader } from "@/Component/Common";

//hooks && helpers
// import useWallet from "@/hooks/wallet";
import Web3Intraction from "utils/web3Intraction";
import * as request from "helpers/apiRequests";
import { priceGraphQl } from "helpers/constants";
import { toCommas } from "helpers/utils";



const Staking = () => {
  const { currentNetwork, isBlocked } = useSelector((state) => state.Dashboard);
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);
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

      setDetails({
        ...detail,
        unStakedAmountInDollar:
          detail.unStakedAmount * Number(price.GOBInPrice),
        stakedAmountInDollar: detail.stakedAmount * Number(price.GOBInPrice),
        balanceInDollar: detail.balance * Number(price.GOBInPrice),
      });

      setLoading(false);
    } catch (error) {
      console.log(error, "<===err");
      setLoading(false);
    }
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
      const priceData = await getUSDPrice(
        `query {
          pool(id:"0x532e1a0117ac273f448d5af5af8aa6336a4374d5"){
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

      setPrice({
        GOBInPrice: Number(priceData?.pool?.token1Price || 0).toFixed(2),
        WBCHInPrice: Number(priceData1?.pool?.token1Price || 0).toFixed(2),
      });
    } catch (error) {}
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
      {/* {loading && <CommonLoader />} */}
      <section className={` staking relative py-4`}>
        <div className="container">
          <div className="grid gap-3  grid-cols-12">
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className={`cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-column`}
              >
                <div className="top pb-3 text-center lg:mb-3">
                  <h4 className="m-0 text-3xl font-extrabold text-white">
                    YOUR BALANCE
                  </h4>
                </div>
                <div className="contentBody lg:px-4 w-full">
                  <ul className="text-white">
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50">Total Unstaked: </span>
                      <span className=" w-50 pl-4 break-all">
                        $
                        {toCommas(
                          Number(details?.unStakedAmountInDollar || 0).toFixed(
                            2
                          )
                        )}
                      </span>
                    </li>
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50">Total Staked: </span>
                      <span className="underline pl-4 w-50 break-all">
                        $
                        {toCommas(
                          Number(details?.stakedAmountInDollar || 0).toFixed(2)
                        )}
                      </span>
                    </li>

                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50">Total Balance: </span>

                      <span className="pl-4 w-50 break-all">
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
                className={` cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-column`}
              >
                <div className="contentBody text-center lg:px-4">
                  <div className="py-2">
                    <div className="imgWrp">
                      <img
                        src={logo}
                        className="max-w-full w-auto h-auto mx-auto"
                        height={10000}
                        width={10000}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="m-0 font-extrabold py-2 text-lg">
                    GOB Price: ${price?.GOBInPrice || 0}
                  </p>
                  <Link
                    href="https://gobswap.dfd.cash/swap?inputCurrency=0xBc2F884680c95A02cea099dA2F524b366d9028Ba&outputCurrency=0x56381cB87C8990971f3e9d948939e1a95eA113a3&chain=sbch"
                    target="_blank"
                    onClick={(e) => (isBlocked ? e.preventDefault() : false)}
                  >
                    <button
                      className="btn font-bold my-2 inline-flex items-center justify-center commonBtn"
                      disabled={isBlocked}
                    >
                      BUY GOB
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className={` cardCstm p-4 h-full  rounded-xl flex items-center justify-between flex-column`}
              >
                <div className="top pb-3 text-center lg:mb-3">
                  <h4 className="m-0 text-3xl font-extrabold text-white">
                  GOB SUPPLY
                  </h4>
                </div>

                <div className="contentBody lg:px-4 w-full">
                  <ul className="text-white">
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50">Total Unstaked: </span>
                      <span className=" pl-4 w-50 break-all">
                        {toCommas(Number(details?.unStackTotalSupply || 0))}
                      </span>
                    </li>
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50">Total Staked: </span>
                      <span className="underline pl-4 w-50 break-all">
                        {toCommas(Number(details?.totalSupply || 0))}
                      </span>
                    </li>
                    <li className="py-1 font-semibold text-lg flex items-start">
                      <span className="w-50">Total Supply: </span>
                      <span className=" w-50 pl-4 break-all">
                        {toCommas(Number(details?.tokenTotalSupply || 0))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <TokenStaking
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
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Staking;
