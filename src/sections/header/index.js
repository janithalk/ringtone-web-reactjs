import React, { useState, useRef, useEffect } from "react";
import "./header.scss";
import { UserMenu } from "./UserMenu";
import { LanguageMenu } from "./LanguageMenu";

import Logo from "../../assests/images/logo.png";
import LogoXs from "../../assests/images/logo-xs.png";

export const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();

  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        navBackground ? "navbar fixed-top scrolled" : "navbar fixed-top"
      }
    >
      <div className="container">
        <a className="navbar-brand" href={"index"}>
          <img src={Logo} alt="logo" className="d-none d-sm-block" />
          <img src={LogoXs} alt="logo" className="d-sm-none" />
        </a>
        <div className="d-flex align-items-center">
          <LanguageMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};
