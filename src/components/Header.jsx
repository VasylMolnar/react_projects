import React from 'react';
import { Outlet } from 'react-router';
import Nav from './UI/Nav/Nav';

const Header = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Header;
