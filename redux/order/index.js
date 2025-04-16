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
    orderData: {},
    isLoading: false,
    submitData: {},
};

export const HelpSubmitRequest = createAsyncThunk(
    "data/HelpSubmitRequest",
    async (payload, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios
                .post(`${baseURL}api/need-help`,payload, {headers})
                .then((response) => response.data);
                thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
        }
    }
);

export const orderDataDetailRequest = createAsyncThunk(
    "price/updatedPriceRequest",
    async (payload, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios
                .post(`${baseURL}api/getorderdetail`, { order_id: payload },{headers})
                .then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
        }
    }
);


export const orderDetailSlice = createSlice({
    name: "orderDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            state.orderData = action?.payload?.order?.orderData ? action.payload.order.orderData : state?.orderData;
            state.submitData = action?.payload?.order?.submitData ? action.payload.order.submitData : state?.submitData;
        });
        builder.addCase(orderDataDetailRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(orderDataDetailRequest.fulfilled, (state, action) => {
            state.orderData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(orderDataDetailRequest.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(HelpSubmitRequest.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(HelpSubmitRequest.fulfilled, (state, action) => {
            state.submitData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(HelpSubmitRequest.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Error:", { message: action.payload.message });
        });
    },
});

export default orderDetailSlice.reducer;