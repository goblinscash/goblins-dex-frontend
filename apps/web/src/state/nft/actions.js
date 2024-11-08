import { createAsyncThunk } from "@reduxjs/toolkit";
import * as URL from "helpers/url_helper";
import { post } from "helpers/api_helper";

// export const nftList = createAsyncThunk("nftList", async (payload, Thunk) => {
//   try {
//     let response = await post(URL.NFT_LIST, payload);
//     return {
//       ...response,
//       ownerNft: payload.ownerNft,
//       withdrawNft: payload.withdrawNft,
//       stakedNft: payload.stakedNft,
//     };
//   } catch (error) {
//     callback && callback(error);

//     return Thunk.rejectWithValue(error);
//   }
// });


export const ownerNft = createAsyncThunk("ownerNft", async (payload, Thunk) => {
  try {
    let response = await post(URL.NFT_LIST, payload);
    return response.data
   
  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});


export const stakedNft = createAsyncThunk("stakedNft", async (payload, Thunk) => {
  try {
    let response = await post(URL.NFT_LIST, payload);
    return response.data
   
  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});


export const withdrawNft = createAsyncThunk("withdrawNft", async (payload, Thunk) => {
  try {
    let response = await post(URL.NFT_LIST, payload);
    return response.data
   
  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});


export const contractNft = createAsyncThunk("contractNft", async (payload, Thunk) => {
  try {
    let response = await post(URL.NFT_LIST, payload);
    return response.data
   
  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});