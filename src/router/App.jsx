import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Missing from '../pages/Missing';
import Nav from '../components/Nav/Nav';
import { privateRoutes, publicRoutes } from './index';

import store from '../app/store';
import { fetchContact } from '../features/contact/contactOperations';
import { authSlice } from '../features/auth/authSlice';

function App() {
  const isAuth = sessionStorage.getItem('userId');

  if (isAuth) {
    store.dispatch(fetchContact('contact'));
  } else {
    store.dispatch(authSlice.endpoints.getUsers.initiate());
  }

  return (
    <Provider store={store}>
      {isAuth ? (
        <Routes>
          <Route path="" element={<Nav />}>
            {privateRoutes.map(route => (
              <Route path={route.path} element={route.element} key={route} />
            ))}
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="" element={<Nav />}>
            {publicRoutes.map(route => (
              <Route path={route.path} element={route.element} key={route} />
            ))}
          </Route>

          <Route path="*" element={<Missing />} />
        </Routes>
      )}
    </Provider>
  );
}

export default App;
