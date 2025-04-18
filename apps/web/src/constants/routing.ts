// a list of tokens by chain
import { ChainId, Currency, Token, WETH9 } from '@uniswap/sdk-core'

import {
  ARB,
  BB_ETH,
  BB_BCH,
  BB_USDC,
  BB_USDT,
  BC_BCH,
  BTC_BSC,
  BUSD_BSC,
  CEUR_CELO,
  CEUR_CELO_ALFAJORES,
  CUSD_CELO,
  CUSD_CELO_ALFAJORES,
  DAI,
  DAI_ARBITRUM_ONE,
  DAI_AVALANCHE,
  DAI_BSC,
  DAI_OPTIMISM,
  DAI_POLYGON,
  ETH_BSC,
  GOB,
  FLOKI,
  BONK, SHIB, PEPE,DOGE,
  nativeOnChain,
  OP,
  PORTAL_ETH_CELO,
  PORTAL_USDC_CELO,
  USDC_ARBITRUM,
  USDC_ARBITRUM_GOERLI,
  USDC_AVALANCHE,
  USDC_BASE,
  USDC_BSC,
  USDC_MAINNET,
  USDC_OPTIMISM,
  USDC_OPTIMISM_GOERLI,
  USDC_POLYGON,
  USDC_POLYGON_MUMBAI,
  USDT,
  USDT_ARBITRUM_ONE,
  USDT_AVALANCHE,
  USDT_BSC,
  USDT_OPTIMISM,
  USDT_POLYGON,
  USDT_SBCH,
  WBTC,
  WBTC_ARBITRUM_ONE,
  WBTC_CELO,
  WBTC_OPTIMISM,
  WBTC_POLYGON,
  WETH_AVALANCHE,
  WETH_POLYGON,
  WETH_POLYGON_MUMBAI,
  WRAPPED_NATIVE_CURRENCY,
  BB_BTC,
  BCH_BSC,
  DOGE_BSC,
  FLOKI_BSC,
  PEPE_BSC,
  // WDOGE_BCH,
  SHIB_BSC, //SHIB adding
  BONK_BSC, //Bonk
  GOB_BSC,
  SPX_BCH,HERRY_BCH, MOG_BCH, Neiro_BCH,DEGEN_BCH,
  WBNB
} from './tokens'

type ChainTokenList = {
  readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[]
}

type FeePairs = {
  readonly [chainId: number]: { tokenA: string; tokenB: string; fee: number; }[];
}
const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
)

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
  [ChainId.MAINNET]: [
    nativeOnChain(ChainId.MAINNET),
    DAI,
    USDC_MAINNET,
    USDT,
    WBTC,
    WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET] as Token,
  ],
  [ChainId.GOERLI]: [nativeOnChain(ChainId.GOERLI), WRAPPED_NATIVE_CURRENCY[ChainId.GOERLI] as Token],
  [ChainId.SEPOLIA]: [nativeOnChain(ChainId.SEPOLIA), WRAPPED_NATIVE_CURRENCY[ChainId.SEPOLIA] as Token],

  [ChainId.ARBITRUM_ONE]: [
    nativeOnChain(ChainId.ARBITRUM_ONE),
    ARB,
    DAI_ARBITRUM_ONE,
    USDC_ARBITRUM,
    USDT_ARBITRUM_ONE,
    WBTC_ARBITRUM_ONE,
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE] as Token,
  ],
  [ChainId.ARBITRUM_GOERLI]: [
    nativeOnChain(ChainId.ARBITRUM_GOERLI),
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_GOERLI] as Token,
    USDC_ARBITRUM_GOERLI,
  ],

  [ChainId.OPTIMISM]: [
    nativeOnChain(ChainId.OPTIMISM),
    OP,
    DAI_OPTIMISM,
    USDC_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
    WETH9[ChainId.OPTIMISM],
  ],
  [ChainId.OPTIMISM_GOERLI]: [nativeOnChain(ChainId.OPTIMISM_GOERLI), USDC_OPTIMISM_GOERLI],

  [ChainId.BASE]: [nativeOnChain(ChainId.BASE), WRAPPED_NATIVE_CURRENCY[ChainId.BASE] as Token, USDC_BASE],

  [ChainId.POLYGON]: [
    nativeOnChain(ChainId.POLYGON),
    WETH_POLYGON,
    USDC_POLYGON,
    DAI_POLYGON,
    USDT_POLYGON,
    WBTC_POLYGON,
  ],
  [ChainId.POLYGON_MUMBAI]: [
    nativeOnChain(ChainId.POLYGON_MUMBAI),
    WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_MUMBAI] as Token,
    USDC_POLYGON_MUMBAI,
    WETH_POLYGON_MUMBAI,
  ],

  [ChainId.CELO]: [nativeOnChain(ChainId.CELO), CEUR_CELO, CUSD_CELO, PORTAL_ETH_CELO, PORTAL_USDC_CELO, WBTC_CELO],
  [ChainId.CELO_ALFAJORES]: [nativeOnChain(ChainId.CELO_ALFAJORES), CUSD_CELO_ALFAJORES, CEUR_CELO_ALFAJORES],

  [ChainId.BNB]: [nativeOnChain(ChainId.BNB),WBNB, DAI_BSC, USDC_BSC, USDT_BSC, BCH_BSC, DOGE_BSC, FLOKI_BSC, PEPE_BSC, SHIB_BSC, BONK_BSC, GOB_BSC],


  [ChainId.AVALANCHE]: [
    nativeOnChain(ChainId.AVALANCHE),
    DAI_AVALANCHE,
    USDC_AVALANCHE,
    USDT_AVALANCHE,
    WETH_AVALANCHE,
  ],
  [ChainId.SMARTBCH]: [
    nativeOnChain(ChainId.SMARTBCH),
     WRAPPED_NATIVE_CURRENCY[ChainId.SMARTBCH] as Token, 
     USDT_SBCH, BC_BCH, BB_USDC, BB_USDT, BB_ETH, BB_BCH, BB_BTC, GOB, BONK,SHIB,PEPE,DOGE,FLOKI,
     SPX_BCH,HERRY_BCH, MOG_BCH, Neiro_BCH,DEGEN_BCH
    ],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [ChainId.MAINNET]: [...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.MAINNET], DAI, USDC_MAINNET, USDT, WBTC],
  [ChainId.BNB]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.BNB],
    DAI_BSC,
    USDC_BSC,
    USDT_BSC,
    BTC_BSC,
    BUSD_BSC,
    ETH_BSC,
  ],
  [ChainId.AVALANCHE]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.AVALANCHE],
    DAI_AVALANCHE,
    USDC_AVALANCHE,
    USDT_AVALANCHE,
    WETH_AVALANCHE,
  ],
}
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin'),
    ],
    [USDC_MAINNET, USDT],
    [DAI, USDT],
  ],
}



