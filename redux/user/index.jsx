import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { baseURL } from "../request";
import { setLoading } from "../global";

const headers = {
  'Authorization': "kljdsafjhnszldkloasyuhlkrhaslskfhnj",
  'Content-Type': 'application/json'
};

const initialState = {
  isLoading: false,
  updateProfile: {},
  userAddresses: {}
};

export const updateProfileRequest = createAsyncThunk(
  "profile/updateProfileRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/change_setting`, payload,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
      return null;
    }
  }
);

export const getUserAddressesRequest = createAsyncThunk(
  "profile/getUserAddressesRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .get(`${baseURL}api/getalladdress?user_id=${payload}`,{headers})
        .then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
      return null;
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.updateProfile = action?.payload?.user?.updateProfile ? action.payload.user.updateProfile : state?.updateProfile;
      state.userAddresses = action?.payload?.user?.userAddresses ? action.payload.user.userAddresses : state?.userAddresses;

    });
    builder.addCase(updateProfileRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfileRequest.fulfilled, (state, action) => {
      state.updateProfile = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateProfileRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getUserAddressesRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserAddressesRequest.fulfilled, (state, action) => {
      state.userAddresses = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUserAddressesRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
