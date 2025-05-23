import { Trans } from '@lingui/macro'
import { ChainId } from '@uniswap/sdk-core'
import { MouseoverTooltip } from 'components/Tooltip'
import { getChainInfo } from 'constants/chainInfo'
import { useInfoTDPEnabled } from 'featureFlags/flags/infoTDP'
import { TokenQueryData } from 'graphql/data/Token'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { ExternalLink, ThemedText } from 'theme/components'
import { textFadeIn } from 'theme/styles'
import { NumberType, useFormatter } from 'utils/formatNumbers'

import { UNSUPPORTED_METADATA_CHAINS } from '../constants'
import { TokenSortMethod } from '../state'
import { HEADER_DESCRIPTIONS } from '../TokenTable/TokenRow'

export const StatWrapper = styled.div<{ isInfoTDPEnabled?: boolean }>`
  color: ${({ theme }) => theme.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: ${({ isInfoTDPEnabled }) => (isInfoTDPEnabled ? '0px' : '24px')};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    min-width: 168px;
  }
`
const TokenStatsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const StatPair = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const Header = styled(ThemedText.MediumHeader)<{ isInfoTDPEnabled?: boolean }>`
  font-size: 28px !important;
  padding-top: ${({ isInfoTDPEnabled }) => (isInfoTDPEnabled ? '40' : '24')}px;
`

const StatPrice = styled.div`
  margin-top: 4px;
  font-size: 28px;
  color: ${({ theme }) => theme.neutral1};
`
const NoData = styled.div<{ isInfoTDPEnabled?: boolean }>`
  color: ${({ theme }) => theme.neutral3};
  ${({ isInfoTDPEnabled }) => isInfoTDPEnabled && 'padding-top: 40px;'}
`
export const StatsWrapper = styled.div`
  gap: 16px;
  ${textFadeIn}
`

type NumericStat = number | undefined | null

function Stat({
  dataCy,
  value,
  title,
  description,
}: {
  dataCy: string
  value: NumericStat
  title: ReactNode
  description?: ReactNode
}) {
  const { formatNumber } = useFormatter()
  const isInfoTDPEnabled = useInfoTDPEnabled()

  return (
    <StatWrapper data-cy={`${dataCy}`} isInfoTDPEnabled={isInfoTDPEnabled}>
      <MouseoverTooltip text={description}>{title}</MouseoverTooltip>
      <StatPrice>
        {formatNumber({
          input: value,
          type: NumberType.FiatTokenStats,
        })}
      </StatPrice>
    </StatWrapper>
  )
}

type StatsSectionProps = {
  chainId: ChainId
  address: string
  tokenQueryData: any
}
export default function StatsSection(props: StatsSectionProps) {

  console.log(props, "<====props")
  const { chainId, address, tokenQueryData } = props
  const { label, infoLink } = getChainInfo(chainId)
  const isInfoTDPEnabled = useInfoTDPEnabled()

  console.log(infoLink, "++++++++++++++++++++++")

  const tokenMarketInfo = tokenQueryData?.market
  const tokenProjectMarketInfo = tokenQueryData?.project?.markets?.[0] // aggregated market price from CoinGecko

  const FDV = tokenProjectMarketInfo?.fullyDilutedValuation?.value
  const marketCap = tokenProjectMarketInfo?.marketCap?.value
  const TVL = tokenQueryData?.totalValueLockedUSD
  const volume24H = tokenQueryData?.volumeUSD
  const priceHigh52W = tokenMarketInfo?.priceHigh52W?.value
  const priceLow52W = tokenMarketInfo?.priceLow52W?.value

  const hasStats = isInfoTDPEnabled
    ? TVL || FDV || marketCap || volume24H
    : TVL || volume24H || priceLow52W || priceHigh52W

  if (hasStats) {
    return (
      <StatsWrapper data-testid="token-details-stats">
        <Header isInfoTDPEnabled={isInfoTDPEnabled}>
          <Trans>Stats</Trans>
        </Header>
        <TokenStatsSection>
          {isInfoTDPEnabled ? (
            <>
              <StatPair>
                <Stat
                  dataCy="tvl"
                  value={TVL}
                  description={HEADER_DESCRIPTIONS[TokenSortMethod.TOTAL_VALUE_LOCKED]}
                  title={<Trans>TVL</Trans>}
                />
                {/* <Stat
                  dataCy="market-cap"
                  value={marketCap}
                  description={
                    <Trans>
                      Market capitalization is the total market value of an asset&apos;s circulating supply.
                    </Trans>
                  }
                  title={<Trans>Market cap</Trans>}
                /> */}
              </StatPair>
              <StatPair>
                {/* <Stat
                  dataCy="fdv"
                  value={FDV}
                  description={HEADER_DESCRIPTIONS[TokenSortMethod.FULLY_DILUTED_VALUATION]}
                  title={<Trans>FDV</Trans>}
                /> */}
                <Stat
                  dataCy="volume-24h"
                  value={volume24H}
                  description={
                    <Trans>
                      volume is the amount of the asset that has been traded on Uniswap v3 during the past 24
                      hours.
                    </Trans>
                  }
                  title={<Trans>volume</Trans>}
                />
              </StatPair>
            </>
          ) : (
            <>
              <StatPair>
                <Stat
                  dataCy="tvl"
                  value={TVL}
                  description={HEADER_DESCRIPTIONS[TokenSortMethod.TOTAL_VALUE_LOCKED]}
                  title={<Trans>TVL</Trans>}
                />
                <Stat
                  dataCy="volume-24h"
                  value={volume24H}
                  description={
                    <Trans>
                      24H volume is the amount of the asset that has been traded on Uniswap v3 during the past 24 hours.
                    </Trans>
                  }
                  title={<Trans>24H volume</Trans>}
                />
              </StatPair>
              <StatPair>
                <Stat dataCy="52w-low" value={priceLow52W} title={<Trans>52W low</Trans>} />
                <Stat dataCy="52w-high" value={priceHigh52W} title={<Trans>52W high</Trans>} />
              </StatPair>
            </>
          )}
        </TokenStatsSection>
      </StatsWrapper>
    )
  } else {
    return UNSUPPORTED_METADATA_CHAINS.includes(chainId) ? (
      <>
        {/* <Header isInfoTDPEnabled={isInfoTDPEnabled}>
          <Trans>Stats</Trans>
        </Header> */}
        <ThemedText.BodySecondary paddingTop="12px">
          {/* <Trans>
            Token stats and charts for {label} are available on{' '}
            <ExternalLink color="currentColor" href={`${infoLink}tokens/${address}`}>
              goblins.cash
            </ExternalLink>
          </Trans> */}
        </ThemedText.BodySecondary>
      </>
    ) : (
      <NoData isInfoTDPEnabled={isInfoTDPEnabled}>No stats available</NoData>
    )
  }
}
