import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { baseURL } from "../request";
import { setLoading } from "../global";

const headers = {
  Authorization: "kljdsafjhnszldkloasyuhlkrhaslskfhnj",
  "Content-Type": "application/json",
};

const initialState = {
  isLoading: false,
  showMenu: false,
  addCart: {},
  viewDieline: {},
  mainCart: {},
  deleteProduct: {},
  editProduct: {},
  selectedForShipping: [],
};

export const addtoCartRequest = createAsyncThunk(
  "cart/addtoCartRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/add_to_cart`, payload, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {}
  }
);

export const editCartRequest = createAsyncThunk(
  "cart/editCartRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/update_cart_product`, payload, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {}
  }
);

export const getCartProductRequest = createAsyncThunk(
  "cart/getCartProductRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/get_cart_product`, payload, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {}
  }
);

export const getCartRequest = createAsyncThunk(
  "cart/getCartRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/get_user_cart`, payload, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {}
  }
);

export const deleteCartProductRequest = createAsyncThunk(
  "cart/deleteCartProductRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/delete_cart_product`, payload, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {}
  }
);

const abcd =
  typeof localStorage !== "undefined" &&
  JSON.parse(localStorage.getItem("details"));
const data = abcd && abcd.detailsData ? abcd.detailsData : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },

    setSelectedForShipping: (state, action) => {
      state.selectedForShipping = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.addCart = action?.payload?.cart?.addCart
        ? action.payload.cart.addCart
        : state?.addCart;
      state.viewDieline = action?.payload?.cart?.viewDieline
        ? action.payload.cart.viewDieline
        : state?.viewDieline;
    });
    builder.addCase(addtoCartRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addtoCartRequest.fulfilled, (state, action) => {
      state.addCart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addtoCartRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getCartProductRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartProductRequest.fulfilled, (state, action) => {
      state.viewDieline = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCartProductRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getCartRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartRequest.fulfilled, (state, action) => {
      state.mainCart = action?.payload?.cart_data
        ? { ...action.payload, cart_data: action.payload.cart_data?.reverse() }
        : action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCartRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(deleteCartProductRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCartProductRequest.fulfilled, (state, action) => {
      state.deleteProduct = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteCartProductRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(editCartRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editCartRequest.fulfilled, (state, action) => {
      state.editProduct = action.payload;
      state.isLoading = false;
    });
    builder.addCase(editCartRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setShowMenu, setSelectedForShipping } = cartSlice.actions;

export default cartSlice.reducer;
