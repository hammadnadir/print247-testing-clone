import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { baseURL } from "../request";
import { setLoading } from "../global";

const initialState = {
  ipNew: {},
  ip: "",
  countryName: "",
  isLoading: false,
};


export const getIpRequest = createAsyncThunk(
  "getCountry/getIpRequest",
  async (ip, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`https://ipapi.co/json/`)
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export async function getIPAddress() {
  return headers().get("x-forwarded-for");
}

export const getCountryRequest = createAsyncThunk(
  "getCountry/getCountryRequest",
  async (ip, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`https://iplookup.biztekapps.us/?ip=${ip}`)
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const getCountrySlice = createSlice({
  name: "getcountry",
  initialState,
  reducers: {
    setIpAddress: (state, action) => {
      state.ip = action.payload;
    },
    setCountryName: (state, action) => {
      state.countryName = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.countryName = action?.payload?.getCountry?.countryName ? action.payload.getCountry.countryName : state?.countryName;
      state.ip = action?.payload?.getCountry?.ip ? action.payload.getCountry.ip : state?.ip;
      state.ipNew = action?.payload?.getCountry?.ipNew ? action.payload.getCountry.ipNew : state?.ipNew;
    });
    builder.addCase(getCountryRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCountryRequest.fulfilled, (state, action) => {
      state.countryName = action.payload ? action.payload : {};
      state.isLoading = false;
    });
    builder.addCase(getCountryRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getIpRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getIpRequest.fulfilled, (state, action) => {
      state.ipNew = action.payload ? action.payload : "";
      state.isLoading = false;
    });
    builder.addCase(getIpRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setIpAddress,
  setCountryName
} = getCountrySlice.actions;

export default getCountrySlice.reducer;