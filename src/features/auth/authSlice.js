import { createEntityAdapter, nanoid } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const postsAdapter = createEntityAdapter({}); //have default []

export const initialState = {
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: initialPost => ({
        url: '/users',
        method: 'post',
        body: {
          ...initialPost,
          id: nanoid(),
          isLoggedIn: false,
          registerDate: new Date().toISOString(),
        },
      }),
    }),

    //getAllUsers for config password and name (filter by username)
    getUsers: builder.query({
      query: () => '/users',
    }),

    loginUser: builder.query({
      query: id => `/users/${id}`,
      /*
      transformResponse: responseData => {
        console.log(responseData);
        return postsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => {
        return [...result.ids.map(id => ({ type: 'Post', id }))];
      },*/
    }),
  }),
});

export const { useGetUsersQuery, useLoginUserQuery, useRegisterUserMutation } =
  authSlice; //export function from authSlice
