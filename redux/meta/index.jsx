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
  metaData: {},
  isLoading: false,
};


export const metaDataRequest = createAsyncThunk(
  "meta/metaDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/metadata?page_slug=${payload ? payload : "onetwo"}`, null, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const metaDataSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.metaData = action?.payload?.meta?.metaData ? action.payload.meta.metaData : state?.metaData;
    });
    builder.addCase(metaDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(metaDataRequest.fulfilled, (state, action) => {
      state.metaData = action.payload ? action.payload : {};
      state.isLoading = false;
    });
    builder.addCase(metaDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default metaDataSlice.reducer;