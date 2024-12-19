import { ethers } from "ethers";
import computeABI from "utils/ABI/computeABi.json";

//img
import Icon1 from "assets/farmingAssets/icons/0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04.png";
import Icon2 from "assets/farmingAssets/icons/0x56381cB87C8990971f3e9d948939e1a95eA113a3.png";
import Icon4 from "assets/farmingAssets/icons/0xbb10B6D11db70f33417b08e0B87042275C933Bb9.png";
import Icon3 from "assets/farmingAssets/icons/0xbb2A35cc3e3dDb679fe30A82051633bC822e4191.png";
import Icon5 from "assets/farmingAssets/icons/0xbbb3700F33fCb64437Dc28A7Beb6b21f5cC76FB9.png";
import Icon8 from "assets/farmingAssets/icons/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf.png";
import Icon9 from "assets/farmingAssets/icons/0x55d398326f99059fF775485246999027B3197955.png";
import Icon_1 from "assets/farmingAssets/icons/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png";
import Icon10 from "assets/farmingAssets/icons/0xfb5b838b6cfeedc2873ab27866079ac55363d37e.png";
import IconDoge from "assets/farmingAssets/icons/0xba2ae424d960c26247dd6c32edc70b295c744c43.png";
import IconUSDC from "assets/farmingAssets/icons/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png";
import IconBONK from "assets/farmingAssets/icons/0xa697e272a73744b343528c3bc4702f2565b2f422.png";
import IconPEPE from "assets/farmingAssets/icons/0x25d887ce7a35172c62febfd67a1856f20faebb00.png";
import IconSHIB from "assets/farmingAssets/icons/0x2859e4544c4bb03966803b044a93563bd2d0dd4d.png";


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
    nftManagerContractAddress: process.env.REACT_APP_BCH_NFT_MANAGER_CONTRACT,
    stakeContractAddress: process.env.REACT_APP_BCH_TOKEN_STAKING_CONTRACT,
    migrationAddress: process.env.REACT_APP_BCH_MIGRATION_STAKING_CONTRACT,
    compoundAddress: process.env.REACT_APP_BCH_COMPOUND_CONTRACT,
    explorerLink: "https://smartscout.cash/",
    rpcUrls: ["https://smartbch.greyh.at"],

    blockExplorerUrls: ["https://smartbch.org/"],
    nativeCurrency: { name: "Bitcoin Cash", symbol: "BCH", decimals: 18 },
  },
  {
    label: "BNB Chain",
    symbol: "BNB",
    name: "BNB Chain",
    type: "BNB",
    chainName: "Binance Smart Chain",
    rpcUrls: [
      "https://bsc-dataseed.binance.org/",
      "https://bsc-dataseed1.defibit.io/",
      "https://bsc-dataseed1.ninicoin.io/"
    ],
    chainId: 56,
    rpcUrl: "https://bsc-dataseed.binance.org/",
    contractAddress: process.env.REACT_APP_BNB_STAKING_CONTRACT,
    nftManagerContractAddress: process.env.REACT_APP_BNB_NFT_MANAGER_CONTRACT,
    stakeContractAddress: process.env.REACT_APP_BNB_TOKEN_STAKING_CONTRACT,
    migrationAddress: process.env.REACT_APP_BNB_MIGRATION_STAKING_CONTRACT,
    compoundAddress: process.env.REACT_APP_BNB_COMPOUND_CONTRACT,
    explorerLink: "https://bscscan.com/",
    blockExplorerUrls: ["https://bscscan.com/"],
    nativeCurrency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
  },
  {
    label: "Base Network",
    symbol: "BASE",
    name: "Base Network",
    type: "BASE",
    chainName: "Base Network",
    rpcUrls: [
      "https://base.drpc.org",
      "https://base-rpc.publicnode.com",
      "https://base-pokt.nodies.app",
      "https://mainnet.base.org",
    ],
    chainId: 8453,
    rpcUrl: "https://tame-black-mansion.base-mainnet.quiknode.pro/a1347f138fbb6cf8029da7feb2b3e6cdea5394a3",
    contractAddress: process.env.REACT_APP_BASE_STAKING_CONTRACT,
    nftManagerContractAddress: process.env.REACT_APP_BASE_NFT_MANAGER_CONTRACT,
    stakeContractAddress: process.env.REACT_APP_BASE_TOKEN_STAKING_CONTRACT,
    migrationAddress: process.env.REACT_APP_BASE_MIGRATION_STAKING_CONTRACT,
    compoundAddress: process.env.REACT_APP_BASE_COMPOUND_CONTRACT,
    explorerLink: "https://basescan.com/",
    blockExplorerUrls: ["https://basescan.com/"],
    nativeCurrency: { name: "Base", symbol: "Base", decimals: 18 },
  }
];

