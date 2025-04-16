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
  contactsData: {},
  isLoading: false,
};


export const contactsDataRequest = createAsyncThunk(
    "contacts/contactsDataRequest",
    async (_, thunkAPI) => {
      try {
        let response;
        thunkAPI.dispatch(setLoading(true));
        response = await axios.get(`${baseURL}api/contact_us/faq`,{headers}).then((response) => response.data);
          thunkAPI.dispatch(setLoading(false));
          return response;
      } catch (error) {
      }
    }
  );

export const contactsDataSlice = createSlice({
    name: "header",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action) => {
        state.header = action?.payload?.contacts?.header ? action.payload.contacts.header : state?.header;
        state.contactsData = action?.payload?.contacts?.contactsData ? action.payload.contacts.contactsData : state?.contactsData;
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

  
      builder.addCase(contactsDataRequest.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(contactsDataRequest.fulfilled, (state, action) => {
        state.contactsData = action.payload;
        state.isLoading = false;
      });
      builder.addCase(contactsDataRequest.rejected, (state, action) => {
        state.isLoading = false;
      });
;
    },
  });
  
  export default contactsDataSlice.reducer;