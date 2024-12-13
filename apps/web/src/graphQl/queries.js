

export const tokenUSDPriceQuery = `
query ($id: String!) {
  token(id: $id){
    id,
    name,
    volumeUSD,
    totalValueLocked,
    tokenDayData(orderBy: date, orderDirection: desc){
      open
      close
      date
    }    
  }
}
`;


