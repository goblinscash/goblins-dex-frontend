import { createSlice } from "@reduxjs/toolkit";
import * as Act from "./actions";


export interface InitialState {
  farmLoading: boolean,
  farmList: any,
  myFarmLoading: boolean,
  myFarmList: any,
  deletedFarmLoading: boolean,
  deletedFarmList: any,
  updateLoading: boolean,
  transactions: any
};

const initialState: InitialState = {
  farmLoading: false,
  farmList: [],
  myFarmLoading: false,
  myFarmList: [],
  deletedFarmLoading: false,
  deletedFarmList: [],
  updateLoading: false,
  transactions: {
    stakeTransaction:[],
    unStakeTransaction:[]
  }
};

const slice = createSlice({
  name: "INCENTIVE",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.farmList.pending, (state, action) => ({
      ...state,
      farmLoading: true,
    }));
    builder.addCase(Act.farmList.fulfilled, (state, { payload }) => ({
      ...state,
      farmLoading: false,
      farmList: payload,
    }));
    builder.addCase(Act.farmList.rejected, (state, action) => ({
      ...state,
      farmLoading: false,
    }));

    builder.addCase(Act.myFarmList.pending, (state, action) => ({
      ...state,
      myFarmLoading: true,
    }));
    builder.addCase(Act.myFarmList.fulfilled, (state, { payload }) => ({
      ...state,
      myFarmLoading: false,
      myFarmList: payload,
    }));
    builder.addCase(Act.myFarmList.rejected, (state, action) => ({
      ...state,
      myFarmLoading: false,
    }));

    builder.addCase(Act.deletedFarmList.pending, (state, action) => ({
      ...state,
      deletedFarmLoading: true,
    }));
    builder.addCase(Act.deletedFarmList.fulfilled, (state, { payload }) => ({
      ...state,
      deletedFarmLoading: false,
      deletedFarmList: payload,
    }));
    builder.addCase(Act.deletedFarmList.rejected, (state, action) => ({
      ...state,
      deletedFarmLoading: false,
    }));

    builder.addCase(Act.updateFarm.pending, (state, action) => ({
      ...state,
      updateLoading: true,
    }));
    builder.addCase(Act.updateFarm.fulfilled, (state, { payload }) => ({
      ...state,
      updateLoading: false,
    }));
    builder.addCase(Act.updateFarm.rejected, (state, action) => ({
      ...state,
      updateLoading: false,
    }));


    builder.addCase(Act.updateMyFarm.pending, (state, action) => ({
      ...state,
      updateLoading: true,
    }));
    builder.addCase(Act.updateMyFarm.fulfilled, (state, { payload }) => ({
      ...state,
      updateLoading: false,
    }));
    builder.addCase(Act.updateMyFarm.rejected, (state, action) => ({
      ...state,
      updateLoading: false,
    }));




    builder.addCase(Act.getStakingtransaction.fulfilled, (state, { payload }) => ({
      ...state,
      transactions: payload,
    }));

  },
});

export default slice;
