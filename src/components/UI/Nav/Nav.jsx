import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  let activeStyle = {
    color: 'red',
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ padding: '0px 0px 25px 0px' }}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
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
              to="/movies"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Movies
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/TVShow"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              TV Show
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Documentaries"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Documentaries
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
