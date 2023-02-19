import { React, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
const HomePage = lazy(() => import('./page/HomePage'));
const Cast = lazy(() => import('./page/Cast'));
const MovieDetailsPage = lazy(() => import('./page/MovieDetailsPage'));
const MoviePage = lazy(() => import('./page/MoviesPage'));
const Reviews = lazy(() => import('./page/Reviews'));
const Header = lazy(() => import('./components/Header'));

function App() {
  return (
    <div
      id="App"
      style={{
        padding: '30px 30px',
        backgroundImage:
          'linear-gradient(to right bottom, #051937, #0c2a51, #133d6d, #17518b, #1666a9)',
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />

            <Route path="movies">
              <Route index element={<MoviePage />} />

              <Route path=":movieId">
                <Route index element={<MovieDetailsPage />} />
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
