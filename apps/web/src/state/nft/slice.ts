import { createSlice } from "@reduxjs/toolkit";
import * as Act from "./actions";


export interface NFTState {
  loading: boolean,
  contractNftlist: any,
  withdrawNftlist: any,
  ownerNftlist: any,
  stakedNftlist: any,
};

const initialState: NFTState = {
  loading: false,
  contractNftlist: [],
  withdrawNftlist: [],
  ownerNftlist: [],
  stakedNftlist:[]
};

const slice = createSlice({
  name: "NFT",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(Act.nftList.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.nftList.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   ownerNftlist: payload.ownerNft ? payload.data : state.ownerNftlist,
    //   stakedNftlist: payload.stakedNft ? payload.data : state.stakedNftlist,
    //   withdrawNftlist: payload.withdrawNft ? payload.data : state.withdrawNftlist,
    //   contractNftlist: payload.ownerNft === false ? payload.data : state.contractNftlist,
    // }));
    // builder.addCase(Act.nftList.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    // }));


    builder.addCase(Act.ownerNft.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.ownerNft.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      ownerNftlist: payload,

    }));
    builder.addCase(Act.ownerNft.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));


    builder.addCase(Act.stakedNft.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.stakedNft.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      stakedNftlist: payload,

    }));
    builder.addCase(Act.stakedNft.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));


    builder.addCase(Act.withdrawNft.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.withdrawNft.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      withdrawNftlist: payload,

    }));
    builder.addCase(Act.withdrawNft.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));

    builder.addCase(Act.contractNft.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.contractNft.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      contractNftlist: payload,

    }));
    builder.addCase(Act.contractNft.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
  },
});

export default slice;
