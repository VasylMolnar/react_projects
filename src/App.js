import React, { useMemo, useState } from 'react';
import { Typography } from '@mui/material';
import ContactForm from './components/ContactForm/ContactForm';
import Search from './components/Search/Search';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [list, setList] = useState([
    { id: 1, name: 'test1', phone: '123' },
    { id: 2, name: 'test2', phone: '1223' },
    { id: 3, name: 'test3', phone: '123123' },
  ]);
  const [search, setSearch] = useState('');

  const sortList = useMemo(() => {
    return list.filter(post => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [list, search]);

  const handleDelete = id => {
    setList(list.filter(post => post.id !== id));
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
      <ContactList handleDelete={handleDelete} sortList={sortList} />
    </div>
  );
}

export default App;
