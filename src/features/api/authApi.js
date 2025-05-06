import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut, userOtpVerified } from "../authSlice";
import { BASE_API } from "@/constants/constants";

const USER_API = `${BASE_API}/api/v1/user`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "/register",
        method: "POST",
        body: inputData,
      }),
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "/login",
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("get user data", result.data.userInfo);
          dispatch(userLoggedIn({ user: result.data.userInfo }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    generateLoginOtp: builder.mutation({
      query: (rationId) => ({
        url: "/generate-login-otp",
        method: "POST",
        body: rationId,
      }),
    }),
    generateResetOtp: builder.mutation({
      query: (rationId) => ({
        url: "/generate-reset-otp",
        method: "POST",
        body: rationId,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (otp) => ({
        url: "/verify-otp",
        method: "POST",
        body: otp,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("result from getuser", result);
          dispatch(userOtpVerified());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    resetPassword: builder.mutation({
      query: (passwordData) => ({
        url: "/reset-password",
        method: "PUT",
        body: passwordData,
      }),
    }),
    getUser: builder.query({
      query: (rationId) => ({
        url: `/get-user-info/${rationId}`,
        method: "GET",
      }),
    }),
    logout: builder.query({
      query: (rationId) => ({
        url: `/logout?rationId=${rationId}`,
        method: "GET",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGenerateLoginOtpMutation,
  useGenerateResetOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useGetUserQuery,
  useLazyLogoutQuery,
} = authApi;
