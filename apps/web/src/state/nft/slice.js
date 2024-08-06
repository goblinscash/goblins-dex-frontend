import { createSlice } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  contractNftlist: [],
  withdrawNftlist: [],
  ownerNftlist: [],
};

const slice = createSlice({
  name: "NFT",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.nftList.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.nftList.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      ownerNftlist: payload.ownerNft ? payload.data : state.ownerNftlist,
      withdrawNftlist: payload.withdrawNft ? payload.data : state.withdrawNftlist,
      contractNftlist: payload.ownerNft === false ? payload.data : state.contractNftlist,
    }));
    builder.addCase(Act.nftList.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
  },
});

export default slice;
