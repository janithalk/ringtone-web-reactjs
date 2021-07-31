import React, { useState, useRef, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import "./header.scss";

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

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
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
          Logo
        </a>
        <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <button
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Language
            </button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <button
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              User
            </button>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};
