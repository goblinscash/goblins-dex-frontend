import { createSlice } from "@reduxjs/toolkit";
import * as Act from "./actions";


export interface NFTState {
  loading: boolean,
  contractNftlist: any,
  contractNftLoading: any,
  withdrawNftlist: any,
  withdrawNftLoading: any,
  ownerNftlist: any,
  ownerNftLoading: any,
  stakedNftlist: any,
  stakedNftLoading: any,
};

const initialState: NFTState = {
  loading: false,
  contractNftlist: [],
  contractNftLoading: false,

  withdrawNftlist: [],
  withdrawNftLoading: false,

  ownerNftlist: [],
  ownerNftLoading: false,

  stakedNftlist: [],
  stakedNftLoading: false,

};

const slice = createSlice({
  name: "NFT",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {



    builder.addCase(Act.ownerNft.pending, (state, action) => ({
      ...state,
      ownerNftLoading: true
    }));
    builder.addCase(Act.ownerNft.fulfilled, (state, { payload }) => ({
      ...state,
      ownerNftLoading: false,
      ownerNftlist: payload,

    }));
    builder.addCase(Act.ownerNft.rejected, (state, action) => ({
      ...state,
      ownerNftLoading: false

    }));


    builder.addCase(Act.stakedNft.pending, (state, action) => ({
      ...state,
      stakedNftLoading: true,
    }));
    builder.addCase(Act.stakedNft.fulfilled, (state, { payload }) => ({
      ...state,
      stakedNftLoading: false,
      stakedNftlist: payload,

    }));
    builder.addCase(Act.stakedNft.rejected, (state, action) => ({
      ...state,
      stakedNftLoading: false,
    }));


    builder.addCase(Act.withdrawNft.pending, (state, action) => ({
      ...state,
      withdrawNftLoading: true,
    }));
    builder.addCase(Act.withdrawNft.fulfilled, (state, { payload }) => ({
      ...state,
      withdrawNftLoading: false,
      withdrawNftlist: payload,

    }));
    builder.addCase(Act.withdrawNft.rejected, (state, action) => ({
      ...state,
      withdrawNftLoading: false,
    }));

    builder.addCase(Act.contractNft.pending, (state, action) => ({
      ...state,
      contractNftLoading: true,
    }));
    builder.addCase(Act.contractNft.fulfilled, (state, { payload }) => ({
      ...state,
      contractNftLoading: false,
      contractNftlist: payload,

    }));
    builder.addCase(Act.contractNft.rejected, (state, action) => ({
      ...state,
      contractNftLoading: false,
    }));
  },
});

export default slice;
