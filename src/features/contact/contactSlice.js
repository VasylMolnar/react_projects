import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contact')) || [],
  search: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
        localStorage.setItem('contact', JSON.stringify(state.contacts));
      },

      prepare({ name, phone }) {
        try {
          Report.success('Post create successfully', '');
          return {
            payload: {
              id: nanoid(), //random id
              name,
              phone,
            },
          };
        } catch (e) {
          Report.failure('Error Post not create', `Error: ${e.message}`);
        }
      },
    },

    addSearch(state, action) {
      state.search = action.payload;
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        post => post.id !== action.payload.id
      );
      localStorage.setItem('contact', JSON.stringify(state.contacts));
    },
  },
});

export const getAllContact = state => state.contact.contacts;
export const getSearchValue = state => state.contact.search;

export const { addSearch, addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
