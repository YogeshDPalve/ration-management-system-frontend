import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../authSlice";
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
          dispatch(userLoggedIn({ user: result.data.userInfo }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    generateOtp: builder.mutation({
      query: (rationId) => ({
        url: "/generate-otp",
        method: "POST",
        body: rationId,
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ mobileNo, otp }) => ({
        url: "/verify-otp",
        method: "POST",
        body: { mobileNo, otp },
      }),
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGenerateOtpMutation,
  useVerifyOtpMutation,
} = authApi;
