import React, { useMemo, useState } from 'react';
import { Typography } from '@mui/material';
import ContactForm from './components/ContactForm/ContactForm';
import Search from './components/Search/Search';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('contact')) || []
  );
  const [search, setSearch] = useState('');

  const sortList = useMemo(() => {
    return list.filter(post => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [list, search]);

  const handleDelete = id => {
    const contact = list.filter(post => post.id !== id);
    localStorage.setItem('contact', JSON.stringify(contact));
    setList(contact);
  };

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

      <ContactForm list={list} setList={setList} />

      <Typography
        variant="h3"
        color="primary"
        style={{ margin: '30px 0px', fontWeight: '700' }}
      >
        Contacts List
      </Typography>

      <Search setSearch={setSearch} />

      {sortList.length ? (
        <ContactList handleDelete={handleDelete} sortList={sortList} />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </div>
  );
}

export default App;
