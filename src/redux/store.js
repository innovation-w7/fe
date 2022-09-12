import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import LoginReducer from "./modules/LoginSlice";
import SignUpReducer from "./modules/SignUpSlice";

const middlewares = [thunk];

const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignUpReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
