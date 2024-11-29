import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    getUerInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { getUerInfo } = userSlice.actions;
export default userSlice.reducer;
