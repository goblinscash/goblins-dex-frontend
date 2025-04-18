import { Trans } from '@lingui/macro'
import { BrowserEvent, InterfaceElementName, InterfacePageName, SharedEventName } from '@uniswap/analytics-events'
import { TraceEvent } from 'analytics'
import { Trace } from 'analytics'
import { TopPoolTable } from 'components/Pools/PoolTable/PoolTable'
import { AutoRow } from 'components/Row'
import { MAX_WIDTH_MEDIA_BREAKPOINT, MEDIUM_MEDIA_BREAKPOINT } from 'components/Tokens/constants'
import { filterStringAtom } from 'components/Tokens/state'
import { TopTokensTable } from 'components/Tokens/TokenTable'
import NetworkFilter from 'components/Tokens/TokenTable/NetworkFilter'
import OldTokenTable from 'components/Tokens/TokenTable/OldTokenTable'
import SearchBar from 'components/Tokens/TokenTable/SearchBar'
import TimeSelector from 'components/Tokens/TokenTable/TimeSelector'
import { MouseoverTooltip } from 'components/Tooltip'
import { useInfoExplorePageEnabled } from 'featureFlags/flags/infoExplore'
import { useResetAtom } from 'jotai/utils'
import { ExploreChartsSection } from 'pages/Explore/charts/ExploreChartsSection'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ThemedText } from 'theme/components'
import { useExploreParams } from './redirects'
import RecentTransactions from './tables/RecentTransactions'
import { getStakingtransaction } from 'state/action'
import { useAppDispatch } from 'state/hooks'

const ExploreContainer = styled.div<{ isInfoExplorePageEnabled?: boolean }>`
  width: 100%;
  min-width: 320px;

  ${({ isInfoExplorePageEnabled }) =>
    isInfoExplorePageEnabled
      ? css`
          padding: 48px 40px 0px;

          @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
            padding: 16px;
            padding-bottom: 0px;
          }
        `
      : css`
          padding: 68px 12px 0px;

          @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
            padding-top: 48px;
          }

          @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
            padding-top: 20px;
          }
        `}
`
const TitleContainer = styled.div`
  margin-bottom: 32px;
  max-width: ${MAX_WIDTH_MEDIA_BREAKPOINT};
  margin-left: auto;
  margin-right: auto;
  display: flex;
`
const NavWrapper = styled.div<{ isInfoExplorePageEnabled: boolean }>`
  display: flex;
  max-width: ${MAX_WIDTH_MEDIA_BREAKPOINT};
  margin: 0 auto;
  margin-bottom: ${({ isInfoExplorePageEnabled }) => (isInfoExplorePageEnabled ? '16px' : '20px')};
  color: ${({ theme }) => theme.neutral3};
  flex-direction: row;

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    flex-direction: column;
    gap: 8px;
  }

  ${({ isInfoExplorePageEnabled }) =>
    isInfoExplorePageEnabled &&
    css`
      @media screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
        flex-direction: column;
        gap: 16px;
      }
    `};
`
const TabBar = styled(AutoRow)`
  gap: 10px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}px) {
    gap: 16px;
  }
`
const TabItem = styled(ThemedText.HeadlineMedium) <{ active?: boolean }>`
  align-items: center;
  background: rgb(1, 27, 28);
  font-size: 14px !important;
  padding: 10px 15px;
  min-width: 150px;
  border-radius: 5px;
  //background: ${({ theme, active }) => (active ? "#00ff4e" : "#001b1c")};
  //color: ${({ theme, active }) => (active ? "#001b1c" : "#fff")};

  background: ${({ theme, active }) => (active ? "#001b1c" : "#00ff4e")};
  color: ${({ theme, active }) => (active ? "#fff" : "#001b1c")};
  cursor: pointer;
  transition: ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.ease} color`};
`
const FiltersContainer = styled.div<{ isInfoExplorePageEnabled: boolean }>`
  display: flex;
  gap: 8px;
  height: 40px;

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    ${({ isInfoExplorePageEnabled }) => !isInfoExplorePageEnabled && 'order: 2;'}
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}px) {
    ${({ isInfoExplorePageEnabled }) => isInfoExplorePageEnabled && 'justify-content: space-between;'}
  }
`
const DropdownFilterContainer = styled(FiltersContainer) <{ isInfoExplorePageEnabled: boolean }>`
  ${({ isInfoExplorePageEnabled }) =>
    isInfoExplorePageEnabled
      ? css`
          @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}px) {
            justify-content: flex-start;
          }
        `
      : css`
          @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
            justify-content: flex-start;
          }
        `};
`
const SearchContainer = styled(FiltersContainer) <{ isInfoExplorePageEnabled: boolean }>`
  ${({ isInfoExplorePageEnabled }) => !isInfoExplorePageEnabled && 'margin-left: 8px;'}
  width: 100%;

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    ${({ isInfoExplorePageEnabled }) => !isInfoExplorePageEnabled && 'order: 1; margin: 0px;'}
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}px) {
    ${({ isInfoExplorePageEnabled }) => isInfoExplorePageEnabled && 'justify-content: flex-end;'}
  }
