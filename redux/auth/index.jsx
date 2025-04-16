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
  loginData: {},
  signUpData: {},
  forgotData: {},
  changePasswordData: {},
  otpData: {},
  googleLoginData: {},
  isLoading: false,
};


export const signUpRequest = createAsyncThunk(
  "signup/signUpRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/signup`, payload, {headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);

export const googleLoginRequest = createAsyncThunk(
  "login/googleLoginRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}/api/google/login`, payload, {headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }

);

export const forgotRequest = createAsyncThunk(
  "forgot/forgotRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/forgot_password`, payload, {headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);


export const otpCheckRequest = createAsyncThunk(
  "otp/otpCheckRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/otp_check`, payload, {headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);


export const loginRequest = createAsyncThunk(
  "login/loginRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/login`, payload, {headers})
        .then((response) => response);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);

export const changePasswordRequest = createAsyncThunk(
  "password/changePasswordRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios
        .post(`${baseURL}api/change_password`, payload, {headers})
        .then((response) => response.data);
        thunkAPI.dispatch(setLoading(false));
        return response;
    } catch (error) {
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.signUpData = action?.payload?.auth?.signUpData ? action.payload.auth.signUpData : state?.signUpData;
      state.googleLoginData = action?.payload?.auth?.googleLoginData ? action.payload.auth.googleLoginData : state?.googleLoginData;
    });
    builder.addCase(signUpRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpRequest.fulfilled, (state, action) => {
      state.signUpData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signUpRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(forgotRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotRequest.fulfilled, (state, action) => {
      state.forgotData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(forgotRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(otpCheckRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(otpCheckRequest.fulfilled, (state, action) => {
      state.otpData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(otpCheckRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(changePasswordRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changePasswordRequest.fulfilled, (state, action) => {
      state.changePasswordData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(changePasswordRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(loginRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loginData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(googleLoginRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(googleLoginRequest.fulfilled, (state, action) => {
      state.googleLoginData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(googleLoginRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;