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
  paymentData: {},
  checkoutData: {},
  checkoutCart: {},
  submitShipping: {},
  orderSubmit: {},
  cardsData: {},
  addCard: {},
  orderData: {},
  addCoupan: {},
  mainCheckout: {},
  updateAddress: {},
  deleteAddress: {},
  finalOrderUpdate: {},
  removeCard: {},
  trackOrder: {},
  estimatedCost: {},
  viewOrder: {},
  timeTransit: {},
  isLoading: false,
};


export const paymentDataRequest = createAsyncThunk(
  "payment/paymentDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/addshipment`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const addresssUpdateRequest = createAsyncThunk(
  "payment/addresssUpdateRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/updatecustomeraddress`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const deleteAddresssRequest = createAsyncThunk(
  "payment/deleteAddresssRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/deleteCustomerAddress`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const orderHistoryRequest = createAsyncThunk(
  "payment/orderHistoryRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/getallorder?id=${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const coupanAddRequest = createAsyncThunk(
  "payment/coupanAddRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/apply_coupon`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const mainCheckoutRequest = createAsyncThunk(
  "payment/mainCheckoutRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/getfullorder/${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);



export const orderUpdateRequest = createAsyncThunk(
  "payment/orderUpdate",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/order_draft_status_update`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const checkoutDataRequest = createAsyncThunk(
  "payment/checkoutDataRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/create_order`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const checkoutCartRequest = createAsyncThunk(
  "payment/checkoutCartRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/order/${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const shippingSubmitRequest = createAsyncThunk(
  "payment/shippingSubmitRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/order_update`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const orderSubmitRequest = createAsyncThunk(
  "payment/orderSubmitRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/order/${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const getAllCardRequest = createAsyncThunk(
  "payment/getAllCardRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/carddetail?id=${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const addCardRequest = createAsyncThunk(
  "payment/addCardRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/addcarddetail`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const transectionHistoryRequest = createAsyncThunk(
  "payment/transectionHistoryRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/transectionhistory${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const removeCardRequest = createAsyncThunk(
  "payment/removeCardRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/remove_card`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const trackOrderRequest = createAsyncThunk(
  "payment/trackOrderRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/track-order`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const timeTransitRequest = createAsyncThunk(
  "payment/timeTransitRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/time_in_transit`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);
export const estimatedCostRequest = createAsyncThunk(
  "payment/estimatedCostRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/landed_cost`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const reOrderRequest = createAsyncThunk(
  "payment/reOrderRequest+",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/reorder`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);

export const viewOrderRequest = createAsyncThunk(
  "payment/viewOrderRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/view-order`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);


export const paymentDataSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.paymentData = action?.payload?.payment?.paymentData ? action.payload.payment.paymentData : state?.paymentData;
      state.checkoutCart = action?.payload?.payment?.checkoutCart ? action.payload.payment.checkoutCart : state?.checkoutCart;
      state.cardsData = action?.payload?.payment?.cardsData ? action.payload.payment.cardsData : state?.cardsData;
      state.addCard = action?.payload?.payment?.addCard ? action.payload.payment.addCard : state?.addCard;
      state.orderData = action?.payload?.payment?.orderData ? action.payload.payment.orderData : state?.orderData;
      state.addCoupan = action?.payload?.payment?.addCoupan ? action.payload.payment.addCoupan : state?.addCoupan;
      state.mainCheckout = action?.payload?.payment?.mainCheckout ? action.payload.payment.mainCheckout : state?.mainCheckout;
      state.updateAddress = action?.payload?.payment?.updateAddress ? action.payload.payment.updateAddress : state?.updateAddress;
      state.finalOrderUpdate = action?.payload?.payment?.finalOrderUpdate ? action.payload.payment.finalOrderUpdate : state?.finalOrderUpdate;
      state.trackOrder = action?.payload?.payment?.trackOrder ? action.payload.payment.trackOrder : state?.trackOrder;
      state.estimatedCost = action?.payload?.payment?.estimatedCost ? action.payload.payment.estimatedCost : state?.estimatedCost;
      state.viewOrder = action?.payload?.payment?.viewOrder ? action.payload.payment.viewOrder : state?.viewOrder;
      state.timeTransit = action?.payload?.payment?.timeTransit ? action.payload.payment.timeTransit : state?.timeTransit;
      
    });
    builder.addCase(paymentDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(paymentDataRequest.fulfilled, (state, action) => {
      state.paymentData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(paymentDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(checkoutDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkoutDataRequest.fulfilled, (state, action) => {
      state.checkoutData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(checkoutDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(checkoutCartRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkoutCartRequest.fulfilled, (state, action) => {
      state.checkoutCart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(checkoutCartRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(shippingSubmitRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(shippingSubmitRequest.fulfilled, (state, action) => {
      state.submitShipping = action.payload;
      state.isLoading = false;
    });
    builder.addCase(shippingSubmitRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(orderSubmitRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(orderSubmitRequest.fulfilled, (state, action) => {
      state.orderSubmit = action.payload;
      state.isLoading = false;
    });
    builder.addCase(orderSubmitRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getAllCardRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCardRequest.fulfilled, (state, action) => {
      state.cardsData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCardRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(addCardRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addCardRequest.fulfilled, (state, action) => {
      state.cardsData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addCardRequest.rejected, (state, action) => {
      state.isLoading = false;
    });


    builder.addCase(orderHistoryRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(orderHistoryRequest.fulfilled, (state, action) => {
      state.orderData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(orderHistoryRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(coupanAddRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(coupanAddRequest.fulfilled, (state, action) => {
      state.addCoupan = action.payload;
      state.isLoading = false;
    });
    builder.addCase(coupanAddRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(mainCheckoutRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(mainCheckoutRequest.fulfilled, (state, action) => {
      state.mainCheckout = action.payload;
      state.addCoupan = action.payload?.data?.cuopon ? {coupon: action.payload?.data?.cuopon} : {};
      state.isLoading = false;
    });
    builder.addCase(mainCheckoutRequest.rejected, (state, action) => {
      state.isLoading = false;
    });


    builder.addCase(addresssUpdateRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addresssUpdateRequest.fulfilled, (state, action) => {
      state.updateAddress = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addresssUpdateRequest.rejected, (state, action) => {
      state.isLoading = false;
    });


    builder.addCase(deleteAddresssRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteAddresssRequest.fulfilled, (state, action) => {
      state.deleteAddress = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteAddresssRequest.rejected, (state, action) => {
      state.isLoading = false;
    });


    builder.addCase(orderUpdateRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(orderUpdateRequest.fulfilled, (state, action) => {
      state.finalOrderUpdate = action.payload;
      state.isLoading = false;
    });
    builder.addCase(orderUpdateRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(removeCardRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeCardRequest.fulfilled, (state, action) => {
      state.removeCard = action.payload;
      state.isLoading = false;
    });
    builder.addCase(removeCardRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(trackOrderRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(trackOrderRequest.fulfilled, (state, action) => {
      state.trackOrder = action.payload;
      state.isLoading = false;
    });
    builder.addCase(trackOrderRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(timeTransitRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(timeTransitRequest.fulfilled, (state, action) => {
      state.timeTransit = action.payload;
      state.isLoading = false;
    });
    builder.addCase(timeTransitRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(estimatedCostRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(estimatedCostRequest.fulfilled, (state, action) => {
      state.estimatedCost = action.payload;
      state.isLoading = false;
    });
    builder.addCase(estimatedCostRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    
    builder.addCase(viewOrderRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(viewOrderRequest.fulfilled, (state, action) => {
      state.viewOrder = action.payload;
      state.isLoading = false;
    });
    builder.addCase(viewOrderRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
    
  },
});

export default paymentDataSlice.reducer;