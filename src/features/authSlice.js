import { createSlice } from "@reduxjs/toolkit";
const InitialState = {
  user: null,
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState: InitialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
    },
    userOtpVerified: (state) => {
      state.isAuthenticated = true;
    },
    getUserData: (state, action) => {
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { userLoggedIn, getUserData, userLoggedOut, userOtpVerified } =
  authSlice.actions;
export default authSlice.reducer;