export const SET_INTERFACE_FEE_FOR_PAIRS: FeePairs = {
  [ChainId.SMARTBCH]: [
    {
      tokenA: "0xbc2f884680c95a02cea099da2f524b366d9028ba", ///bcUSDT
      tokenB: "0xbbb3700F33fCb64437Dc28A7Beb6b21f5cC76FB9", ///bbUSDT
      fee: 0,
    },
    {
      tokenA: "0xbc2f884680c95a02cea099da2f524b366d9028ba", ///bcUSDT
      tokenB: "0xbb2A35cc3e3dDb679fe30A82051633bC822e4191", ///bbUSDC
      fee: 0,
    },
    {
      tokenA: "0xbb2A35cc3e3dDb679fe30A82051633bC822e4191", ///bbUSDC
      tokenB: "0xbbb3700F33fCb64437Dc28A7Beb6b21f5cC76FB9", ///bbUSDT
      fee: 0,
    },


    {
      tokenA: "0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04", ///WBCH
      tokenB: "0xbc9bd8dde6c5a8e1cbe293356e02f5984693b195", ///bcBCH
      fee: 0,
    },
    {
      tokenA: "ETH", ///WBCH
      tokenB: "0xbc9bd8dde6c5a8e1cbe293356e02f5984693b195", ///bcBCH
      fee: 0,
    },

    {
      tokenA: "0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04", ///WBCH
      tokenB: "0xbb7b43eb950C0fDBb645D7d05a27395Ed8D944fA", ///bbBCH
      fee: 0,
    },
    {
      tokenA: "ETH", ///WBCH
      tokenB: "0xbb7b43eb950C0fDBb645D7d05a27395Ed8D944fA", ///bbBCH
      fee: 0,
    }



  ],
  [ChainId.BNB]: [
    {
      tokenA: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
      tokenB: "0x55d398326f99059fF775485246999027B3197955", // USDT
      fee: 0,
    },
    {
      tokenA: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
      tokenB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
      fee: 0,
    },
    {
      tokenA: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
      tokenB: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", // DAI
      fee: 0,
    },
    {
      tokenA: "0x55d398326f99059fF775485246999027B3197955", // USDT
      tokenB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
      fee: 0,
    },
    {
      tokenA: "0x55d398326f99059fF775485246999027B3197955", // USDT
      tokenB: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", // DAI
      fee: 0,
    },
    {
      tokenA: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
      tokenB: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", // DAI
      fee: 0,
    },

    {
      tokenA: "BNB", // WBNB
      tokenB: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", // DAI
      fee: 0,
    },
    {
      tokenA: "BNB", // WBNB
      tokenB: "0x55d398326f99059fF775485246999027B3197955", // USDT
      fee: 0,
    },
    {
      tokenA: "BNB", // WBNB
      tokenB: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
      fee: 0,
    },

    // Adding Shib
    // {
    //   tokenA: "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D", // SHIB
    //   tokenB: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
    //   fee: 0,
    // },
    // {
    //   tokenA: "BNB", // WBNB
    //   tokenB: "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D", // SHIB
    //   fee: 0,
    // },
    // {
    //   tokenA: "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D", // SHIB
    //   tokenB: "0x55d398326f99059fF775485246999027B3197955", // USDT
    //   fee: 0,
    // },
    // Adding BONK
    // {
    //   tokenA: "0xA697e272a73744b343528C3Bc4702F2565b2F422", // BONK
    //   tokenB: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
    //   fee: 0,
    // },
    // {
    //   tokenA: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
    //   tokenB: "0xA697e272a73744b343528C3Bc4702F2565b2F422", // BONK
    //   fee: 0,
    // },
    // {
    //   tokenA: "0xA697e272a73744b343528C3Bc4702F2565b2F422", // BONK
    //   tokenB: "0x55d398326f99059fF775485246999027B3197955", // USDT
    //   fee: 0,
    // },

  ]

}