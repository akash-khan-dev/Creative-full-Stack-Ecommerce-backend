import { configureStore } from "@reduxjs/toolkit";
// Import your slices here
import userSlice from "../userSlice";

export const store = configureStore({
  reducer: {
    LoginInfo: userSlice,
  },
});

export default store;
