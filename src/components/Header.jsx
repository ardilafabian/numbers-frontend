import React from "react";
import logo from "@assets/static/kiwi-logo.png";
import STRINGS from "@constants/strings";
import "@assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} alt={STRINGS.HEADER.LOGO_ALT}/>
    </Link>
    <div className="header__buttons">
      <Link>
        <p className="header__buttons__button">Algorithm</p>
      </Link>
      <Link>
        <p className="header__buttons__button">How I did it</p>
      </Link>
    </div>
  </header>
);
export default Header;
