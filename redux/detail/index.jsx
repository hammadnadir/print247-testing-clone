import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { baseURL } from "../request";
import { setLoading } from "../global";
import { useRouter } from "next/router"; // Import the router object

const headers = {
  'Authorization': "kljdsafjhnszldkloasyuhlkrhaslskfhnj",
  'Content-Type': 'application/json'
};

const initialState = {
  detailData: {},
  showState: 1,
  isLoading: false,
};


export const detailDataRequest = createAsyncThunk(
  "detail/detailDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/product_detail?slug=${payload}`,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
      const router = useRouter(); // Get the router object
      router.push("/");
    }
  }
);


export const detailDataSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.detailData = action?.payload?.detail?.detailData ? action?.payload?.detail?.detailData : state?.detailData;
    });
    builder.addCase(detailDataRequest.pending, (state) => {
      state.isLoading = true;
      state.showState = 1;
    });
    builder.addCase(detailDataRequest.fulfilled, (state, action) => {
      state.detailData = action.payload;
      state.showState = action.payload.status ? 1 : 0;
      state.isLoading = false;
    });
    builder.addCase(detailDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.showState = 0;
    });
  },
});

export default detailDataSlice.reducer;