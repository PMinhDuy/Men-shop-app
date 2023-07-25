import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import counterReducer from "./features/counter/counterSlice";
import testReduxReducer from "./features/testRedux/testReduxSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  testRedux: testReduxReducer,
});
