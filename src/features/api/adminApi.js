import { BASE_API } from "@/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ADMIN_API = `${BASE_API}/api/v1/admin`;

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ADMIN_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});
