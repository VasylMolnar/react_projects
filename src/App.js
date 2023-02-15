import React, { useEffect, useMemo, useState } from 'react';
import SearchCard from './components/Search/SearchCard';
import ContactList from './components/ContactList/ContactList';
import useFetch from './hooks/useFetch';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { items, fetchError, totalHits } = useFetch(search, page, setIsLoading);

  return (
    <div className="App">
      <SearchCard
        setSearch={setSearch}
        setIsLoading={setIsLoading}
        setPage={setPage}
      />
      {isLoading && Loading.dots('Loading...')}
      {fetchError && Report.failure('', fetchError)}
      {!isLoading &&
        !fetchError &&
        (Loading.remove(1000),
        (
          <ContactList items={items} setPage={setPage} totalHits={totalHits} />
        ))}
    </div>
  );
}

export default App;
