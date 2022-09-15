import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

//const accessToken = localStorage.getItem('access-token');

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __toggleLike = createAsyncThunk(
  "ADD_LIKE",
  async (payload, thunkAPI) => {
    const newsId = payload[0];
    const accessToken = payload[1];

    try {
      const headers = {
        "Content-Type": "application/json",
        "access-token": accessToken,
      };

      const { data } = await api.post(`/auth/news/${newsId}`, newsId, {
        headers: headers,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    [__toggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.likes = action.payload;
    },
    [__toggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default likeSlice.reducer;
