import { createSlice } from "@reduxjs/toolkit";
import * as Act from "./actions";

const data =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("currentNetwork") || "[]");

export interface DashboardState {
  currentNetwork: any | undefined,
    loading: boolean,
  isBlocked: boolean,
  ipPop: boolean,
}

const initialState: DashboardState = {
  loading: false,
  currentNetwork: data || null,
  isBlocked: false,
  ipPop: false,
};


const slice = createSlice({
  name: "dashboard",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.setCurrentNetwork.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.setCurrentNetwork.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      currentNetwork: payload,
    }));
    builder.addCase(Act.setCurrentNetwork.rejected, (state, action) => ({
      ...state,
      loading: false,
      currentNetwork: null,
    }));

    builder.addCase(Act.detactCountryIp.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.detactCountryIp.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      isBlocked: payload,
      ipPop: payload,
    }));
    builder.addCase(Act.detactCountryIp.rejected, (state, action) => ({
      ...state,
      loading: false,
      isBlocked: false,
    }));

    builder.addCase(Act.handleIpPop.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      ipPop: !state.ipPop,

    }));
  },
});





export default slice.reducer;
