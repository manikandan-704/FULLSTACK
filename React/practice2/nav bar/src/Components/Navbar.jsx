import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-con">
      <Link to="/" className="title">Navbar</Link>
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};