export const graphQLUrl = {
  10000: "https://graph.dfd.cash/subgraphs/name/v3stakerminwidths",
  56: "https://api.studio.thegraph.com/query/78445/v3stakerminwidths/0.0.5",
  97: "https://api.studio.thegraph.com/query/78445/v3stakerminwidths/0.0.5",
};

export const GOBAddress = {
  10000: "0x56381cb87c8990971f3e9d948939e1a95ea113a3",
  56: "0x701aca29ae0f5d24555f1e8a6cf007541291d110",
  8453: "0xcdba3e4c5c505f37cfbbb7accf20d57e793568e3"
};

export const WBCHAddress = {
  10000: "0x3743ec0673453e5009310c727ba4eaf7b3a1cc04",
  56: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
  8453: "0x7be0cc2cadcd4a8f9901b4a66244dcdd9bd02e0f"
};

export const priceGraphQl = {
  "10000": "https://graph.dfd.cash/subgraphs/name/goblins/subgraph-v3",
  "56": "https://graph-bsc.goblins.cash/subgraphs/name/goblins/bsc-subgraph-v3",
  "8453": "https://graph-base.goblins.cash/subgraphs/name/goblins/base-subgraph-v3"
}



export const supportedChainIds = [56, 97, 10000, 8453];

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
  "0x3743ec0673453e5009310c727ba4eaf7b3a1cc04": Icon1, //BCH on bch
  "0x56381cb87c8990971f3e9d948939e1a95ea113a3": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartchain/assets/0x701ACA29AE0F5d24555f1E8A6Cf007541291d110/logo.png",
  "0xbb2a35cc3e3ddb679fe30a82051633bc822e4191": Icon3,
  "0xbb10b6d11db70f33417b08e0b87042275c933bb9": Icon4,
  "0xbbb3700f33fcb64437dc28a7beb6b21f5cc76fb9": Icon5,
  "0xbc2f884680c95a02cea099da2f524b366d9028ba": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0xBc2F884680c95A02cea099dA2F524b366d9028Ba/logo.png",
  "0xbc9bd8dde6c5a8e1cbe293356e02f5984693b195": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0xBc9bD8DDe6C5a8e1CBE293356E02f5984693b195/logo.png",
  "0xbbef77270d6425e113e1e37f008cf141a9fc215a": Icon8,
  "0x6c6b3e0f1a7b3513c55e1f288c99d53441990613": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x6c6b3E0F1a7B3513c55E1f288C99d53441990613/logo.png",
  "0x9ca6f10d19cbda52bbd615f7e1f1821386abe3d1": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x9Ca6F10D19CBDa52bBd615f7E1F1821386Abe3D1/logo.png",
  "0x21ba72ff5b25add1dc3d42cab987f1c4e0466814": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x21BA72Ff5b25AdD1Dc3d42Cab987f1c4e0466814/logo.png",
  "0x2859e4544c4bb03966803b044a93563bd2d0dd4d": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x21BA72Ff5b25AdD1Dc3d42Cab987f1c4e0466814/logo.png",
  "0x799351f408a51a0ca5fdb4cd9e93157d8703b70a": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x799351F408a51A0Ca5fdB4CD9E93157D8703b70A/logo.png",
  "0x8cf81850aa9d5a4e3df180afbaf0d2093a3f3379": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x8CF81850Aa9D5a4E3Df180AFBaF0d2093A3F3379/logo.png",
  "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartchain/assets/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf/logo.png", //BCH-bsc
  "0xfb5b838b6cfeedc2873ab27866079ac55363d37e": Icon10,
  "0x55d398326f99059ff775485246999027b3197955": Icon9,
  "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": Icon_1,
  "0xba2ae424d960c26247dd6c32edc70b295c744c43": IconDoge,
  "0xc993af7fa109e3dd17347c7ce612a5ed848f4b74": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x940181a94A35A4569E4529A3CDfB74e38FD98631/logo.png",


  "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": IconUSDC, // for bsc
  "0xa697e272a73744b343528c3bc4702f2565b2f422": IconBONK,
  "0x25d887ce7a35172c62febfd67a1856f20faebb00": IconPEPE,
  "0x701aca29ae0f5d24555f1e8a6cf007541291d110": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartchain/assets/0x701ACA29AE0F5d24555f1E8A6Cf007541291d110/logo.png",
  "0x617599b1177d56d130da5fd5cf896e3f186eb6f1": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x617599B1177d56d130Da5FD5cf896E3f186eB6f1/logo.png",
  "0x85689be665562c06aa052e0e2a2422b286d30c44": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x85689bE665562c06Aa052e0E2A2422b286d30C44/logo.png",
  "0x0df6a7169132265bb4f2b0fac0a37b26ea6f93fc": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0x0dF6A7169132265Bb4f2b0Fac0a37b26ea6F93Fc/logo.png",
  "0x751c9c9f98f839e97b039be2d5a66b92c622335f": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x5Ca35eBC4f25B042d2cAE75914c7e882E631fA9A/logo.png",
  "0xb6b54dde7282fbcd19cb1d447dfe425454a831eb": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0xB6B54DDE7282fbcD19Cb1d447dFE425454a831Eb/logo.png",
  "0x76d7062a70f5c129b6180baab2607c788a962b1b": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x940181a94A35A4569E4529A3CDfB74e38FD98631/logo.png",

  // Base
  "0x1c5bb6156fdf1ca8d8d894ecc0f1981619d2cdba": "",
  "0x4ed4e862860bed51a9570b96d89af5e1b0efefed": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartbch/assets/0xB6B54DDE7282fbcD19Cb1d447dFE425454a831Eb/logo.png",
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913/logo.png",
  "0xcdba3e4c5c505f37cfbbb7accf20d57e793568e3": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0xcDBa3E4C5c505F37CfbBB7aCCF20D57e793568E3/logo.png",
  "0x7be0cc2cadcd4a8f9901b4a66244dcdd9bd02e0f": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x7bE0Cc2cADCD4A8f9901B4a66244DcDd9Bd02e0F/logo.png",
  "0x5ca35ebc4f25b042d2cae75914c7e882e631fa9a": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x5Ca35eBC4f25B042d2cAE75914c7e882E631fA9A/logo.png",
  "0x2da56acb9ea78330f947bd57c54119debda7af71": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x2Da56AcB9Ea78330f947bD57C54119Debda7AF71/logo.png",
  "0x2a06a17cbc6d0032cac2c6696da90f29d39a1a29": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x2a06A17CBC6d0032Cac2c6696DA90f29D39a1a29/logo.png",
  "0x50da645f148798f68ef2d7db7c1cb22a6819bb2c": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x50dA645f148798F68EF2d7dB7C1CB22A6819bb2C/logo.png",
  "0x4200000000000000000000000000000000000006": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x4200000000000000000000000000000000000006/logo.png",
  "0x940181a94a35a4569e4529a3cdfb74e38fd98631": "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/base/assets/0x940181a94A35A4569E4529A3CDfB74e38FD98631/logo.png",
};

export const getSortedData = (arr, sortKey, sortOrder) => {
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


