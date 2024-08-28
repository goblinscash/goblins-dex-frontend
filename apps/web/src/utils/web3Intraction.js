import { Contract, ethers } from "ethers";

//ABI
import MigrationStakingABI from "./ABI/migrationStaking.json";
import NFTManager from "./ABI/NonfungiblePositionManager.json";
import PancakeV3Pool from "./ABI/PancakeV3Pool.json";
import StakeABI from "./ABI/StakeABI.json";
import TokenABI from "./ABI/TokenABI.json";
import UniswapV3Factory from "./ABI/UniswapV3Factory.json";
import UniswapV3Staker from "./ABI/UniswapV3Staker.json";

import { makeByteData,makeByteDataForV3, toFixedCustm } from "../helpers/utils";

class Web3Intraction {
  constructor(currentNetwork, provider) {
    if (provider || window.ethereum) {
      this.PROVIDER = provider;
      this.SIGNER = this.PROVIDER.getSigner();
    } else if (currentNetwork) {
      this.PROVIDER = new ethers.providers.JsonRpcProvider(
        currentNetwork?.rpcUrl
      );
      this.SIGNER = this.PROVIDER;
    }
    this.contractDetails = {
      abi: UniswapV3Staker,
      ...currentNetwork,
    };
    this.walletType = currentNetwork.label;
  }

  /**
   * Get contract from abi and address
   *
   * @param {string} abi - ABI JSON
   * @param {string} address - Contract Address
   * @param {boolean} isSigner - signer ot not
   *
   * @returns {object} Contract
   */

