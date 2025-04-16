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
  isLoading: false,
  showMenu: false,
  pages : {}
};

export const sentslugRequest = createAsyncThunk(
  "category/sentslugRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/category?slug=${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
      return null;
    }
  }
);

export const sentPageRequest = createAsyncThunk(
  "category/sentPageRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/category_product_list?slug=${payload}`,{headers})
        .then((response) => response.data);;
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
      return null;
    }
  }
);


export const detailSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
    setCatPages: (state, action) => {
      state.pages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.category = action?.payload?.product?.category ? action.payload.product.category : state?.category;
      state.pages = action?.payload?.product?.pages ? action.payload.product.pages : state?.pages;
      state.category_detail = action?.payload?.product?.category_detail ? action.payload.product.category_detail : state?.category_detail;
      state.categoryProduct = action?.payload?.product?.categoryProduct ? action.payload.product.categoryProduct : state?.categoryProduct;
    });
    builder.addCase(sentslugRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sentslugRequest.fulfilled, (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    });
    builder.addCase(sentslugRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(sentPageRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sentPageRequest.fulfilled, (state, action) => {
      state.pages = action.payload;
      state.isLoading = false;
    });
    builder.addCase(sentPageRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setShowMenu, setCatPages
} = detailSlice.actions;

export default detailSlice.reducer;
