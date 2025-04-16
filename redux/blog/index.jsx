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
  blogData: {},
  blogDetail: {},
  isLoading: false,
};

// export const blogDataRequest = createAsyncThunk(
//     "blog/blogDataRequest",
//     async ({search, page}, thunkAPI) => {
//         try {
//             let response;
//             thunkAPI.dispatch(setLoading(true));
//             response = await axios.get(`http://192.168.60.166:8000/api/blogs`,{params: {search, page}},{headers}).then((response) => response.data);
//             thunkAPI.dispatch(setLoading(false));
//             return response;
//         } catch (error) {
//         }
//     }
// );
export const blogDataRequest = createAsyncThunk(
  "blog/blogDataRequest",
  async ({ search, page }, thunkAPI) => {
    try {
      // thunkAPI.dispatch(setLoading(true));

      const response = await axios.get(`${baseURL}api/blogs`, {
        params: {
          search,
          page: page || 1,
        },
        headers: {
          ...headers
        },
      });

      // thunkAPI.dispatch(setLoading(false));
      return response.data;
    } catch (error) {
      // thunkAPI.dispatch(setLoading(false));
      return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const blogDetailRequest = createAsyncThunk(
  "blog/blogDetailRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await axios.post(`${baseURL}api/blog-detail?slug=${payload}`, null, { headers }).then((response) => response.data);
      thunkAPI.dispatch(setLoading(false));
      return response;
    } catch (error) {
    }
  }
);



export const blogDataSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.blogData = action?.payload?.blog?.blogData ? action.payload.blog.blogData : state?.blogData;
      state.blogDetail = action?.payload?.blog?.blogDetail ? action.payload.blog.blogDetail : state?.blogDetail;
    });

    builder.addCase(blogDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(blogDataRequest.fulfilled, (state, action) => {
      state.blogData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(blogDataRequest.rejected, (state, action) => {
      state.isLoading = false;
    });


    builder.addCase(blogDetailRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(blogDetailRequest.fulfilled, (state, action) => {
      state.blogDetail = action.payload;
      state.isLoading = false;
    });
    builder.addCase(blogDetailRequest.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default blogDataSlice.reducer;