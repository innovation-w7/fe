import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import posts from './modules/postSlice';

const middlewares = [thunk];

const rootReducer = combineReducers({ posts });

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
