import React from "react";

import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Fixed navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              data-toggle="collapse"
              data-target="#navbarCollapse"
              className="nav-link"
              activeClassName="active"
              to="/"
              exact
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              data-toggle="collapse"
              data-target="#navbarCollapse"
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;