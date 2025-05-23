import { Trans } from '@lingui/macro'
import { createColumnHelper } from '@tanstack/react-table'
import { ChainId } from '@uniswap/sdk-core'
import { NATIVE_CHAIN_ID } from 'constants/tokens'
import Row from 'components/Row'
import { Table } from 'components/Table'
import { Cell } from 'components/Table/Cell'
import { MAX_WIDTH_MEDIA_BREAKPOINT } from 'components/Tokens/constants'
import { SparklineMap, TopToken, useTopTokens, TokenList } from 'graphql/data/TopTokens'
import {
  chainIdToBackendName,
  getTokenDetailsURL,
  supportedChainIdFromGQLChain,
  validateUrlChainParam,
} from 'graphql/data/util'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { EllipsisStyle, ThemedText } from 'theme/components'
import { NumberType, useFormatter } from 'utils/formatNumbers'

import { DeltaArrow, DeltaText } from '../TokenDetails/Delta'
import QueryTokenLogo from 'components/Logo/QueryTokenLogo'
import { useWeb3React } from '@web3-react/core'
import { useWallet } from 'hooks/useWallet'

const TableWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH_MEDIA_BREAKPOINT};
`

const TokenName = styled(ThemedText.BodyPrimary)`
  ${EllipsisStyle}
`

const SparklineContainer = styled.div`
  width: 124px;
  height: 40px;
