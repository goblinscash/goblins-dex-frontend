import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setCurrentNetwork = createAsyncThunk(
  "setCurrentNetwork",
  async (payload, Thunk) => {
    console.log(payload, "payload<================")
    try {
      typeof window !== "undefined" &&
        localStorage.setItem("currentNetwork", JSON.stringify(payload));
      return payload;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);


export const detactCountryIp = createAsyncThunk(
  "detactCountryIp",
  async (payload, Thunk) => {
    try {
      const response = await axios.get(`https://ipapi.co/json/`);


      const { country_name, country_code } = response.data;
      if (["USA","US"].includes(country_code)) {
        return true;
      } else {
        return false;
      }
    } catch (error) {

      
      return Thunk.rejectWithValue(error);
    }
  }
);

export const handleIpPop = createAsyncThunk(
  "handleIpPop",
  async (payload, Thunk) => {
    try {
      return true;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

// export { handleIpPop };
