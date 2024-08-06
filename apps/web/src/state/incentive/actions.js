import { createAsyncThunk } from "@reduxjs/toolkit";
import * as URL from "helpers/url_helper";
import { post } from "helpers/api_helper";



export const farmList = createAsyncThunk("farmList", async (payload, Thunk) => {
  try {
    let response = await post(URL.FARM_LIST, payload);
    return response.data;
  } catch (error) {
    callback && callback(error);

    return Thunk.rejectWithValue(error);
  }
});

export const myFarmList = createAsyncThunk(
  "myFarmList",
  async (payload, Thunk) => {
    try {
      let response = await post(URL.MY_FARM_LIST, payload);
      return response.data;
    } catch (error) {
      callback && callback(error);

      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateMyFarm = createAsyncThunk(
  "updateMyFarm",
  async (payload, Thunk) => {
    try {
      let response = await post(URL.UPDATE_MY_FARM, payload);
      return response.data;
    } catch (error) {
      callback && callback(error);

      return Thunk.rejectWithValue(error);
    }
  }
);

export const deletedFarmList = createAsyncThunk(
  "deletedFarmList",
  async (payload, Thunk) => {
    try {
      let response = await post(URL.DELETED_FARM_LIST, payload);
      return response.data;
    } catch (error) {
      callback && callback(error);

      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateFarm = createAsyncThunk(
  "updateFarm",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await post(URL.UPDATE_FARM, data);

      callback && callback();
      return response.data;
    } catch (error) {
      callback && callback(error);

      return Thunk.rejectWithValue(error);
    }
  }
);
