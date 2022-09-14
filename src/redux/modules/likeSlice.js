import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../shared/api';

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};
const accessToken = localStorage.getItem('access-token');

export const __toggleLike = createAsyncThunk('ADD_LIKE', async (newsId, thunkAPI) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'access-token': accessToken,
    };

    const { data } = await api.post(`/auth/news/${newsId}`, newsId, { headers: headers });
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: {
    [__toggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.likes = action.payload;
      console.log(state.likes, '성공?');
    },
    [__toggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(state.error, '좋아요 에러');
    },
  },
});
export default likeSlice.reducer;
