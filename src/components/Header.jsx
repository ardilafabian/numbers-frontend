import React from "react";
import logo from "@assets/static/kiwi-logo.png";
import "@assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} />
    </Link>
  </header>
);
export default Header;
