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
  priceChange: {},
  isLoading: false,
};


export const updatedPriceRequest = createAsyncThunk(
  "price/updatedPriceRequest",
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


export const priceDataSlice = createSlice({
  name: "price",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.priceChange = action?.payload?.price?.priceChange ? action.payload.price.priceChange : state?.priceChange;
    });
    builder.addCase(updatedPriceRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatedPriceRequest.fulfilled, (state, action) => {
      state.priceChange = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updatedPriceRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default priceDataSlice.reducer;