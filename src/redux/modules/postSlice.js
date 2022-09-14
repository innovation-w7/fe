import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../shared/api';

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};
const accessToken = localStorage.getItem('access-token');

export const __getPostsThunk = createAsyncThunk('GET_POSTS', async (payload, thunkAPI) => {
  try {
    const { data } = await api.get('/news');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __yesSubcribe = createAsyncThunk('YES_SUBSCRIBE', async (payload, thunkAPI) => {
  try {
    const { data } = await api.post('/main/subscribe', payload);
    console.log(data, '데이타!');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __toggleLike = createAsyncThunk('ADD_LIKE', async (newsId, thunkAPI) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'access-token': accessToken,
    };

    const response = await api.post(`auth/news/${newsId}`, newsId, { headers: headers });
    return thunkAPI.fulfillWithValue(response.data);
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
    [__toggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(state.data, '성공?');
    },
    [__toggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert('로그인을 해주세요!');
    },
  },
});
export default postSlice.reducer;
