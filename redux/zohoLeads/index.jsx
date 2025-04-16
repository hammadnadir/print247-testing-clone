import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { baseURL2 } from "../request";
import { setLoading } from "../global";
import { useRouter } from "next/router";

const initialState = {
  leadsData: {},
  authData: {},
  isLoading: false,
};


export const zohoAuthRequest = createAsyncThunk(
  "zohoLeads/zohoAuthRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL2}oauth/v2/token`)
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
      console.error(error)
    }
  }
);

export const postLeadsRequest = createAsyncThunk(
  "zohoLeads/postLeadsRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`/api/submit-lead`, payload, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
      console.error(error)
    }
  }
);


export const leadsDataSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.authData = action?.payload?.zohoLeads?.authData ? action?.payload?.zohoLeads?.authData : state?.authData;
      state.leadsData = action?.payload?.zohoLeads?.leadsData ? action?.payload?.zohoLeads?.leadsData : state?.leadsData;
    });

    builder.addCase(zohoAuthRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(zohoAuthRequest.fulfilled, (state, action) => {
      state.authData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(zohoAuthRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(postLeadsRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postLeadsRequest.fulfilled, (state, action) => {
      state.leadsData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(postLeadsRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default leadsDataSlice.reducer;