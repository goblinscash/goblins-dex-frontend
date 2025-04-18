import { ApolloError } from '@apollo/client'
import {
  filterStringAtom,
  filterTimeAtom,
  sortAscendingAtom,
  sortMethodAtom,
  TokenSortMethod,
} from 'components/Tokens/state'
import gql from 'graphql-tag'
import { useAtomValue } from 'jotai/utils'
import { useMemo } from 'react'

import {
  Chain,
  TopTokens100Query,
  useTopTokens100Query,
  useTopTokensSparklineQuery,
  
} from './__generated__/types-and-hooks'


import {

  useTokensListQuery,
  TokensList
} from './types-and-hooks'
import {
  isPricePoint,
  PollingInterval,
  PricePoint,
  supportedChainIdFromGQLChain,
  toHistoryDuration,
  unwrapToken,
  usePollQueryWhileMounted,
} from './util'
import { chainToApolloClient } from 'graphql/thegraph/apollo'
import { ChainId } from '@uniswap/sdk-core'

gql`
  query TopTokens100($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      name
      chain
      address
      symbol
      standard
      market(currency: USD) {
        id
        totalValueLocked {
          id
          value
          currency
        }
        price {
          id
          value
          currency
        }
        pricePercentChange(duration: $duration) {
          id
          currency
          value
        }
        pricePercentChange1Hour: pricePercentChange(duration: HOUR) {
          id
          currency
          value
        }
        pricePercentChange1Day: pricePercentChange(duration: DAY) {
          id
          currency
          value
        }
        volume(duration: $duration) {
          id
          value
          currency
        }
      }
      project {
        id
        logoUrl
        markets(currencies: [USD]) {
          fullyDilutedValuation {
            id
            value
            currency
          }
        }
      }
    }
  }
`

// We separately query sparkline data so that the large download time does not block Token Explore rendering
gql`
  query TopTokensSparkline($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      address
      chain
      market(currency: USD) {
        id
        priceHistory(duration: $duration) {
          id
          timestamp
          value
        }
      }
    }
  }
`


interface TokenInterface {
  readonly __typename?: "Token";
  readonly id: string;
  readonly name?: string;
  readonly symbol?: string;
}

interface TokenWithAddress extends TokenInterface {
  readonly address: string;
}

function isTokenWithAddress(token: TokenInterface): token is TokenWithAddress {
  return (token as TokenWithAddress).address !== undefined;
}

function useSortedTokens(tokens: TokensList['tokens']) {
  const sortMethod = useAtomValue(sortMethodAtom)
  const sortAscending = useAtomValue(sortAscendingAtom)

  return useMemo(() => {
    if (!tokens) return undefined
    let tokenArray = Array.from(tokens)
    // switch (sortMethod) {
    //   case TokenSortMethod.PRICE:
    //     tokenArray = tokenArray.sort((a, b) => (b?.market?.price?.value ?? 0) - (a?.market?.price?.value ?? 0))
    //     break
    //   case TokenSortMethod.PERCENT_CHANGE:
    //     tokenArray = tokenArray.sort(
    //       (a, b) => (b?.market?.pricePercentChange?.value ?? 0) - (a?.market?.pricePercentChange?.value ?? 0)
    //     )
    //     break
    //   case TokenSortMethod.TOTAL_VALUE_LOCKED:
    //     tokenArray = tokenArray.sort(
    //       (a, b) => (b?.market?.totalValueLocked?.value ?? 0) - (a?.market?.totalValueLocked?.value ?? 0)
    //     )
    //     break
    //   case TokenSortMethod.VOLUME:
    //     tokenArray = tokenArray.sort((a, b) => (b?.market?.volume?.value ?? 0) - (a?.market?.volume?.value ?? 0))
    //     break
    // }

    return sortAscending ? tokenArray.reverse() : tokenArray
  }, [tokens, sortMethod, sortAscending])
}

function useFilteredTokens(tokens: TokensList['tokens']) {
  const filterString = useAtomValue(filterStringAtom)

  const lowercaseFilterString = useMemo(() => filterString.toLowerCase(), [filterString])

  return useMemo(() => {
    if (!tokens) return undefined
    let returnTokens = tokens
    // if (lowercaseFilterString) {
    //   returnTokens = returnTokens?.filter((token) => {
    //     const addressIncludesFilterString = token?.address?.toLowerCase().includes(lowercaseFilterString)
    //     const nameIncludesFilterString = token?.name?.toLowerCase().includes(lowercaseFilterString)
    //     const symbolIncludesFilterString = token?.symbol?.toLowerCase().includes(lowercaseFilterString)
    //     return nameIncludesFilterString || symbolIncludesFilterString || addressIncludesFilterString
    //   })
    // }
    return returnTokens
  }, [tokens, lowercaseFilterString])
}

// Number of items to render in each fetch in infinite scroll.
export const PAGE_SIZE = 20
export type SparklineMap = { [key: string]: PricePoint[] | undefined }
export type TokenList = NonNullable<NonNullable<TokensList>['tokens']>[number]
export type TopToken = NonNullable<NonNullable<TopTokens100Query>['topTokens']>[number]

interface UseTopTokensReturnValue {
  tokens?: readonly TokenList[]
  tokenSortRank: Record<string, number>
  loadingTokens: boolean
  // sparklines: SparklineMap
  error?: ApolloError
}

export function useTopTokens(chain: Chain): UseTopTokensReturnValue {
  const chainId = supportedChainIdFromGQLChain(chain)
  const duration = toHistoryDuration(useAtomValue(filterTimeAtom))
  const apolloClient = chainToApolloClient[chainId || ChainId.MAINNET]

  // const { data: sparklineQuery } = usePollQueryWhileMounted(
  //   useTopTokensSparklineQuery({
  //     variables: { duration, chain },
  //   }),
  //   PollingInterval.Slow
  // )

  // console.log(sparklineQuery, "<=====sparklineQuery")

  // const sparklines = useMemo(() => {
  //   const unwrappedTokens = chainId && sparklineQuery?.topTokens?.map((topToken) => unwrapToken(chainId, topToken))
  //   const map: SparklineMap = {}
  //   unwrappedTokens?.forEach(
  //     (current) => current?.address && (map[current.address] = current?.market?.priceHistory?.filter(isPricePoint))
  //   )
  //   return map
  // }, [chainId, sparklineQuery?.topTokens])

  const {
    data,
    loading: loadingTokens,
    error,
  } = usePollQueryWhileMounted(
    useTokensListQuery({
      variables: { duration, chain },
      client: apolloClient,
    }),
    PollingInterval.Fast
  )




  const unwrappedTokens = useMemo(
    () => chainId && data?.tokens?.map((token) => unwrapToken(chainId, token)),
    [chainId, data]
  );


  const sortedTokens = useSortedTokens(unwrappedTokens)
 

  const tokenSortRank = useMemo(
    () =>
      sortedTokens?.reduce((acc, cur, i) => {
        // if (!isTokenWithAddress(cur)) return acc;
        return {
          ...acc,
          [cur.id]: i + 1,
        };
      }, {} as { [key: string]: number }) ?? {},
    [sortedTokens]
  );
  const filteredTokens = useFilteredTokens(sortedTokens)
  return useMemo(
    () => ({ tokens: filteredTokens, tokenSortRank, loadingTokens, error }),
    [filteredTokens, tokenSortRank, loadingTokens, error]
  )
}