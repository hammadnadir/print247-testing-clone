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
    header: {},
    aboutData: {},
    isLoading: false
};

export const aboutDataRequest = createAsyncThunk(
    "about/aboutDataRequest",
    async (_, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios.get(`${baseURL}api/about-us`, { headers }).then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
        }
    }
);

export const aboutDataSlice = createSlice({
    name: "about",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            state.aboutData = action?.payload?.about?.aboutData ? action.payload.about.aboutData : state?.aboutData;
        });

        builder.addCase(aboutDataRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(aboutDataRequest.fulfilled, (state, action) => {
            state.aboutData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(aboutDataRequest.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Error:", { message: action.payload.message });
        });
        ;
    },
});

export default aboutDataSlice.reducer;