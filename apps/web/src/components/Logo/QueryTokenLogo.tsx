import { ChainId } from '@uniswap/sdk-core'
import { PortfolioLogo } from 'components/AccountDrawer/MiniPortfolio/PortfolioLogo'
import { SearchToken } from 'graphql/data/SearchTokens'
import { TokenQueryData } from 'graphql/data/Token'
import { TokenList, TopToken } from 'graphql/data/TopTokens'
import { gqlToCurrency, supportedChainIdFromGQLChain } from 'graphql/data/util'
import { useMemo } from 'react'

import { AssetLogoBaseProps } from './AssetLogo'

export default function QueryTokenLogo(
  props: AssetLogoBaseProps & {
    token?: TopToken | TokenQueryData | SearchToken
  }
) {



  const chainId = ChainId.SMARTBCH;
  const currency = props.token ? gqlToCurrency(props.token) : undefined

  return <PortfolioLogo currencies={useMemo(() => [currency], [currency])} chainId={chainId} {...props} />
}
