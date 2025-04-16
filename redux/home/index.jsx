import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { baseURL } from "../request";
import { setLoading } from "../global";
// import {headers} from "../../utils"

const headers = {
  'Authorization': "kljdsafjhnszldkloasyuhlkrhaslskfhnj",
  'Content-Type': 'application/json'
};

const initialState = {
  header: {},
  homeData: {},
  searchData: {data: []},
  emailSubscription: {},
  isLoading: false,
};


export const headerDataRequest = createAsyncThunk(
  "header/headerDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        // .get(`${baseURL}api/page_header_list`,{headers})
        .get(payload ? `${baseURL}api/page_header_list?user_id=${payload}` : `${baseURL}api/page_header_list` ,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);

export const searchDataRequest = createAsyncThunk(
  "search/searchDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/search`, payload,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);


export const homeDataRequest = createAsyncThunk(
  "home/homeDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/home_page`,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);


export const emailSubscrriptionRequest = createAsyncThunk(
  "email/emailSubscrriptionRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/subscribe/newsletter?email=${payload}`,{headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) { 
    }
  }
);

export const homeDataSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setInputStateData: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.header = action?.payload?.home?.header ? action.payload.home.header : state?.header;
      state.homeData = action?.payload?.home?.homeData ? action.payload.home.homeData : state?.homeData;
    });
    builder.addCase(headerDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(headerDataRequest.fulfilled, (state, action) => {
      state.header = action.payload;
      state.isLoading = false;
    });
    builder.addCase(headerDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(homeDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(homeDataRequest.fulfilled, (state, action) => {
      state.homeData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(homeDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(searchDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchDataRequest.fulfilled, (state, action) => {
      state.searchData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.searchData = {data: []};
    });

    builder.addCase(emailSubscrriptionRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(emailSubscrriptionRequest.fulfilled, (state, action) => {
      state.emailSubscription = action.payload;
      state.isLoading = false;
    });
    builder.addCase(emailSubscrriptionRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setInputStateData
} = homeDataSlice.actions;

export default homeDataSlice.reducer;