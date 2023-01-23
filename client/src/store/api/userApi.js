import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010",
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("jwt"));
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchLoggedInUser: builder.query({
        providesTags: ["user"],
        query: () => {
          return {
            url: "/api/auth/getme",
            method: "GET",
          };
        },
      }),

      userLogin: builder.mutation({
        invalidatesTags: ["user"],
        query: (body) => {
          return {
            url: "/api/auth/login",
            method: "POST",
            body,
          };
        },
      }),
    };
  },
});

export const { useFetchLoggedInUserQuery, useUserLoginMutation } = userApi;
export { userApi };
