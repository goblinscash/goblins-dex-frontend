import { ethers } from "ethers";
import computeABI from "utils/ABI/computeABi.json";

//img

import Icon1 from "assets/farmingAssets/icons/0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04.png";
import Icon2 from "assets/farmingAssets/icons/0x56381cB87C8990971f3e9d948939e1a95eA113a3.png";
import Icon3 from "assets/farmingAssets/icons/0xbb2A35cc3e3dDb679fe30A82051633bC822e4191.png";
import Icon4 from "assets/farmingAssets/icons/0xbb10B6D11db70f33417b08e0B87042275C933Bb9.png";
import Icon5 from "assets/farmingAssets/icons/0xbbb3700F33fCb64437Dc28A7Beb6b21f5cC76FB9.png";
import Icon6 from "assets/farmingAssets/icons/0xBc2F884680c95A02cea099dA2F524b366d9028Ba.png";
import Icon7 from "assets/farmingAssets/icons/0xBc9bD8DDe6C5a8e1CBE293356E02f5984693b195.png";


export const cryptoData = [
    {
      label: "SmartBCH",
      symbol: "SmartBCH",
      name: "SmartBCH",
      type: "SmartBCH",
      chainName: "Smart Bitcoin Cash",
      rpcUrls: [
        "https://rpc-sbch.goblins.cash/",
        "https://smartbch.greyh.at",
        "https://smartbch.greyh.at",
        "https://smartbch.fountainhead.cash/mainnet",
        "https://global.uat.cash",
        "https://rpc.uatvo.com",
        "https://api.tatum.io/v3/blockchain/node/bch-mainnet ",
        "https://rpc-mainnet.smartbch.org",
        "https://smartbch.devops.cash/mainnet",
      ],
      chainId: 10000,
      rpcUrl: "https://rpc-sbch.goblins.cash/",
      contractAddress: process.env.REACT_APP_BCH_STAKING_CONTRACT,
      nftManagerContractAddress:
        process.env.REACT_APP_BCH_NFT_MANAGER_CONTRACT,
      stakeContractAddress: process.env.REACT_APP_BCH_TOKEN_STAKING_CONTRACT,
      explorerLink: "https://smartscout.cash/",
      rpcUrls: ["https://smartbch.greyh.at"],

      blockExplorerUrls: ["https://smartbch.org/"],
      nativeCurrency: { name: "Bitcoin Cash", symbol: "BCH", decimals: 18 },
    },
];



export const graphQLUrl = {
  10000: "https://graph.dfd.cash/subgraphs/name/v3stakerminwidths",
  56: "https://api.studio.thegraph.com/query/78445/v3stakerminwidths/0.0.5",
  97: "https://api.studio.thegraph.com/query/78445/v3stakerminwidths/0.0.5",
};

export const priceGraphQl =
  "https://graph.dfd.cash/subgraphs/name/goblins/subgraph-v3";

export const supportedChainIds = [56, 97, 10000];

export const getUniqueToken = (data) => {
  const uniqueTokenIds = new Set(data.map((item) => item.tokenId));
  // Convert the Set back to an array of objects
  const uniqueData = Array.from(uniqueTokenIds).map((tokenId) => ({ tokenId }));
  return uniqueData;
};

export const getProvider = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const provider = await new ethers.getDefaultProvider(
        "https://bsc-testnet-rpc.publicnode.com"
      );

  

      resolve(provider);
    } catch (err) {
      console.log(err, "<===err in getProvider");
      reject(err);
    }
  });
};

export const getContract = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const provider = await getProvider();
      const contract = new ethers.Contract(
        "0xEA589fCCE1df1ee1ca5E1796A683408a36E6e267",
        computeABI,
        provider
      );
      resolve(contract);
    } catch (err) {
      console.log(err, "<===err in getContract");
      reject(err);
    }
  });
};

export const makeComputeData = async (key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const contract = await getContract();

      let compute = await contract.compute(key);
      resolve(compute);
    } catch (err) {
      console.log(err, "<===err in makeComputeData");
      reject(err);
    }
  });
};

export const getSymbols = {
  "0x3743ec0673453e5009310c727ba4eaf7b3a1cc04": Icon1,
  "0x56381cb87c8990971f3e9d948939e1a95ea113a3": Icon2,
  "0xbb2a35cc3e3ddb679fe30a82051633bc822e4191": Icon3,
  "0xbb10b6d11db70f33417b08e0b87042275c933bb9": Icon4,
  "0xbbb3700f33fcb64437dc28a7beb6b21f5cc76fb9": Icon5,
  "0xbc2f884680c95a02cea099da2f524b366d9028ba": Icon6,
  "0xbc9bd8dde6c5a8e1cbe293356e02f5984693b195": Icon7,
};

export const getSortedData = (arr, sortKey, sortOrder) => {

  console.log(arr, sortKey, sortOrder, "<====arr, sortKey, sortOrder")
  if (!arr || !arr.length) {
    return [];
  } else {
    const sortedArr = [...arr].sort((a, b) => {
      let aValue = a.key[sortKey];
      let bValue = b.key[sortKey];

      if (sortKey === "apr" || sortKey === "tvl" || sortKey === "nftCount") {
        aValue = parseFloat(a[sortKey]);
        bValue = parseFloat(b[sortKey]);
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return sortedArr;
  }
};

