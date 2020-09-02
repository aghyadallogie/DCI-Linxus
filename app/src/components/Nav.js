import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>Linxus</h1>
      </Link>

      <ul className="nav-links">
        <Link to="/about">
          <li>About us</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

//navbar that changes to hambuger menu in mobile
export default Nav;
