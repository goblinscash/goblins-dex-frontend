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

      return data?.token?.tokenDayData[0]?.close
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
}

export async function getGobUSDPrice(chainId) {
    try {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/price/gob`;
        const params = { chainId }; 

        const response = await axios.get(apiUrl, { params });

      const { data } = response.data;

      return data
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
}