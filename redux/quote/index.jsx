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
  selectedProduct: "",
  selectedSubProduct: "",
  selectedData: {},
  quantity: 0,
  mainFile: [],
  customerDetails: {
    fullName: "",
    email: "",
    phone_no: "",
    company: "",
  },
  errors: {},
  loader: false,
  isLoading: false,
};


export const quoteDataRequest = createAsyncThunk(
  "quote/quoteDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/site-map?print247_sitemap=1`, null, { headers })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const quoteDataSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedSubProduct: (state, action) => {
      state.selectedSubProduct = action.payload;
    },
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setMainFile: (state, action) => {
      state.mainFile = action.payload;
    },
    setCustomerDetails: (state, action) => {
      state.customerDetails = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.quotePageData = action?.payload?.quote?.quotePageData ? action.payload.quote.quotePageData : state?.quotePageData;
    });
    builder.addCase(quoteDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(quoteDataRequest.fulfilled, (state, action) => {
      state.quotePageData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(quoteDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setSelectedProduct,
  setSelectedSubProduct,
  setSelectedData,
  setQuantity,
  setCustomerDetails,
  setMainFile,
  setLoader,
  setErrors
} = quoteDataSlice.actions;

export default quoteDataSlice.reducer;