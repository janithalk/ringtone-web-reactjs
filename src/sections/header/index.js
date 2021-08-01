import React, { useState, useRef, useEffect } from "react";
import { DropdownCustom } from "../../components/dropdown";
import { Menu } from "antd";

import "./header.scss";
import Logo from "../../assests/images/logo.png";

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

  /* Languagae Menu List */
  const LanguageMenu = (
    <Menu>
      <Menu.Item key="0">English</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">Tamil</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Sinhala</Menu.Item>
    </Menu>
  );

  /* Languagae Menu List */
  const UserMenu = (
    <Menu>
      <Menu.Item key="0">My Tunes</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">Profile Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <nav
      className={
        navBackground ? "navbar fixed-top scrolled" : "navbar fixed-top"
      }
    >
      <div className="container ">
        <a className="navbar-brand" href={"index"}>
          <img src={Logo} alt="logo" />
        </a>
        <div>
          <DropdownCustom overlay={LanguageMenu} title="Language" />
          <DropdownCustom overlay={UserMenu} title="User" />
        </div>
      </div>
    </nav>
  );
};
