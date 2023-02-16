import React, { useMemo, useEffect } from 'react';
import { Typography } from '@mui/material';
import ContactForm from './components/ContactForm/ContactForm';
import Search from './components/Search/Search';
import ContactList from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllContact,
  getSearchValue,
  getFetchError,
  getStatus,
} from './features/contact/contactSlice';
import { fetchContact } from './features/contact/contactSlice';

function App() {
  const dispatch = useDispatch();
  const list = useSelector(getAllContact);
  const search = useSelector(getSearchValue);
  const status = useSelector(getStatus);
  const error = useSelector(getFetchError);

  const sortList = useMemo(() => {
    return list.filter(post => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [list, search]);

  return (
    <div
      className="App"
      style={{
        maxWidth: '700px',
        margin: 'auto',
        border: '1px solid black',
        padding: '30px',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        style={{ margin: '30px 0px', fontWeight: '700' }}
      >
        <span style={{ color: 'black' }}>PHONE</span>BOOK
      </Typography>

      <ContactForm />

      <Typography
        variant="h3"
        color="primary"
        style={{ margin: '30px 0px', fontWeight: '700' }}
      >
        Contacts List
      </Typography>

      <Search />

      {sortList.length ? (
        <ContactList sortList={list} />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </div>
  );
}

export default App;
