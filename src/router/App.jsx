import React from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './index';

import store from '../app/store';
import { Provider } from 'react-redux';
import { fetchContact } from '../features/contact/contactSlice';
import Missing from '../pages/Missing';

store.dispatch(fetchContact('contact'));

function App() {
  const isAuth = false;

  return (
    <Provider store={store}>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(route => (
            <Route path={route.path} element={route.element} key={route} />
          ))}
          <Route path="*" element={<Missing />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(route => (
            <Route path={route.path} element={route.element} key={route} />
          ))}
          <Route path="*" element={<Missing />} />
        </Routes>
      )}
    </Provider>
  );
}

export default App;
