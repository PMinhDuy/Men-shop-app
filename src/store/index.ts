import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import userSlice from "./features/users/userSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
