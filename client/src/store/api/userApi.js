import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010",
    prepareHeaders: (headers, { getState }) => {
      console.log("111");
      const token = JSON.parse(localStorage.getItem("jwt"));
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["logout"],
  endpoints(builder) {
    return {
      fetchLoggedInUser: builder.query({
        providesTags: ["login"],
        query: () => {
          return {
            url: "/api/auth/getme",
            method: "GET",
          };
        },
      }),

      userLogin: builder.mutation({
        invalidatesTags: ["login"],
        query: (body) => {
          return {
            url: "/api/auth/login",
            method: "POST",
            body,
          };
        },
      }),

      userLogout: builder.mutation({
        invalidatesTags: ["logout"],
        query: () => {
          return {
            url: "/api/auth/logout",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchLoggedInUserQuery,
  useUserLoginMutation,
  useUserLogoutMutation,
} = userApi;
export { userApi };
