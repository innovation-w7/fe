import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import instance from '../../shared/api';

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPostsThunk = createAsyncThunk('GET_POSTS', async (payload, thunkAPI) => {
  try {
    const { data } = await instance.get('/news');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __yesSubcribe = createAsyncThunk('YES_SUBSCRIBE', async (payload, thunkAPI) => {
  try {
    console.log(payload, '페이로드');

    const { data } = await instance.post('/main/subscribe', payload);
    console.log(data, '데이타!');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postSlice = createSlice({
  name: 'posts',
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
    [__yesSubcribe.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        alert('구독을 다시 신청해주세요!');
        document.location.href = '/';
      }
    },
    [__yesSubcribe.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__yesSubcribe.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export default postSlice.reducer;
