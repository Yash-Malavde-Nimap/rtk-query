import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => ({
    // GETS ALL THE USERS
    getUsers: builder.query({
      query: () => "/users",
      refetchInterval: "30000",
    }),

    // GET USER BY ID
    getUserbyID: builder.query({
      query: (id) => `/users/${id}`,
    }),

    // ADDS A NEW USER
    addUser: builder.mutation({
      query: (payload) => ({
        url: `/users`,
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),

    // EDITS THE USER DETAILS
    editUser: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: JSON.stringify(payload),
      }),
    }),

    // DELETES AN USER WITH RESPECT TO THE ID
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserbyIDQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
} = usersAPI;
export default usersAPI;
