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
  productTooltip: {},
  isLoading: false,
};

export const tooltipDataRequest = createAsyncThunk(
  "toolotip/tooltipDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/get_rate`,payload,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);

export const tooltipDataSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.productTooltip = action?.payload?.productDetail?.productTooltip ? action.payload.productDetail.productTooltip : state?.productTooltip;
    });
    builder.addCase(tooltipDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(tooltipDataRequest.fulfilled, (state, action) => {
      state.productTooltip = action.payload;
      state.isLoading = false;
    });
    builder.addCase(tooltipDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default tooltipDataSlice.reducer;