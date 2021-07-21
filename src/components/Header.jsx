import React from "react";
import logo from "@assets/static/kiwi-logo.png";
import STRINGS from "@constants/strings";
import "@assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="header">
    <Link to="/">
      <img src={logo} alt={STRINGS.HEADER.LOGO_ALT}/>
    </Link>
    <div className="header__buttons">
      {props.module !== 'algorithm' &&
        <Link to="/algorithm">
          <p className="header__buttons__button">Algorithm</p>
        </Link>
      }
      {props.module !== 'process' &&
        <Link to="/process">
          <p className="header__buttons__button">Explanation</p>
        </Link>
      }
      {props.module !== 'home' &&
        <Link to="/">
          <p className="header__buttons__button">Home</p>
        </Link>
      }
    </div>
  </header>
);
export default Header;
