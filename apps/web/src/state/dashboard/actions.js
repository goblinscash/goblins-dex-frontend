import { createAsyncThunk } from "@reduxjs/toolkit";


export const setCurrentNetwork = createAsyncThunk(
  "setCurrentNetwork",
  async (payload, Thunk) => {
    try {
      typeof window !== "undefined" &&
        localStorage.setItem("currentNetwork", JSON.stringify(payload));
      return payload;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

// export { handleIpPop };
