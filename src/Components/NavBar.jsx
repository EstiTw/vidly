import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav mr-auto">
          <NavLink className="nav-link" to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-link" to="/customers">
            Customers <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-link" to="/rentals">
            Rentals <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-link" to="/login">
            Login <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register <span className="sr-only">(current)</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
