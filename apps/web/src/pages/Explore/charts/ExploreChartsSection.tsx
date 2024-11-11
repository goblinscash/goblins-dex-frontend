import { Trans } from '@lingui/macro'
import { ChainId } from '@uniswap/sdk-core'
import { ChartHeader } from 'components/Charts/ChartHeader'
import { Chart } from 'components/Charts/ChartModel'
import { StackedLineData, TVLChartModel } from 'components/Charts/StackedLineChart'
import {
  getCumulativeVolume,
  getVolumeProtocolInfo,
  StackedVolumeChartModel,
} from 'components/Charts/StackedVolumeChart'
import { StackedBarsData } from 'components/Charts/StackedVolumeChart/renderer'
import { getCumulativeSum } from 'components/Charts/StackedVolumeChart/stacked-bar-series'
import TimePeriodSelector from 'components/Charts/TimeSelector'
import { getTimePeriodDisplay } from 'components/Charts/VolumeChart'
import Column from 'components/Column'
import { RowBetween } from 'components/Row'
import { MAX_WIDTH_MEDIA_BREAKPOINT } from 'components/Tokens/constants'
import { PriceSource } from 'graphql/data/__generated__/types-and-hooks'
import { useChartQuery } from 'graphql/data/types-and-hooks'
import { getProtocolColor, supportedChainIdFromGQLChain, TimePeriod, validateUrlChainParam } from 'graphql/data/util'
import { chainToApolloClient } from 'graphql/thegraph/apollo'
import { useScreenSize } from 'hooks/useScreenSize'
import { HARDCODED_TVL_DATA, HARDCODED_VOLUME_DATA } from 'pages/Explore/charts/mockData'
import { ReactNode, useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { ThemedText } from 'theme/components'
import { NumberType, useFormatter } from 'utils/formatNumbers'
import { useAppSelector } from 'state/hooks'
import * as request from "helpers/apiRequests";
import { priceGraphQl } from 'helpers/constants'
import { ButtonPrimary } from 'components/Button'

import "assets/styles/globalCustom.css"

const EXPLORE_CHART_HEIGHT_PX = 368
const EXPLORE_PRICE_SOURCES = [PriceSource.SubgraphV3]

const TIME_SELECTOR_OPTIONS = [
  { time: TimePeriod.DAY, display: 'D' },
  { time: TimePeriod.WEEK, display: 'W' },
  { time: TimePeriod.MONTH, display: 'M' },
]

const StyledTimePeriodSelector = styled(TimePeriodSelector)`
  & > button {
    padding: 4px 8px;
    margin: 4px 0px;
    font-size: 14px;
  }
`
const ChartsContainer = styled(RowBetween)`
  max-width: ${MAX_WIDTH_MEDIA_BREAKPOINT};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 56px;
`

const TabNav = styled(RowBetween)`
  width: 100%;
  display: flex;
  gap: 15px;
  
`
const ResponsiveButtonPrimary = styled(ButtonPrimary)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`
// a 6% gap is achieved using two 47% width containers, as a parent gap causes an autosizing error with side-by-side lightweight-charts
const SectionContainer = styled(Column)`
  position: relative;
  width: 47%;
  gap: 4px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    background-color: ${({ theme }) => theme.surface2};
    border-radius: 20px;
    height: 120px;
    padding: 20px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xs}px`}) {
    height: 112px;
    padding: 16px;
  }
`
const SectionTitle = styled(ThemedText.SubHeader)`
  color: ${({ theme }) => theme.neutral2};
  white-space: nowrap;
`
const StyledChart = styled(Chart)`
  height: ${EXPLORE_CHART_HEIGHT_PX}px;
` /* cast preserves generic Chart props that the `styled` return type looses: */ as typeof Chart

