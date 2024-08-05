import { createSlice } from "@reduxjs/toolkit";
import * as Act from "./actions";

const data =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("currentNetwork") || "[]");

export interface DashboardState {
  currentNetwork: any | undefined
}

const initialState: DashboardState = {
  currentNetwork: data || null,
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
  },
});


export default slice.reducer;
