import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pageLoading: false,
  showConsole: 0,
  showShimmer: false
};

const globalSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
    setShowConsole: (state, action) => {
      state.showConsole = action.payload;
    },
    setShowShimmer: (state, action) => {
      state.showShimmer = action.payload;
    },
  },
  extraReducers: () => { },
});

export const { setLoading, setPageLoading, setShowConsole, setShowShimmer } = globalSlice.actions;

export default globalSlice.reducer;