`

interface TokenDayData {
  priceUSD: number;
  open: number;
  high: number;
}
interface TokenTableValues {
  index: number
  decimals: number
  id: string
  name: string
  price: any
  poolCount: number
  symbol: string
  totalSupply: any | undefined
  tokenDescription: ReactElement
  volumeUSD: number
  totalValueLockedUSD: number
  tokenDayData: TokenDayData
}

function TokenDescription({ token }: { token: TokenList }) {
  return (
    <Row gap="sm">
      {/* <QueryTokenLogo token={token} size="28px" /> */}
      <TokenName>{token.name}</TokenName>
      <ThemedText.BodySecondary>{token.symbol}</ThemedText.BodySecondary>
    </Row>
  )
}

// for removing network filter
export function TopTokensTable() {
  const ChinInfo: any = {
    56: "BNB",
    10000: "SMARTBCH"
  }
  // const chainName = validateUrlChainParam(useParams<{ chainName?: string }>().chainName)
  // const chainId = supportedChainIdFromGQLChain(chainName)
  const wallet = useWallet()
  const [chainId, setChainId] = useState(10000);
  const [chainName, setChainName] = useState(chainId && ChinInfo[chainId] as String);


  // console.log(chainId, "chainId+", chainName)

  useEffect(() => {
    if (ChinInfo[parseInt(wallet.chainId)]) {
      setChainId(wallet.chainId)
      setChainName(ChinInfo[wallet.chainId])
    }
  }, [wallet?.chainId])

  //@ts-ignore
  const { tokens, tokenSortRank, loadingTokens, error } = useTopTokens(chainName)


  if (error) {
    return (
      <TableWrapper>
        <ThemedText.BodyPrimary>
          <Trans>Error loading Top Tokens</Trans>
        </ThemedText.BodyPrimary>
      </TableWrapper>
    )
  }

  return (
    <TableWrapper data-testid="top-tokens-explore-table">



      <TokenTable
        tokens={tokens}
        tokenSortRank={tokenSortRank}
        // sparklines={sparklines}
        loading={loadingTokens}
        //@ts-ignore
        chainId={chainId}
      />
    </TableWrapper>
  )
}

function TokenTable({
  tokens,
  tokenSortRank,
  // sparklines,
  loading,
  loadMore,
  chainId,
}: {
  tokens?: readonly TokenList[]
  tokenSortRank: Record<string, number>
  // sparklines: SparklineMap
  loading: boolean
  loadMore?: ({ onComplete }: { onComplete?: () => void }) => void
  chainId: ChainId
}) {
  const { formatFiatPrice, formatNumber, formatDelta } = useFormatter()
  const tokenTableValues: any[] | undefined = useMemo(
    () =>
      tokens?.map((token) => {

        const greatestDateObject = token.tokenDayData && token.tokenDayData.length ? token.tokenDayData.reduce((max: any, obj: any) => obj.date > max.date ? obj : max, token.tokenDayData[0]) : null;

        const tokenSortIndex = tokenSortRank[token?.id ?? NATIVE_CHAIN_ID]

        return {
          index: tokenSortIndex,
          tokenDescription: <TokenDescription token={token} />,
          totalSupply: token.totalSupply,
          price: greatestDateObject ? greatestDateObject.priceUSD : 0,
          // percentChange1hr: (
          //   <>
          //     <DeltaArrow delta={delta1hr} />
          //     <DeltaText delta={delta1hr}>{formatDelta(delta1hr)}</DeltaText>
          //   </>
          // ),
          // percentChange1d: (
          //   <>
          //     <DeltaArrow delta={delta1d} />
          //     <DeltaText delta={delta1d}>{formatDelta(delta1d)}</DeltaText>
          //   </>
          // ),
          totalValueLockedUSD: token?.totalValueLockedUSD ?? 0,
          volumeUSD: token.volumeUSD ?? 0,
          // sparkline: (
          //   <SparklineContainer>
          //     <ParentSize>
          //       {({ width, height }) =>
          //         sparklines && (
          //           <SparklineChart
          //             width={width}
          //             height={height}
          //             tokenData={token}
          //             pricePercentChange={token.market?.pricePercentChange?.value}
          //             sparklineMap={sparklines}
          //           />
          //         )
          //       }
          //     </ParentSize>
          //   </SparklineContainer>
          // ),
          link: getTokenDetailsURL({
            // address: token.address,
            address: token.id,
            chain: chainIdToBackendName(chainId),
            isInfoExplorePageEnabled: true,
          }),
        }
      }) ?? [],
    [chainId, formatDelta, tokenSortRank, tokens]
  )

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<TokenTableValues>()
    return [
      columnHelper.accessor((row) => row.index, {
        id: 'index',
        header: () => (
          <Cell justifyContent="center" minWidth={44}>
            <ThemedText.BodySecondary>#</ThemedText.BodySecondary>
          </Cell>
        ),
        cell: (index) => (
          <Cell justifyContent="center" loading={loading} minWidth={44}>
            <ThemedText.BodySecondary>{index.getValue?.()}</ThemedText.BodySecondary>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row.tokenDescription, {
        id: 'tokenDescription',
        header: () => (
          <Cell justifyContent="flex-start" width={240} grow>
            <ThemedText.BodySecondary>
              <Trans>Token name</Trans>
            </ThemedText.BodySecondary>
          </Cell>
        ),
        cell: (tokenDescription) => (
          <Cell justifyContent="flex-start" width={240} loading={loading} grow>
            {tokenDescription.getValue?.()}
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row.price, {
        id: 'price',
        header: () => (
          <Cell minWidth={133} grow>
            <ThemedText.BodySecondary>
              <Trans>Price</Trans>
            </ThemedText.BodySecondary>
          </Cell>
        ),
        cell: (price) => (
          <Cell loading={loading} minWidth={133} grow>
            <ThemedText.BodySecondary>
              {/* A simple 0 price indicates the price is not currently available from the api */}
              {price.getValue?.() === 0
                ? '-'
                : formatNumber({ input: price.getValue?.(), type: NumberType.FiatTokenStats })}
            </ThemedText.BodySecondary>
          </Cell>
        ),
      }),
      // columnHelper.accessor((row) => row.percentChange1hr, {
      //   id: 'percentChange1hr',
      //   header: () => (
      //     <Cell minWidth={133} grow>
      //       <ThemedText.BodySecondary>
      //         <Trans>1 hour</Trans>
      //       </ThemedText.BodySecondary>
      //     </Cell>
      //   ),
      //   cell: (percentChange1hr) => (
      //     <Cell loading={loading} minWidth={133} grow>
      //       {percentChange1hr.getValue?.()}
      //     </Cell>
      //   ),
      // }),
      // columnHelper.accessor((row) => row.percentChange1d, {
      //   id: 'percentChange1d',
      //   header: () => (
      //     <Cell minWidth={133} grow>
      //       <ThemedText.BodySecondary>
      //         <Trans>1 day</Trans>
      //       </ThemedText.BodySecondary>
      //     </Cell>
      //   ),
      //   cell: (percentChange1d) => (
      //     <Cell loading={loading} minWidth={133} grow>
      //       {percentChange1d.getValue?.()}
      //     </Cell>
      //   ),
      // }),
      columnHelper.accessor((row) => row.totalValueLockedUSD, {
        id: 'totalValueLockedUSD',
        header: () => (
          <Cell minWidth={133} grow>
            <ThemedText.BodySecondary>
              <Trans>TVL</Trans>
            </ThemedText.BodySecondary>
          </Cell>
        ),
        cell: (totalValueLockedUSD) => (
          <Cell loading={loading} minWidth={133} grow>
            <ThemedText.BodySecondary>
              {formatNumber({ input: totalValueLockedUSD.getValue?.(), type: NumberType.FiatTokenStats })}
            </ThemedText.BodySecondary>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row.volumeUSD, {
        id: 'volumeUSD',
        header: () => (
          <Cell minWidth={133} grow>
            <ThemedText.BodySecondary>
              <Trans>Volume</Trans>
            </ThemedText.BodySecondary>
          </Cell>
        ),
        cell: (volumeUSD) => (
          <Cell minWidth={133} loading={loading} grow>
            <ThemedText.BodySecondary>
              {/* {volumeUSD.getValue?.()} */}
              {formatNumber({ input: volumeUSD.getValue?.(), type: NumberType.FiatTokenStats })}
            </ThemedText.BodySecondary>
          </Cell>
        ),
      }),
      // columnHelper.accessor((row) => row.sparkline, {
      //   id: 'sparkline',
      //   header: () => <Cell minWidth={172} />,
      //   cell: (sparkline) => (
      //     <Cell minWidth={172} loading={loading}>
      //       {sparkline.getValue?.()}
      //     </Cell>
      //   ),
      // }),
    ]
  }, [formatFiatPrice, formatNumber, loading])

  return <Table columns={columns} data={tokenTableValues} loading={loading} loadMore={loadMore} />
}