function VolumeChartSection({ data }: { data: StackedBarsData[] }) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>(TimePeriod.WEEK)

  const mockDataForTimePeriod = useMemo(() => {
    // note: timePeriod on the Explore Page represents the GRANULARITY, not the timespan of data shown.
    // i.e. timePeriod == D shows 1month data, timePeriod == W shows 1year data, timePeriod == M shows alltime data
    let numDataPoints = 0
    switch (timePeriod) {
      case TimePeriod.DAY:
        numDataPoints = 30
        break
      case TimePeriod.WEEK:
        numDataPoints = 7
        break
      case TimePeriod.MONTH:
        numDataPoints = 1000
        break
    }

    return data.slice(-numDataPoints)
  }, [timePeriod, data])

  const theme = useTheme()

  const params = useMemo<{ data: StackedBarsData[]; colors: [string, string] }>(
    () => ({ data: mockDataForTimePeriod, colors: [theme.accent1, theme.accent3] }),
    [mockDataForTimePeriod, theme]


  )

  const cumulativeVolume = useMemo(() => getCumulativeVolume(mockDataForTimePeriod), [mockDataForTimePeriod])

  const isSmallScreen = !useScreenSize()['sm']
  if (isSmallScreen) {
    return (
      <MinimalStatDisplay
        title={<Trans>Goblins volume</Trans>}
        value={Number(Number(cumulativeVolume).toFixed(2))}
        time={<Trans>Past month</Trans>}
      />
    )
  }

  return (
    <SectionContainer>
      <RowBetween>
        <SectionTitle>
          <Trans>Goblins volume</Trans>
        </SectionTitle>
        <div style={{ position: 'absolute', right: 0 }}>
          <StyledTimePeriodSelector
            options={TIME_SELECTOR_OPTIONS}
            timePeriod={timePeriod}
            onChangeTimePeriod={setTimePeriod}
          />
        </div>
      </RowBetween>
      <StyledChart Model={StackedVolumeChartModel} params={params}>
        {(crosshairData) => (
          <ChartHeader
            value={crosshairData ? getCumulativeSum(crosshairData) : getCumulativeVolume(mockDataForTimePeriod)}
            time={crosshairData?.time}
            timePlaceholder={getTimePeriodDisplay(timePeriod)}
            protocolData={getVolumeProtocolInfo(crosshairData, EXPLORE_PRICE_SOURCES)}
          />
        )}
      </StyledChart>
    </SectionContainer>
  )
}

function TVLChartSection({ data, totalTvl, title }: { data: StackedLineData[], totalTvl: any, title:string }) {
  const theme = useTheme()
  const params = useMemo(
    () => ({
      data,
      colors: EXPLORE_PRICE_SOURCES?.map((source) => getProtocolColor(source, theme)) ?? [theme.accent1],
    }),
    [data, theme]
  )

  const lastEntry = data[data.length - 1]
  const isSmallScreen = !useScreenSize()['sm']
  if (isSmallScreen) {
    const currentTVL = lastEntry?.values.reduce((acc, curr) => acc + curr, 0)
    return <MinimalStatDisplay title={<>Goblins TVL</>} value={currentTVL} time={<Trans>All time</Trans>} />
  }

  return (
    <SectionContainer>

      {totalTvl ?
        <MinimalStatDisplay title={<>Goblins TVL</>} value={totalTvl} time={<Trans>All time</Trans>} />:""}
      <SectionTitle>
        {title}
      </SectionTitle>
      <StyledChart Model={TVLChartModel} params={params}>
        {(crosshairData) => (
          <ChartHeader
            value={(crosshairData ?? lastEntry)?.values.reduce((v, sum) => (sum += v), 0)}
            time={crosshairData?.time}
            protocolData={EXPLORE_PRICE_SOURCES?.map((source, index) => ({
              protocol: source,
              value: crosshairData?.values[index],
            }))}
          />
        )}
      </StyledChart>
    </SectionContainer>
  )
}

function MinimalStatDisplay({ title, value, time }: { title: ReactNode; value: number; time?: ReactNode }) {
  const { formatFiatPrice } = useFormatter()

  return (
    <SectionContainer>
      <SectionTitle color="neutral2">{title}</SectionTitle>
      <ThemedText.HeadlineSmall fontSize="35px" lineHeight="40px">
        {formatFiatPrice({ price: value, type: NumberType.FiatTokenStatChartHeader })}
      </ThemedText.HeadlineSmall>
      <ThemedText.Caption color="neutral2">{time}</ThemedText.Caption>
    </SectionContainer>
  )
}

export function ExploreChartsSection() {
  const [tab, setTab] = useState(1)
  const [usdPrice, setUsdPrice] = useState<any>(0)
  const { transactions } = useAppSelector((state) => state.Incentive)
  // const chainName = validateUrlChainParam(useParams<{ chainName?: string }>().chainName)
  // const chainId = supportedChainIdFromGQLChain(chainName)

  const [chainId, setChainId] = useState<number>(10000);
  const [chainName, setChainName] = useState<string>("SMARTBCH");


const ChainInfo: Record<number, string> = {
  56: "BNB",
  10000: "SMARTBCH",
};

  const apolloClient = chainToApolloClient[chainId || ChainId.MAINNET]
  const { loading, error, data } = useChartQuery({
    client: apolloClient,
    fetchPolicy: 'no-cache',
    variables: { address: "" },
  })

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

      setUsdPrice(Number(priceData?.pool?.token1Price || 0).toFixed(2))


    } catch (error) { }
  };

  useEffect(() => {
    getUsdPrice()
  }, [])