  getContract = (abi, address, isSigner) => {
    try {
      let contract = new Contract(
        address,
        JSON.parse(abi),
        isSigner ? this.SIGNER : this.PROVIDER
      );

      return contract;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  /**
   * Check and Increase Allowance.
   *
   * @param {Number} tokenAmount number token amount
   * @param {Number} tokenAddress token address

   *
   *
   * @returns {Promise} Promise
   */
  checkAllowance = async (tokenAmount, tokenAddress, approvalAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let walletAddres = this.SIGNER.getAddress();

        if (tokenAddress && approvalAddress) {
          let tokenContract = this.getContract(
            JSON.stringify(TokenABI),
            tokenAddress,
            true
          );

          let getBalance = await tokenContract.balanceOf(walletAddres);
          let tokenDecimal = await tokenContract.decimals();

          getBalance = getBalance.toString() / 10 ** tokenDecimal;
          if (Number(tokenAmount) > Number(getBalance)) {
            return reject("Don't have enough token");
          }

          let tokenAllowence = await tokenContract.allowance(
            walletAddres,
            approvalAddress
          );

          let getTotalSupply = await tokenContract.totalSupply();
          let getTotalSupplyInEth =
            getTotalSupply.toString() / 10 ** tokenDecimal;
          if (Number(tokenAmount) > Number(getTotalSupplyInEth)) {
            return reject("Don't have enough supply in pool");
          }

          // tokenAmount = parseInt(tokenAmount);
          tokenAllowence = tokenAllowence.toString();
          let tokenAmountWithDecimal = 0;

          if (tokenDecimal == 18) {
            tokenAmountWithDecimal = ethers.utils.parseUnits(
              tokenAmount.toString(),
              "ether"
            );
          } else {
            tokenAmountWithDecimal = Number(tokenAmount) * 10 ** tokenDecimal;
          }
          tokenAmountWithDecimal = parseInt(tokenAmountWithDecimal);
          if (Number(tokenAmountWithDecimal) > tokenAllowence) {
            const txn = await tokenContract.approve(
              approvalAddress,
              tokenAmountWithDecimal.toString()
            );

            await txn.wait();
          }
          resolve(tokenAmountWithDecimal);
        }
      } catch (error) {
        console.log(error, "<====err in allowance");
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Create Incentive
   *
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   * @param {number} rewards reward amount
   * @param {number} minimumWidth Minimum Width value
   * @param {address} tokenAddress Reward token address
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  createIncentive = async (keys, rewards, minimumWidth, tokenAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );
        let tx;
        if (!tokenAddress) {
          return reject("Token Address not found!");
        }
        let rewardTokenAmount = await this.checkAllowance(
          rewards,
          tokenAddress,
          this.contractDetails?.contractAddress
        );
        tx = await contract.createIncentive(
          keys,
          rewardTokenAmount.toString(),
          minimumWidth
        );
        let receipt = await tx.wait();
        resolve(receipt);
      } catch (error) {
        console.log(error, "<===error in createIncentive");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * NFT Stake in Incentive
   *
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   *
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  stake = async (keys, tokenId, walletAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(NFTManager),
          this.contractDetails?.nftManagerContractAddress,
          true
        );
        let getByteData = makeByteData(keys);
        let getSafeContract = await this.getContract(
          JSON.stringify([
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ]),
          this.contractDetails?.nftManagerContractAddress,
          true
        );
        let getOwner = await contract.ownerOf(tokenId);
        if (getOwner !== walletAddress) {
          reject("You are not a NFT owner!");
          return;
        }

        // let stakeTxn = await getSafeContract.safeTransferFrom(
        //   walletAddress,
        //   this.contractDetails.contractAddress,
        //   tokenId,
        //   getByteData
        // );

        // Encode the function calls
        const approve = await contract.interface.encodeFunctionData("approve", [
          this.contractDetails.contractAddress,
          tokenId,
        ]);
        const safeTransferFrom =
          await getSafeContract.interface.encodeFunctionData(
            "safeTransferFrom",
            [
              walletAddress,
              this.contractDetails.contractAddress,
              tokenId,
              getByteData,
            ]
          );

        const multicallData = contract.interface.encodeFunctionData(
          "multicall",
          [[approve, safeTransferFrom]]
        );

        const tx = {
          to: this.contractDetails?.nftManagerContractAddress,
          data: multicallData,
          value: ethers.utils.parseEther("0"), // Amount of Ether to send with the transaction
        };

        const response = await this.SIGNER.sendTransaction(tx);

        let receipt = await response.wait(); // Wait for the transaction to be mined
        console.log(receipt, "<===receipt");

        resolve(receipt);
        // let receipt = await stakeTxn.wait();
        // resolve(receipt);
      } catch (error) {
        console.log(error, "<===error in stake");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Multi Call Function call for unstake and claim
   * @param {array} keys [[reward token, pool address,start time, endTime, refundee address]]
   * @param {string} tokenId token id
   * @param {string} walletAddress Wallet Address
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */

  multiStakeWithMultiCall = async (keys, tokenId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );
        let stakeData = [];

        for (let i = 0; i < keys.length; i++) {
          let stakeToken = await contract.interface.encodeFunctionData(
            "stakeToken",
            [keys[i], tokenId]
          );
          stakeData.push(stakeToken);
        }

        // Encode the function calls

        const multicallData = contract.interface.encodeFunctionData(
          "multicall",
          [stakeData]
        );

        const tx = {
          to: this.contractDetails?.contractAddress,
          data: multicallData,
          value: ethers.utils.parseEther("0"), // Amount of Ether to send with the transaction
        };

        const response = await this.SIGNER.sendTransaction(tx);

        let receipt = await response.wait(); // Wait for the transaction to be mined

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get Deposit in Incentive
   *
   * @param {string} tokenId token id
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getDeposit = async (tokenId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        let deposit = await contract.deposits(tokenId);

        resolve(deposit);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get stakes in Incentive
   *
   * @param {string} tokenId token id
   * @param {string} incentiveId incentive id
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getStakes = async (tokenId, incentiveId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        let stakes = await contract.stakes(tokenId, incentiveId);

        resolve({
          liquidity: stakes.liquidity.toString(),
          secondsPerLiquidityInsideInitialX128:
            stakes.secondsPerLiquidityInsideInitialX128.toString(),
        });
      } catch (error) {
        console.log(error, "<===error in getStakes");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get Rewards in Incentive
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   * @param {string} tokenId token id
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getRewardInfo = async (keys, tokenId) => {
    try {
      let contract = this.getContract(
        JSON.stringify(this.contractDetails?.abi),
        this.contractDetails?.contractAddress,
        true
      );
      let rewards = await contract.getRewardInfo(keys, tokenId);
      return rewards;
    } catch (error) {
      return null;
    }
  };

  /**
   * Get Rewards in Incentive
   * @param {array} rewardToken rewardToken
   * @param {string} walletAddress token id
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getRewards = async (rewardToken, walletAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        let rewards = await contract.rewards(rewardToken, walletAddress);

        resolve(rewards);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Mutli Call Function call for restake
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   * @param {string} tokenId token id
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  mutliCallReStake = async (keys, tokenId, walletAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );
        // Encode the function calls
        const unStakeToken = await contract.interface.encodeFunctionData(
          "unstakeToken",
          [keys, tokenId]
        );
        const stakeToken = await contract.interface.encodeFunctionData(
          "stakeToken",
          [keys, tokenId]
        );
        const claimReward = await contract.interface.encodeFunctionData(
          "claimReward",
          [keys[0], walletAddress, 0]
        );

        const multicallData = contract.interface.encodeFunctionData(
          "multicall",
          [[unStakeToken, stakeToken, claimReward]]
        );

        const tx = {
          to: this.contractDetails?.contractAddress,
          data: multicallData,
          value: ethers.utils.parseEther("0"), // Amount of Ether to send with the transaction
        };

        const response = await this.SIGNER.sendTransaction(tx);

        let receipt = await response.wait(); // Wait for the transaction to be mined
        console.log(receipt, "<===receipt");

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Mutli Call Function call for unstake and claim
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   * @param {string} tokenId token id
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  mutliCallUnstake = async (keys, tokenId, walletAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        // Encode the function calls
        const unStakeToken = await contract.interface.encodeFunctionData(
          "unstakeToken",
          [keys, tokenId]
        );

        const claimReward = await contract.interface.encodeFunctionData(
          "claimReward",
          [keys[0], walletAddress, 0]
        );

        const multicallData = contract.interface.encodeFunctionData(
          "multicall",
          [[unStakeToken, claimReward]]
        );

        const tx = {
          to: this.contractDetails?.contractAddress,
          data: multicallData,
          value: ethers.utils.parseEther("0"), // Amount of Ether to send with the transaction
        };

        const response = await this.SIGNER.sendTransaction(tx);

        let receipt = await response.wait(); // Wait for the transaction to be mined

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  ///unstake

  unStake = async (keys, tokenId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        let tx = await contract.unstakeToken(keys, tokenId);

        let receipt = await tx.wait();

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  claimRewards = async (rewardsToken, walletAddress) => {
    console.log(rewardsToken, walletAddress, "<===data");
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        let tx = await contract.claimReward(rewardsToken, walletAddress, 0);

        let receipt = await tx.wait();

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  ///withdraw

  withdrawToken = async (tokenId, walletAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );

        let tx = await contract.withdrawToken(tokenId, walletAddress, "0x");

        let receipt = await tx.wait();

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get Nft Token Id
   * @param {string} walletAddress own wallet address
   * @param {string} index index
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getTokenId = async (walletAddress, index) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(NFTManager),
          this.contractDetails?.nftManagerContractAddress,
          true
        );

        const response = await contract.tokenOfOwnerByIndex(
          walletAddress,
          index
        );

        resolve(response.toString());
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get Nft Token URI
   * @param {string} tokenId own wallet address
   *
   * @returns {Promise} base64 encoded in Success or Error in Fail
   */
  getTokenURI = async (tokenId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(NFTManager),
          this.contractDetails?.nftManagerContractAddress,
          true
        );

        const response = await contract.tokenURI(tokenId);

        // console.log(response, "<===response")

        resolve(response);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Multi Call Function call for endIncentive and unstake all staked nft.
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   * @param {array} tokenIds [token id]

   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  endIncentive = async (keys, tokenIds) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );
        let encodeData = [];

        for (let i = 0; i < tokenIds.length; i++) {
          let unstakeToken = await contract.interface.encodeFunctionData(
            "unstakeToken",
            [keys, tokenIds[i]]
          );
          encodeData.push(unstakeToken);
        }

        let endIncentive = await contract.interface.encodeFunctionData(
          "endIncentive",
          [keys]
        );

        encodeData.push(endIncentive);

        // Encode the function calls

        const multicallData = contract.interface.encodeFunctionData(
          "multicall",
          [encodeData]
        );

        const tx = {
          to: this.contractDetails?.contractAddress,
          data: multicallData,
          value: ethers.utils.parseEther("0"), // Amount of Ether to send with the transaction
        };

        const response = await this.SIGNER.sendTransaction(tx);

        let receipt = await response.wait(); // Wait for the transaction to be mined

        resolve(receipt);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  getTokenDecimal = async (tokenAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (tokenAddress) {
          let tokenContract = this.getContract(
            JSON.stringify(TokenABI),
            tokenAddress,
            true
          );

          let tokenDecimal = await tokenContract.decimals();
          let tokenSymbol = await tokenContract.symbol();

          resolve({
            decimal: tokenDecimal,
            symbol: tokenSymbol,
          });
        }
      } catch (error) {
        console.log(error, "<====err in allowance");
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Token Stake
   *
   * @param {string} amount amount value
   *
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */

  tokenStake = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(StakeABI),
          this.contractDetails.stakeContractAddress,
          true
        );

        let getStakingContract = await contract.stakingToken();

        let stakeAmount = await this.checkAllowance(
          amount,
          getStakingContract,
          this.contractDetails.stakeContractAddress
        );

        console.log(stakeAmount, "<====stakeAmount");

        let tx = await contract.stake(stakeAmount);
        let receipt = await tx.wait();
        resolve(receipt);
        // let receipt = await stakeTxn.wait();
        // resolve(receipt);
      } catch (error) {
        console.log(error, "<===error in stake");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Token Withdraw
   *
   * @param {string} amount amount value
   *
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  tokenWithdraw = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(StakeABI),
          this.contractDetails.stakeContractAddress,
          true
        );
        let getStakingContract = await contract.stakingToken();
        let tokenData = await this.getTokenDecimal(getStakingContract);
        let tokenAmountWithDecimal = Number(amount) * 10 ** tokenData.decimal;

        tokenAmountWithDecimal = parseInt(tokenAmountWithDecimal);

        let tx = await contract.withdraw(tokenAmountWithDecimal.toString());
        let receipt = await tx.wait();
        resolve(receipt);
      } catch (error) {
        console.log(error, "<===error in stake");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Token Exit
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  tokenExit = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(StakeABI),
          this.contractDetails.stakeContractAddress,
          true
        );
        let tx = await contract.exit();
        let receipt = await tx.wait();
        resolve(receipt);
      } catch (error) {
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get Rewards
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getTokenRewards = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(StakeABI),
          this.contractDetails.stakeContractAddress,
          true
        );

        let tx = await contract.getReward();
        let receipt = await tx.wait();
        resolve(receipt);
      } catch (error) {
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Check and Increase Allowance.
   *
   * @param {Number} tokenAddress ERC20 token address
   *
   *
   * @returns {Promise} Promise
   */
  getTokenBalance = async (tokenAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let walletAddres = this.SIGNER.getAddress();
        let tokenContract = this.getContract(
          JSON.stringify(TokenABI),
          tokenAddress,
          true
        );
        let getBalance = await tokenContract.balanceOf(walletAddres);
        let tokenDecimal = await tokenContract.decimals();
        let symbol = await tokenContract.symbol();
        let getTotalSupply = await tokenContract.totalSupply();
        let getTotalSupplyInEth =
          getTotalSupply.toString() / 10 ** tokenDecimal;

        resolve({
          balance: getBalance.toString() / 10 ** tokenDecimal,
          tokenDecimal: tokenDecimal,
          symbol: symbol,
          totalSupply: getTotalSupplyInEth,
        });
      } catch (error) {
        console.log(error, "<====err in getTokenBalance");
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Check and Increase Allowance.
   *
   * @param {Number} tokenAddress ERC20 token address
   *
   *
   * @returns {Promise} Promise
   */
  getTokenSymbolAndDecimal = async (tokenAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let tokenContract = this.getContract(
          JSON.stringify(TokenABI),
          tokenAddress,
          true
        );

        let tokenDecimal = await tokenContract.decimals();
        let symbol = await tokenContract.symbol();

        resolve({ tokenDecimal: tokenDecimal, symbol: symbol });
      } catch (error) {
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get Detail info
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getDetailInfo = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(StakeABI),
          this.contractDetails.stakeContractAddress,
          true
        );

        let walletAddress = this.SIGNER.getAddress();

        let getStakingContract = await contract.stakingToken();
        let getRewardsContract = await contract.rewardsToken();
        let stakeToken = await this.getTokenBalance(getStakingContract);
        let rewardToken = await this.getTokenSymbolAndDecimal(
          getRewardsContract
        );

        let stakedAmount = await contract.balanceOf(walletAddress);
        stakedAmount = stakedAmount.toString() / 10 ** stakeToken.tokenDecimal;

        let earnedAmount = await contract.earned(walletAddress);
        earnedAmount = earnedAmount.toString() / 10 ** rewardToken.tokenDecimal;

        let totalSupply = await contract.totalSupply();
        totalSupply = totalSupply.toString() / 10 ** stakeToken.tokenDecimal;

        resolve({
          balance: parseFloat(stakedAmount) + parseFloat(stakeToken.balance),
          stakedAmount: parseFloat(stakedAmount),
          unStakedAmount: parseFloat(stakeToken.balance),
          totalSupply: parseInt(totalSupply),
          earnedAmount: earnedAmount,
          rewardSymbol: rewardToken.symbol,
          stakeSymbol: stakeToken.symbol,
          tokenTotalSupply: parseInt(stakeToken.totalSupply),
          unStackTotalSupply:
            parseInt(stakeToken.totalSupply) - parseInt(totalSupply),
        });
      } catch (error) {
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  nftCount = async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(this.contractDetails?.abi),
          this.contractDetails?.contractAddress,
          true
        );
        let res = await contract.incentives(id);
        resolve(res);
      } catch (error) {
        // console.log(error, "<===error in buy");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   *
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  getPoolDetails = async (poolAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        let contract = this.getContract(
          JSON.stringify(PancakeV3Pool),
          poolAddress,
          true
        );
        let getToken0Address = await contract.token0();
        let getToken1Address = await contract.token1();
        let getToken0Detail = await this.getTokenSymbolAndDecimal(
          getToken0Address
        );
        let getToken1Detail = await this.getTokenSymbolAndDecimal(
          getToken1Address
        );
        resolve({
          token0Symbol: getToken0Detail.symbol,
          token1Symbol: getToken1Detail.symbol,
        });
      } catch (error) {
        console.log(error, "<===error in getPoolSymbol");

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get APR Rewards for staking
   *
   * @param {Number} totalSupply total stake amount
   * @param {Number} WBCHPrice WBCH Price in USD
   * @param {Number} GOBPrice GOB Price in USD
   *
   *
   * @returns {Promise} Number APR in Success or Error in Fail
   */
  getAPR = async (totalSupply, WBCHPrice, GOBPrice) => {
    return new Promise(async (resolve, reject) => {
      try {
        WBCHPrice = Number(WBCHPrice);
        GOBPrice = Number(GOBPrice);

        const contract = this.getContract(
          JSON.stringify(StakeABI),
          this.contractDetails.stakeContractAddress,
          true
        );
        let rewardsToken = await contract.rewardsToken();
        let getTokenData = await this.getTokenSymbolAndDecimal(rewardsToken);
        let rewardRate = await contract.rewardRate();
        rewardRate = rewardRate.toString() / 10 ** getTokenData.tokenDecimal;
        rewardRate = toFixedCustm(rewardRate);

        const secondsInAYear = 365 * 24 * 60 * 60;

        const apr =
          ((rewardRate * WBCHPrice * secondsInAYear) /
            (totalSupply * GOBPrice)) *
          100;

        // console.log(apr, "<===apr")

        resolve(apr > 1 ? Number(apr).toFixed(2) : Number(apr).toFixed(4));
      } catch (error) {
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Get NFT
   *
   * @param {string} tokenId token id
   *
   * @returns {Promise} address APR in Success or Error in Fail
   */
  getNftPoolAddress = async (tokenId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const NftContract = this.getContract(
          JSON.stringify(NFTManager),
          this.contractDetails?.nftManagerContractAddress,
          true
        );
        let factoryAddress = await NftContract.factory();

        let positions = await NftContract.positions(tokenId);
        const facoryContract = this.getContract(
          JSON.stringify(UniswapV3Factory),
          factoryAddress,
          true
        );
        const getPool = await facoryContract.getPool(
          positions.token0,
          positions.token1,
          positions.fee
        );
        // console.log(apr, "<===apr")

        resolve(getPool);
      } catch (error) {
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * Token Stake
   *
   * @param {string} amount amount value
   *
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */

  unStakeFromMigration = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(MigrationStakingABI),
          this.contractDetails.migrationAddress,
          true
        );
        let tx = await contract.unstake(amount, true);
        let receipt = await tx.wait();
        resolve(receipt);
        // resolve(receipt);
      } catch (error) {
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }
        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };

  /**
   * NFT Stake in Incentive
   *
   * @param {array} keys [reward token, pool address,start time, endTime, refundee address]
   *
   *
   * @returns {Promise} Object (Transaction Hash, Contract Address) in Success or Error in Fail
   */
  compoundPool = async (tokenId, walletAddress) => {
    tokenId = tokenId.toString();
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(NFTManager),
          this.contractDetails?.nftManagerContractAddress,
          true
        );
        const approve = await contract.interface.encodeFunctionData("approve", [
          this.contractDetails.compoundAddress,
          tokenId,
        ]);
        const safeTransferFrom = await contract.interface.encodeFunctionData(
          "safeTransferFrom",
          [
            walletAddress,
            this.contractDetails.compoundAddress,
            tokenId,
            "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000",
          ]
        );

        const multicallData = contract.interface.encodeFunctionData(
          "multicall",
          [[approve, safeTransferFrom]]
        );

        const tx = {
          to: this.contractDetails?.nftManagerContractAddress,
          data: multicallData,
          value: ethers.utils.parseEther("0"), // Amount of Ether to send with the transaction
        };

        const response = await this.SIGNER.sendTransaction(tx);

        let receipt = await response.wait(); // Wait for the transaction to be mined
        console.log(receipt, "<===receipt");

        resolve(receipt);
      } catch (error) {
        console.log(error, "<===error in compoundPool");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };




  changeRange = async (data, tokenId, walletAddress) => {
    return new Promise(async (resolve, reject) => {
      try {
        const contract = this.getContract(
          JSON.stringify(NFTManager),
          this.contractDetails?.nftManagerContractAddress,
          true
        );
        let getByteData = makeByteDataForV3(data);

        

        const response = await contract.safeTransferFrom(
          walletAddress,
          this.contractDetails.contractAddress,
          tokenId,
          getByteData
        );

        let receipt = await response.wait();

        resolve(receipt);
        // let receipt = await stakeTxn.wait();
        // resolve(receipt);
      } catch (error) {
        console.log(error, "<===error in changeRange");
        if (error?.code === -32603) {
          return reject("insufficient funds for intrinsic transaction cost");
        }

        reject(error.reason || error.data?.message || error.message || error);
      }
    });
  };
}

export default Web3Intraction;
