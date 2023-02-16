import React, { useMemo, useEffect } from 'react';
import { Typography } from '@mui/material';
import ContactForm from './components/ContactForm/ContactForm';
import Search from './components/Search/Search';
import ContactList from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllContact,
  getFetchError,
  getStatus,
} from './features/contact/contactSlice';
import { Loading, Report, Notify } from 'notiflix';

function App() {
  const status = useSelector(getStatus);
  const error = useSelector(getFetchError);

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

      {status === 'loading' && Loading.hourglass(' Loading Items...')}
      {error && (Report.failure('Error', `${error}`), Loading.remove())}
      {status === 'succeeded' &&
        !error &&
        (Loading.remove(500), (<ContactList />))}
    </div>
  );
}

export default App;

/*
{orderedContactsIds.length ? (
        <ContactList orderedContactsIds={orderedContactsIds} />
      ) : (
        <p>Contact list is empty.</p>
      )}
      */
