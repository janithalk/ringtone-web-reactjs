import React, { useState, useRef, useEffect } from "react";
import "./header.scss";
import Logo from "../../assests/images/logo.png";
import { UserMenu } from "./UserMenu";
import { LanguageMenu } from "./LanguageMenu";

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
          <img src={Logo} alt="logo" />
        </a>
        <div className="d-flex align-items-center">
          <LanguageMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};
