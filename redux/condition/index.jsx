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
    conditionData: {},
    isLoading: false,
};


export const conditionDataRequest = createAsyncThunk(
    "condition/conditionDataRequest",
    async (_, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios.get(`${baseURL}api/terms-conditions`,{headers}).then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
        }
    }
);

export const conditionDataSlice = createSlice({
    name: "header",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            state.header = action?.payload?.condition?.header ? action.payload.condition.header : state?.header;
            state.conditionData = action?.payload?.condition?.conditionData ? action.payload.condition.conditionData : state?.conditionData;
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


        builder.addCase(conditionDataRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(conditionDataRequest.fulfilled, (state, action) => {
            state.conditionData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(conditionDataRequest.rejected, (state, action) => {
            state.isLoading = false;
        });
        ;
    },
});

export default conditionDataSlice.reducer;

