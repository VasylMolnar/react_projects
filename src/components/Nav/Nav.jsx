import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const id = sessionStorage.getItem('userId');
  let activeStyle = {
    color: 'red',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/user/${id}`}
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
