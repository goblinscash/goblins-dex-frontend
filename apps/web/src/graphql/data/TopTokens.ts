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
  TokensList
} from './__generated__/types-and-hooks'
import {
  isPricePoint,
  PollingInterval,
  PricePoint,
  supportedChainIdFromGQLChain,
  toHistoryDuration,
  unwrapToken,
  usePollQueryWhileMounted,
} from './util'

gql`
  query TopTokens100($duration: HistoryDuration!, $chain: Chain!) {
    tokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
  
      id
      name
   
      symbol
    }
  }
`

// We separately query sparkline data so that the large download time does not block Token Explore rendering
gql`
  query TopTokensSparkline($duration: HistoryDuration!, $chain: Chain!) {
    tokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
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

function useSortedTokens(tokens: TokensList['tokens']) {
  const sortMethod = useAtomValue(sortMethodAtom)
  const sortAscending = useAtomValue(sortAscendingAtom)

  return useMemo(() => {
    if (!tokens) return undefined
    let tokenArray = Array.from(tokens)


    return sortAscending ? tokenArray.reverse() : tokenArray
  }, [tokens, sortMethod, sortAscending])
}

function useFilteredTokens(tokens: TokensList['tokens']) {
  const filterString = useAtomValue(filterStringAtom)

  const lowercaseFilterString = useMemo(() => filterString.toLowerCase(), [filterString])

  return useMemo(() => {
    if (!tokens) return undefined
    let returnTokens = tokens
    if (lowercaseFilterString) {
      returnTokens = returnTokens?.filter((token) => {
        const nameIncludesFilterString = token?.name?.toLowerCase().includes(lowercaseFilterString)
        const symbolIncludesFilterString = token?.symbol?.toLowerCase().includes(lowercaseFilterString)
        return nameIncludesFilterString || symbolIncludesFilterString
      })
    }
    return returnTokens
  }, [tokens, lowercaseFilterString])
}

// Number of items to render in each fetch in infinite scroll.
export const PAGE_SIZE = 20
export type SparklineMap = { [key: string]: PricePoint[] | undefined }
export type TopToken = NonNullable<NonNullable<TopTokens100Query>['topTokens']>[number]

interface UseTopTokensReturnValue {
  tokens: any
  // tokenSortRank: Record<string, number>
  loadingTokens: boolean
  // sparklines: SparklineMap
  // error?: ApolloError
}

export function useTopTokens(chain: Chain): UseTopTokensReturnValue {
  // const chainId = supportedChainIdFromGQLChain(chain)
  // const duration = toHistoryDuration(useAtomValue(filterTimeAtom))

  // const { data: sparklineQuery } = usePollQueryWhileMounted(
  //   useTopTokensSparklineQuery({
  //     variables: { duration, chain },
  //   }),
  //   PollingInterval.Slow
  // )

  // const sparklines = useMemo(() => {
  //   const unwrappedTokens = chainId && sparklineQuery?.topTokens?.map((topToken) => unwrapToken(chainId, topToken))
  //   const map: SparklineMap = {}
  //   unwrappedTokens?.forEach(
  //     (current) => current?.address && (map[current.address] = current?.market?.priceHistory?.filter(isPricePoint))
  //   )
  //   return map
  // }, [chainId, sparklineQuery?.topTokens])

  // const {
  //   data,
  //   loading: loadingTokens,
  //   error,
  // } = usePollQueryWhileMounted(
  //   useTopTokens100Query({
  //     variables: { duration, chain },
  //   }),
  //   PollingInterval.Fast
  // )

  // const unwrappedTokens = useMemo(
  //   () => chainId && data?.topTokens?.map((token) => unwrapToken(chainId, token)),
  //   [chainId, data]
  // )
  // const sortedTokens = useSortedTokens(unwrappedTokens)
  // const tokenSortRank = useMemo(
  //   () =>
  //     sortedTokens?.reduce((acc, cur, i) => {
  //       if (!cur.address) return acc
  //       return {
  //         ...acc,
  //         [cur.address]: i + 1,
  //       }
  //     }, {}) ?? {},
  //   [sortedTokens]
  // )
  // const filteredTokens = useFilteredTokens(sortedTokens)
  return useMemo(
    () => ({ tokens: [],  loadingTokens: false,  }),
    []
  )
}
