import { useWeb3React } from '@web3-react/core'
import { CustomUserProperties, getBrowser, SharedEventName } from '@uniswap/analytics-events'
import { getDeviceId, sendAnalyticsEvent, sendInitializationEvent, Trace, user } from 'analytics'
import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Icons/LoadingSpinner'
import NavBar, { PageTabs } from 'components/NavBar'
import { UK_BANNER_HEIGHT, UK_BANNER_HEIGHT_MD, UK_BANNER_HEIGHT_SM, UkBanner } from 'components/NavBar/UkBanner'
import { useFeatureFlagsIsLoaded } from 'featureFlags'
import { useAtom } from 'jotai'
import { useBag } from 'nft/hooks/useBag'
import { lazy, Suspense, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { shouldDisableNFTRoutesAtom } from 'state/application/atoms'
import { useAppSelector } from 'state/hooks'
import { AppState } from 'state/reducer'
import { useRouterPreference } from 'state/user/hooks'
import { StatsigProvider, StatsigUser } from 'statsig-react'
import styled from 'styled-components'
import DarkModeQueryParamReader from 'theme/components/DarkModeQueryParamReader'
import { useIsDarkMode } from 'theme/components/ThemeToggle'
import { flexRowNoWrap } from 'theme/styles'
import { Z_INDEX } from 'theme/zIndex'
import { STATSIG_DUMMY_KEY } from 'tracing'
import { isPathBlocked } from 'utils/blockedPaths'
import { getEnvName } from 'utils/env'
import { MICROSITE_LINK } from 'utils/openDownloadApp'
import { getCurrentPageFromLocation } from 'utils/urlRoutes'
import { getCLS, getFCP, getFID, getLCP, Metric } from 'web-vitals'
import { findRouteByPath, RouteDefinition, routes, useRouterConfig } from './RouteDefinitions'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { updateFarm } from 'state/action'
import useDebounceFunction from 'hooks/useDebounceFunction'
import { useDispatch, useSelector } from 'react-redux'
import { useWallet } from 'hooks/useWallet'
import { detactCountryIp } from 'state/dashboard/actions'




const AppChrome = lazy(() => import('./AppChrome'))

const BodyWrapper = styled.div<{ bannerIsVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - ${({ bannerIsVisible }) => (bannerIsVisible ? UK_BANNER_HEIGHT : 0)}px);
  padding: 0px 0px 5rem 0px;
  align-items: center;
  flex: 1;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    min-height: calc(100vh - ${({ bannerIsVisible }) => (bannerIsVisible ? UK_BANNER_HEIGHT_MD : 0)}px);
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    min-height: calc(100vh - ${({ bannerIsVisible }) => (bannerIsVisible ? UK_BANNER_HEIGHT_SM : 0)}px);
  }
`

const MobileBottomBar = styled.div`
  z-index: ${Z_INDEX.sticky};
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  width: calc(100vw - 16px);
  justify-content: space-between;
  padding: 0px 4px;
  height: ${({ theme }) => theme.mobileBottomBarHeight}px;
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  margin: 8px;
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    display: none;
  }
`

const HeaderWrapper = styled.div<{ transparent?: boolean; bannerIsVisible?: boolean; scrollY: number }>`
  ${flexRowNoWrap};
  background-color: ${({ theme, transparent }) => !transparent && theme.surface1};
  border-bottom: ${({ theme, transparent }) => !transparent && `1px solid ${theme.surface3}`};
  width: 100%;
  justify-content: space-between;
  position: sticky;
  top: ${({ bannerIsVisible }) => (bannerIsVisible ? Math.max(UK_BANNER_HEIGHT - scrollY, 0) : 0)}px;
  z-index: ${Z_INDEX.dropdown};

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    top: ${({ bannerIsVisible }) => (bannerIsVisible ? Math.max(UK_BANNER_HEIGHT_MD - scrollY, 0) : 0)}px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    top: ${({ bannerIsVisible }) => (bannerIsVisible ? Math.max(UK_BANNER_HEIGHT_SM - scrollY, 0) : 0)}px;
  }
