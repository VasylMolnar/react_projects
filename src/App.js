import React, { useEffect, useMemo, useState } from 'react';
import SearchCard from './components/Search/SearchCard';
import ContactList from './components/ContactList/ContactList';
import useFetch from './hooks/useFetch';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { items, fetchError, isLoading } = useFetch(search, page);

  return (
    <div className="App">
      <SearchCard search={search} setSearch={setSearch} />

      {isLoading && Loading.dots('Loading...')}
      {fetchError && Report.failure('', fetchError)}
      {!isLoading &&
        !fetchError &&
        (Loading.remove(500),
        (<ContactList items={items} setPage={setPage} />))}
    </div>
  );
}

export default App;
