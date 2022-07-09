import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h2>LOGO</h2>
      <ul className="subnavbar" type="None">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
