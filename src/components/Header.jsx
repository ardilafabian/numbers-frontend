import React from "react";
import logo from "../assests/static/kiwi-logo.png";
import "../assests/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} />
    </Link>
  </header>
);
export default Header;
