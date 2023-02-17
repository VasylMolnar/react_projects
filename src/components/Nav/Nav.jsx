import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const id = localStorage.getItem('userId');

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/user/${id}`} className="nav-link">
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
