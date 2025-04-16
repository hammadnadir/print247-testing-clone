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
    catalogData: {},
    isLoading: false,
};

export const catalogDataRequest = createAsyncThunk(
    "catalog/catalogDataRequest",
    async (_, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios.get(`${baseURL}api/catalog`,{headers}).then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
        }
    }
);

export const catalogDataSlice = createSlice({
    name: "header",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            state.header = action?.payload?.catalog?.header ? action.payload.catalog.header : state?.header;
            state.catalogData = action?.payload?.catalog?.catalogData ? action.payload.catalog.catalogData : state?.catalogData;
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

        
        builder.addCase(catalogDataRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(catalogDataRequest.fulfilled, (state, action) => {
            state.catalogData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(catalogDataRequest.rejected, (state, action) => {
            state.isLoading = false;
        });
        ;
    },
});

export default catalogDataSlice.reducer;