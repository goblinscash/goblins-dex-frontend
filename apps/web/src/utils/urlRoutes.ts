import { InterfacePageName } from '@uniswap/analytics-events'

export function getCurrentPageFromLocation(locationPathname: string): InterfacePageName | undefined {
  switch (true) {
    case locationPathname.startsWith('/swap'):
      return InterfacePageName.SWAP_PAGE
    case locationPathname.startsWith('/vote'):
      return InterfacePageName.VOTE_PAGE
    case locationPathname.startsWith('/pools'):
    case locationPathname.startsWith('/pool'):
      return InterfacePageName.POOL_PAGE
    case locationPathname.startsWith('/tokens'):
      return InterfacePageName.TOKENS_PAGE
    case locationPathname.startsWith('/nfts/profile'):
      return InterfacePageName.NFT_PROFILE_PAGE
    case locationPathname.startsWith('/nfts/asset'):
      return InterfacePageName.NFT_DETAILS_PAGE
    case locationPathname.startsWith('/nfts/collection'):
      return InterfacePageName.NFT_COLLECTION_PAGE
    case locationPathname.startsWith('/nfts'):
      return InterfacePageName.NFT_EXPLORE_PAGE
      case locationPathname.startsWith('/explore'):
        return InterfacePageName.EXPLORE_PAGE
    default:
      return undefined
  }
}

export function getCanonicalUrl(locationPathName: string): string {
  const baseUrl = `${window.location.origin}${locationPathName}`
  const modifiedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return modifiedBaseUrl
}
