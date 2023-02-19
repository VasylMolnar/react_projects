import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:1234',
  }),

  tagTypes: ['Contacts'],

  endpoints: build => ({
    // Get a list of all contactss
    getContacts: build.query({
      query: () => ({ url: '/contacts' }),
      providesTags: ['Contacts'],
    }),

    // Delete selected contact
    deleteContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    // Create a new contact
    createContact: build.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    // Edit a existing contact
    changeContact: build.mutation({
      query: ({ contactId, ...contact }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useChangeContactMutation,
} = contactApi;
