import { Trans } from '@lingui/macro'
import { Currency, Price } from '@uniswap/sdk-core'
import { useUSDPrice } from 'hooks/useUSDPrice'
import tryParseCurrencyAmount from 'lib/utils/tryParseCurrencyAmount'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'
import { NumberType, useFormatter } from 'utils/formatNumbers'

interface TradePriceProps {
  currencies: any | undefined
  formattedAmounts: any | undefined

}

const StyledPriceContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  grid-template-columns: 1fr auto;
  grid-gap: 0.25rem;
  display: flex;
  flex-direction: row;
  text-align: left;
  flex-wrap: wrap;
  user-select: text;
`

export default function TradePrice({ currencies, formattedAmounts }: TradePriceProps) {
  const { formatPrice } = useFormatter()

  const [showInverted, setShowInverted] = useState<boolean>(false)



const getPrice = (inputAmount:any,outputAmount:any)=>{
try {
  if(outputAmount > inputAmount){
    return inputAmount / outputAmount;
  }
  else if (inputAmount > outputAmount){
    return inputAmount / outputAmount;

  }
  else {
    return 0
  }
} catch (error) {
  return 0
}
}

  

  const formattedPrice = useMemo(() => {
    try {
      return getPrice( formattedAmounts[showInverted ? "OUTPUT" :"INPUT"],formattedAmounts[showInverted ? "INPUT" :"OUTPUT"] )
    } catch {
      return '0'
    }
  }, [formatPrice, formattedAmounts, showInverted])


  const label = showInverted ? `${currencies["OUTPUT"]?.symbol}` : `${currencies["INPUT"]?.symbol} `
  const labelInverted = showInverted ? `${currencies["INPUT"]?.symbol} ` : `${currencies["OUTPUT"]?.symbol}`
  const flipPrice = useCallback(() => setShowInverted(!showInverted), [setShowInverted, showInverted])

  const text = `${'1 ' + labelInverted + ' = ' + formattedPrice ?? '-'} ${label}`


  return (
    <StyledPriceContainer
      onClick={(e) => {
        e.stopPropagation() // dont want this click to affect dropdowns / hovers
        flipPrice()
      }}
      title={text}
    >
      <ThemedText.BodySmall>{text}</ThemedText.BodySmall>

    </StyledPriceContainer>
  )
}
