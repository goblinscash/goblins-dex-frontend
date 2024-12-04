import { createAsyncThunk } from "@reduxjs/toolkit";
import * as URL from "helpers/url_helper";
import { post } from "helpers/api_helper";
import { loadContractTokenIds, loadStakeTokenIds, loadWalletTokenIds, loadWithdrawTokenIds, useNftHelpers } from "helpers/useNftHelpers";





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


    let response = await loadWalletTokenIds(payload.walletAddress, payload.web3);

    return response

  } catch (error) {
    console.log(error, "<====error ownerNft")

    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});


export const stakedNft = createAsyncThunk("stakedNft", async (payload, Thunk) => {
  try {

    let response = await loadStakeTokenIds(payload.walletAddress, payload.web3);

    return response

  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});


export const withdrawNft = createAsyncThunk("withdrawNft", async (payload, Thunk) => {
  try {
    let response = await loadWithdrawTokenIds(payload.walletAddress, payload.web3);

    return response

  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});


export const contractNft = createAsyncThunk("contractNft", async (payload, Thunk) => {
  try {
    let response = await loadContractTokenIds(payload.walletAddress, payload.web3);
    return response

  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});