`
export enum ExploreTab {
  Tokens = 'tokens',
  Pools = 'pools',
  Transactions = 'transactions',
}

interface Page {
  title: React.ReactNode
  key: ExploreTab
  component: () => JSX.Element
  loggingElementName: string
}


const Pages: Array<Page> = [
  {
    title: <Trans>Pools</Trans>,
    key: ExploreTab.Pools,
    component: TopPoolTable,
    loggingElementName: InterfaceElementName.EXPLORE_POOLS_TAB,
  },
  {
    title: <Trans>Tokens</Trans>,
    key: ExploreTab.Tokens,
    component: TopTokensTable,
    loggingElementName: InterfaceElementName.EXPLORE_TOKENS_TAB,
  },

  {
    title: <Trans>Transactions</Trans>,
    key: ExploreTab.Transactions,
    component: RecentTransactions,
    loggingElementName: InterfaceElementName.EXPLORE_TRANSACTIONS_TAB,
  },
]

const Explore = ({ initialTab }: { initialTab?: ExploreTab }) => {
  const dispatch = useAppDispatch()
  const resetFilterString = useResetAtom(filterStringAtom)
  const location = useLocation()
  const navigate = useNavigate()

  const initialKey: number = useMemo(() => {
    const key = initialTab && Pages.findIndex((page) => page.key === initialTab)
    if (!key || key === -1) return 0
    return key
  }, [initialTab])


  const [currentTab, setCurrentTab] = useState(initialKey)
  const isInfoExplorePageEnabled = useInfoExplorePageEnabled()

  // to allow backward navigation between tabs
  const { tab, chainName } = useExploreParams()

  useEffect(() => {
    const tabIndex = Pages.findIndex((page) => page.key === tab)
    if (tabIndex !== -1) {
      setCurrentTab(tabIndex)
    }
  }, [tab])

  useEffect(() => {
    resetFilterString()
  }, [location, resetFilterString])

  useEffect(() => {
    dispatch(getStakingtransaction())


  }, [])


  const { component: Page, key: currentKey } = Pages[currentTab]

  return (
    <Trace
      page={isInfoExplorePageEnabled ? InterfacePageName.EXPLORE_PAGE : InterfacePageName.TOKENS_PAGE}
      shouldLogImpression
    >

      <ExploreContainer isInfoExplorePageEnabled={isInfoExplorePageEnabled}>
        {isInfoExplorePageEnabled ? (
          <ExploreChartsSection />
        ) : (
          <TitleContainer>
            <MouseoverTooltip
              text={<Trans>This table contains the top tokens by Goblins volume, sorted based on your input.</Trans>}
              placement="bottom"
            >
              <ThemedText.H1Large>
                <Trans>Top tokens on Goblins</Trans>
              </ThemedText.H1Large>
            </MouseoverTooltip>
          </TitleContainer>
        )}
        <NavWrapper isInfoExplorePageEnabled={isInfoExplorePageEnabled}>
          {isInfoExplorePageEnabled && (
            <TabBar data-testid="explore-navbar">
              {Pages.map(({ title, loggingElementName, key }, index) => {
                const handleNavItemClick = () => {
                  setCurrentTab(index)
                  navigate(`/explore/${key}` + (chainName ? `/${chainName}` : ''))
                }
                return (
                  <TraceEvent
                    events={[BrowserEvent.onClick]}
                    name={SharedEventName.NAVBAR_CLICKED}
                    element={loggingElementName}
                    key={index}
                  >
                    <TabItem onClick={handleNavItemClick} active={currentTab === index} key={key}>
                      {title}
                    </TabItem>
                  </TraceEvent>
                )
              }
              )
              }
            </TabBar>
          )
          }
          {

            isInfoExplorePageEnabled ? (
              <FiltersContainer isInfoExplorePageEnabled>
                <DropdownFilterContainer isInfoExplorePageEnabled>
                  {/* Open <NetworkFilter /> if need both */}
                  {/* <NetworkFilter /> */}
                  {/* {currentKey === ExploreTab.Tokens && <TimeSelector />} */}
                </DropdownFilterContainer>
                <SearchContainer isInfoExplorePageEnabled>
                  {/* {currentKey !== ExploreTab.Transactions && <SearchBar tab={currentKey} />} */}
                </SearchContainer>
              </FiltersContainer>
            ) : (
              <>
                <FiltersContainer isInfoExplorePageEnabled={false}>
                  {/* <NetworkFilter /> */}
                  <TimeSelector />
                </FiltersContainer>
                <SearchContainer isInfoExplorePageEnabled={false}>
                  <SearchBar />
                </SearchContainer>
              </>
            )

          }
        </NavWrapper>
        {isInfoExplorePageEnabled ? <Page /> : <OldTokenTable />}
      </ExploreContainer>
    </Trace>
  )
}

export default Explore