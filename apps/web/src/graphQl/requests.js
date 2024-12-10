import axios from "axios"
import {  tokenUSDPriceQuery } from "./queries";



export function getTokenUSDPrice(subgraphUrl) {
  return async function (id) {
    const variables = { id };

    try {
      const response = await axios.post(
        subgraphUrl,
        {
          query: tokenUSDPriceQuery,
          variables: variables,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = response.data;


      return data?.token?.tokenDayData[0]?.open
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
}
