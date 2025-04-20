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
      state.isAuthenticated = true;
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