// adding for one switcher-----------------
  useEffect(() => {
    if (window?.ethereum) {
      // Listen for chain changes
      // @ts-ignore
      window.ethereum.on('chainChanged', (newChainId: string) => {
        const parsedChainId = parseInt(newChainId, 16);
        setChainId(parsedChainId);
        setChainName(ChainInfo[parsedChainId] || "Unknown Chain");
      });
  
      // Set initial chainId and chainName
      window.ethereum
      // @ts-ignore
        .request({ method: 'eth_chainId' })
        .then((initialChainId: string) => {
          const parsedChainId = parseInt(initialChainId, 16);
          setChainId(parsedChainId);
          setChainName(ChainInfo[parsedChainId] || "Unknown Chain");
        })
        .catch(console.error);
    }
  
    return () => {
      // @ts-ignore
      window?.ethereum?.removeListener('chainChanged', setChainId);
    };
  }, []);
  
  let makeDataForVolume = useMemo(() => (data?.uniswapDayDatas && Array.isArray(data?.uniswapDayDatas) && data?.uniswapDayDatas.length > 0
    ? data.uniswapDayDatas.map((data: any) => ({
      time: data.date,
      values: { v3: Number(data.volumeUSD) },
    }))
    : []) as unknown as StackedBarsData[], [data])

  let makeDataForTVL = useMemo(() => {
    // console.log(transactions, "<====transactions")
    if (!usdPrice || !transactions.stakeTransaction || !transactions.unStakeTransaction) return [];
    const allTransactions = [
      ...transactions.stakeTransaction.map((tx: any) => ({ ...tx, type: 'stake' })),
      ...transactions.unStakeTransaction.map((tx: any) => ({ ...tx, type: 'unstake' })),
    ];

    // console.log(allTransactions, "<===allTransactions")
    // Sort transactions by timestamp
    allTransactions.sort((a, b) => a.timestamp - b.timestamp);
    let previousAmount = 0;
    return allTransactions.map((data) => {
      let amount = parseFloat(data.amount) / 10 ** 9;

      // Update the cumulative amount
      if (data.type === 'stake') {
        previousAmount += amount;
      } else if (data.type === 'unstake') {
        previousAmount -= amount;
      }

      let usdAmount = previousAmount * usdPrice;

      return {
        time: data.timestamp,
        values: [Number(usdAmount)],
      };
    });
  }, [transactions, usdPrice]);

  let makeDataForPoolTVL = useMemo(() => (data?.uniswapDayDatas && Array.isArray(data?.uniswapDayDatas) && data?.uniswapDayDatas.length > 0
    ? data.uniswapDayDatas.map((data: any) => ({
      time: data.date,
      values: [Number(data.tvlUSD)],
    }))
    : []) as unknown as StackedLineData[], [data]);

  const getMaxTimestampObject = (arr: any) => {
    return arr.reduce((max: any, obj: any) => (obj.time > max.time ? obj : max));
  };

  let getTotalTVL = useMemo(() => {
    if (makeDataForPoolTVL && Array.isArray(makeDataForPoolTVL) && makeDataForPoolTVL.length > 0 && makeDataForTVL && Array.isArray(makeDataForTVL) && makeDataForTVL.length > 0) {

      const highestFromArray1 = getMaxTimestampObject(makeDataForPoolTVL);
      const highestFromArray2 = getMaxTimestampObject(makeDataForTVL);

      return Number(highestFromArray1.values[0]) + Number(highestFromArray2.values[0]);
    }

  }, [makeDataForPoolTVL, makeDataForTVL])

  const handleTab = (key: number) => {
    setTab(key)
  }
  return (
    <>
      <ChartsContainer>
        <div className='tabContainer'>
        {
    (chainId === 10000 || chainId === 56) &&
    <div className='tabNav'>
      <button onClick={() => handleTab(2)} className={`${tab === 2 ? "active" : ""}`}>
        Pool
      </button>
      <button onClick={() => handleTab(1)} className={`${tab === 1 ? "active" : ""}`}>
        Staking
      </button>
    </div>
  }
          {/* <div className="tabContent">
           {tab == 1 ? <>TAb 1 Content</> : tab == 2 ? <>Tab 2 Content</> : <></>}
         </div> */}
        </div>
      </ChartsContainer>
      <ChartsContainer>
        <TVLChartSection data={tab == 1 ? makeDataForPoolTVL || HARDCODED_TVL_DATA : makeDataForTVL || HARDCODED_TVL_DATA} totalTvl={chainId == 10000 ? getTotalTVL : 0} title={tab == 1 ? "Pool TVL" : "Staking TVL"} />
        <VolumeChartSection data={makeDataForVolume || HARDCODED_VOLUME_DATA} />
      </ChartsContainer>
    </>
  )
}