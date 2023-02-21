import { useState, React, useContext, useMemo } from 'react';
import Search from '../components/Search/Search';
import MoviesList from '../components/MoviesList/MoviesList';
import DataContext from '../context/DataContext';
import { useSort } from '../hooks/useSort';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const { movies } = useContext(DataContext);

  const movie = useMemo(() => {
    return movies.filter(el =>
      el.Title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, movies]);

  return (
    <section className="container moviesPage">
      <Search setSearch={setSearch} />
      <div style={{ margin: '100px 0px' }}>
        <MoviesList movies={movie} />
      </div>
    </section>
  );
};

export default MoviesPage;
