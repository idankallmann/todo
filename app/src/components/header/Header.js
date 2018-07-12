import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
  contsructor() {
  }
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/user">User</Link>
              <Link className="nav-item nav-link" to="/admin">Admin</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
