import React from "react";
import { Dropdown } from "antd";
import { ButtonCustom } from "../button";
import "./dropdown.scss";

export const DropdownCustom = (props) => {
  /* Menu List
  import { Menu } from "antd";
  
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
  */

  return (
    <Dropdown
      overlay={props.overlay}
      placement={props.placement}
      trigger={["click"]}
    >
      <ButtonCustom
        onClick={(e) => e.preventDefault()}
        btnClass={props.btnClass}
        type="ghost"
      >
        {props.children}
      </ButtonCustom>
    </Dropdown>
  );
};
