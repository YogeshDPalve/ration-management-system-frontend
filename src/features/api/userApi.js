import { BASE_API } from "@/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const USER_API = `${BASE_API}/api/v1/report`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    sendComplant: builder.mutation({
      query: (inputData) => ({
        url: "/complaint",
        method: "POST",
        body: inputData,
      }),
    }),
  }),
});

export const { useSendComplantMutation } = userApi;
