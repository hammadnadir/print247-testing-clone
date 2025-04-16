import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { baseURL } from "../request";
import { setLoading } from "../global";

const initialState = {
  isLoading: false,
  mainIndustries: {}
};



export const industriesSlice = createSlice({
  name: "industries",
  initialState,
  reducers: {
    setMainIndustries: (state, action) => {
      state.mainIndustries = action.payload;
    },
  },
  extraReducers: (builder) => {
  
  },
});

export const {
    setMainIndustries
} = industriesSlice.actions;

export default industriesSlice.reducer;
