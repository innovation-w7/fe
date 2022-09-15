import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import LoginReducer from './modules/LoginSlice';
import SignUpReducer from './modules/SignUpSlice';
import posts from './modules/postSlice';
import likes from './modules/likeSlice';

const middlewares = [thunk];

const rootReducer = combineReducers({
  posts: posts,
  login: LoginReducer,
  signup: SignUpReducer,
  likes: likes,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
