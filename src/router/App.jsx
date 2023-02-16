import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Missing from '../pages/Missing';
import Home from '../pages/Home';

import store from '../app/store';
import { Provider } from 'react-redux';
import { fetchContact } from '../features/contact/contactSlice';
import RegisterPage from '../pages/RegisterPage';

store.dispatch(fetchContact('contact'));

function App() {
  const isAuth = false;

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/">
          {isAuth ? (
            <Route index element={<Home />} />
          ) : (
            <>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/auth" element={<RegisterPage />} />
            </>
          )}
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </Provider>
  );
}

export default App;
