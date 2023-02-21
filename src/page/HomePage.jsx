import { React, useContext } from 'react';
import { Report, Loading } from 'notiflix/build/notiflix-loading-aio';

import MoviesList from '../components/MoviesList/MoviesList';
import DataContext from '../context/DataContext';
import Rating from '../components/Rating/Rating';
import Typography from '@mui/material/Typography';
import { ComingSoon } from './ComingSoon';

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

            <Typography
              variant="h2"
              component="h2"
              style={{
                textAlign: 'center',
                color: 'white',
                marginTop: '100px',
              }}
            >
              Coming
              <span style={{ color: 'red' }}>Soon</span>
            </Typography>

            <ComingSoon />
          </>
        ))}
    </section>
  );
};

export default HomePage;
