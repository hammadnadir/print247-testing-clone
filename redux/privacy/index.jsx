import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { baseURL } from "../request";
import { setLoading } from "../global";
import { headerDataRequest } from "../home";

const headers = {
    'Authorization': "kljdsafjhnszldkloasyuhlkrhaslskfhnj",
    'Content-Type': 'application/json'
  };
  
const initialState = {
    header: {},
    privacyData: {},
    isLoading: false,
};

export const privacyDataRequest = createAsyncThunk(
    "privacy/privacyDataRequest",
    async (_, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios.get(`${baseURL}api/privacy-policy`,{headers}).then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
        }
    }
);

export const privacyDataSlice = createSlice({
    name: "header",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            state.header = action?.payload?.privacy?.header ? action.payload.privacy.header : state?.header;
            state.privacyData = action?.payload?.privacy?.privacyData ? action.payload.privacy.privacyData : state?.privacyData;
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

        
        builder.addCase(privacyDataRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(privacyDataRequest.fulfilled, (state, action) => {
            state.privacyData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(privacyDataRequest.rejected, (state, action) => {
            state.isLoading = false;
        });
        ;
    },
});

export default privacyDataSlice.reducer;