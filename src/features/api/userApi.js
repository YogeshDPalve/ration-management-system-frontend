import { BASE_API } from "@/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USER_API = `${BASE_API}/api/v1/report`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    sendComplaint: builder.mutation({
      query: (inputData) => ({
        url: "/complaint",
        method: "POST",
        body: inputData,
      }),
    }),
    sendFeedback: builder.mutation({
      query: (inputData) => ({
        url: "/feedback",
        method: "POST",
        body: inputData,
      }),
    }),
  }),
});

export const { useSendComplaintMutation, useSendFeedbackMutation } = userApi;
