import { React, lazy, Suspense, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
const HomePage = lazy(() => import('./page/HomePage'));
const Cast = lazy(() => import('./page/Cast'));
const MovieDetailsPage = lazy(() => import('./page/MovieDetailsPage'));
const MoviePage = lazy(() => import('./page/MoviesPage'));
const Reviews = lazy(() => import('./page/Reviews'));
const Header = lazy(() => import('./components/Header'));

export const AppRouter = () => {
  return (
    <div
      style={{
        padding: '30px 30px',
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

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
