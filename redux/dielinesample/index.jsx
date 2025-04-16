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
    dielinesample: {},
    isLoading: false,
};

export const dielineSampleRequest = createAsyncThunk(
    "dieline/dielineSampleRequest",
    async (payload, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios
                .post(`${baseURL}api/need/dieline/template`, payload,{headers})
                .then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {

        }
    }
);

export const dielineDataSlice = createSlice({
    name: "dieline",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            state.dielinesample = action?.payload?.home?.dielinesample ? action.payload.home.dielinesample : state?.dielinesample;
        });
        builder.addCase(dielineSampleRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(dielineSampleRequest.fulfilled, (state, action) => {
            state.dielinesample = action.payload;
            state.isLoading = false;
        });
        builder.addCase(dielineSampleRequest.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default dielineDataSlice.reducer;