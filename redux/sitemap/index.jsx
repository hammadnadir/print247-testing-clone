import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { baseURL } from "../request";
import { setLoading } from "../global";

const headers = {
  'Authorization': "kljdsafjhnszldkloasyuhlkrhaslskfhnj",
  'Content-Type': 'application/json'
};

const initialState = {
  siteMapData: {},
  isLoading: false,
};


export const siteMapDataRequest = createAsyncThunk(
  "sitemap/siteMapDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/site-map?print247_sitemap=1`,null,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);


export const siteMapDataSlice = createSlice({
  name: "sitemap",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.siteMapData = action?.payload?.sitemap?.siteMapData ? action.payload.sitemap.siteMapData : state?.siteMapData;
    });
    builder.addCase(siteMapDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(siteMapDataRequest.fulfilled, (state, action) => {
      state.siteMapData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(siteMapDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default siteMapDataSlice.reducer;