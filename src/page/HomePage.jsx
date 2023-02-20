import { React, useContext } from 'react';
import { Report, Loading } from 'notiflix/build/notiflix-loading-aio';

import MoviesList from '../components/MoviesList/MoviesList';
import DataContext from '../context/DataContext';
import Rating from '../components/Rating/Rating';

const HomePage = () => {
  const { movies, isLoading, fetchError } = useContext(DataContext);

  return (
    <section className="HomePage section">
      {isLoading && Loading.circle('Loading...')}
      {fetchError &&
        (Report.failure('Error', `${fetchError}`), Loading.remove())}
      {!isLoading &&
        !fetchError &&
        (Loading.remove(),
        (
          <>
            <Rating movies={movies} />
            <MoviesList movies={movies} />
          </>
        ))}
    </section>
  );
};

export default HomePage;
