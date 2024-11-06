import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid m-2">
        <a className="navbar-brand w-100" href="abcd">PORTFOLIO</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <Link to="/home" style={{ textDecoration: 'none', color: 'darkgray' }}>
                HOME
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/contact" style={{ textDecoration: 'none', color: 'darkgray' }}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
