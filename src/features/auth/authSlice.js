import { createEntityAdapter, nanoid } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const postsAdapter = createEntityAdapter(); //have default []
export const initialState = postsAdapter.getInitialState();

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

    //getAllUsers for config password and name (filter by username) (server in react)
    getUsers: builder.query({
      query: () => '/users',

      /*useLoginUser.js and UserPage.jsx we add this code
      transformResponse: responseData => {
        return postsAdapter.setAll(initialState, responseData);
      },

      providesTags: ['User'],*/
    }),

    loginUser: builder.query({
      //this we use if we have server (in here we don't have')(UserPage.jsx and useLoginUser.js)
      query: id => `/users/${id}`,

      transformResponse: responseData => {
        return { ...responseData, isLoggedIn: true };
      },
    }),
  }),
});

export const { useGetUsersQuery, useLoginUserQuery, useRegisterUserMutation } =
  authSlice; //export function from authSlice
