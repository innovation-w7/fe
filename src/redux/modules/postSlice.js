import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../shared/api";

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPostsThunk = createAsyncThunk(
  "GET_POSTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.get("/news");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPostsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostsThunk.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export default postSlice.reducer;