`

export default function App() {
  const isLoaded = useFeatureFlagsIsLoaded()
  const wallet = useWallet()
  const dispatch = useDispatch<any>()
  const [, setShouldDisableNFTRoutes] = useAtom(shouldDisableNFTRoutesAtom)
  const { isBlocked } = useAppSelector((state:any) => state.dashboard);

  const location = useLocation()
  const { pathname } = location
  const currentPage = getCurrentPageFromLocation(pathname)

  const [scrollY, setScrollY] = useState(0)
  const scrolledState = scrollY > 0

  const routerConfig = useRouterConfig()

  const originCountry = useAppSelector((state: AppState) => state.user.originCountry)
  const renderUkBannner = Boolean(originCountry) && originCountry === 'GB'


  useEffect(() => {
    window.scrollTo(0, 0)
    setScrollY(0)
  }, [pathname])

  const [searchParams] = useSearchParams()
  useEffect(() => {
    if (searchParams.get('disableNFTs') === 'true') {
      setShouldDisableNFTRoutes(true)
    } else if (searchParams.get('disableNFTs') === 'false') {
      setShouldDisableNFTRoutes(false)
    }
  }, [searchParams, setShouldDisableNFTRoutes])

  useEffect(() => {
    const scrollListener = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  const isBagExpanded = useBag((state) => state.bagExpanded)
  const isHeaderTransparent = !scrolledState && !isBagExpanded;

  const { account } = useWeb3React()
  const statsigUser: StatsigUser = useMemo(
    () =>({
      userID: getDeviceId(),
      customIDs: { address: account ?? '' },
    }),
    [account]
  )

  // redirect address to landing pages until implemented
  const shouldRedirectToAppInstall = pathname?.startsWith('/address/');
  useLayoutEffect(() => {
    if (shouldRedirectToAppInstall) {
      window.location.href = MICROSITE_LINK
    }
  }, [shouldRedirectToAppInstall])


  useLayoutEffect(()=>{

    var body = document.body;
    if( ['/staking','/farming'].includes(pathname)){
      body.classList.add("newDesign");
    }
    else{
      body.classList.remove("newDesign");
    }

  },[pathname])

  useEffect(() => {
    dispatch(detactCountryIp());
  }, []);

  if (shouldRedirectToAppInstall) {
    return null
  }

  const shouldBlockPath = isPathBlocked(pathname)
  if (shouldBlockPath && pathname !== '/swap') {
    return <Navigate to="/swap" replace />
  }


  return (
    <ErrorBoundary>
      <ToastContainer />
      <DarkModeQueryParamReader />
      <Trace page={currentPage}>
        {/*
          This is where *static* page titles are injected into the <head> tag. If you
          want to set a page title based on data that's dynamic or not available on first render,
          you can set it later in the page component itself, since react-helmet prefers the most recently rendered title.
        */}
        <Helmet>
          <title>{findRouteByPath(pathname)?.getTitle(pathname) ?? 'Goblins Interface'}</title>
        </Helmet>
        <StatsigProvider
          user={statsigUser}
          // TODO: replace with proxy and cycle key
          sdkKey={STATSIG_DUMMY_KEY}
          waitForInitialization={false}
          options={{
            environment: { tier: getEnvName() },
            api: process.env.REACT_APP_STATSIG_PROXY_URL,
          }}
        >
          <UserPropertyUpdater />
        {/* {true && <AnnouncementBar />} */}

          
          {isBlocked && <UkBanner />}
          <HeaderWrapper transparent={isHeaderTransparent} bannerIsVisible={renderUkBannner} scrollY={scrollY}>
            <NavBar blur={isHeaderTransparent} />
          </HeaderWrapper>
          <BodyWrapper bannerIsVisible={renderUkBannner}>
            <Suspense>
              <AppChrome />
            </Suspense>
            <Suspense fallback={<Loader />}>
              {isLoaded ? (
                <Routes>
                  {routes.map((route: RouteDefinition) =>
                    route.enabled(routerConfig) ? (
                      <Route key={route.path} path={route.path} element={route.getElement(routerConfig)}>
                        {route.nestedPaths.map((nestedPath) => (
                          <Route path={nestedPath} key={`${route.path}/${nestedPath}`} />
                        ))}
                      </Route>
                    ) : null
                  )}
                </Routes>
              ) : (
                <Loader />
              )}
            </Suspense>
          </BodyWrapper>
          <MobileBottomBar>
            <PageTabs />
          </MobileBottomBar>
        </StatsigProvider>
      </Trace>
    </ErrorBoundary>
  )
}

function UserPropertyUpdater() {
  const isDarkMode = useIsDarkMode()

  const [routerPreference] = useRouterPreference()
  const rehydrated = useAppSelector((state) => state._persist.rehydrated)

  useEffect(() => {

    user.set(CustomUserProperties.USER_AGENT, navigator.userAgent)
    user.set(CustomUserProperties.BROWSER, getBrowser())
    user.set(CustomUserProperties.SCREEN_RESOLUTION_HEIGHT, window.screen.height)
    user.set(CustomUserProperties.SCREEN_RESOLUTION_WIDTH, window.screen.width)
    user.set(CustomUserProperties.GIT_COMMIT_HASH, process.env.REACT_APP_GIT_COMMIT_HASH ?? 'unknown')

    // Service Worker analytics
    const isServiceWorkerInstalled = Boolean(window.navigator.serviceWorker?.controller)
    const isServiceWorkerHit = Boolean((window as any).__isDocumentCached)
    const serviceWorkerProperty = isServiceWorkerInstalled ? (isServiceWorkerHit ? 'hit' : 'miss') : 'uninstalled'

    const pageLoadProperties = { service_worker: serviceWorkerProperty }
    sendInitializationEvent(SharedEventName.APP_LOADED, pageLoadProperties)
    const sendWebVital =
      (metric: string) =>
      ({ delta }: Metric) =>
        sendAnalyticsEvent(SharedEventName.WEB_VITALS, { ...pageLoadProperties, [metric]: delta })
    getCLS(sendWebVital('cumulative_layout_shift'))
    getFCP(sendWebVital('first_contentful_paint_ms'))
    getFID(sendWebVital('first_input_delay_ms'))
    getLCP(sendWebVital('largest_contentful_paint_ms'))
  }, [])

  useEffect(() => {
    user.set(CustomUserProperties.DARK_MODE, isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    if (!rehydrated) return
    user.set(CustomUserProperties.ROUTER_PREFERENCE, routerPreference)
  }, [routerPreference, rehydrated])
  return null;
}
