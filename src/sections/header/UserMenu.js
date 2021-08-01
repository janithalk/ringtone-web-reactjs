import React from "react";
import { DropdownCustom } from "../../components/dropdown";
import { Menu } from "antd";
import { MenuItem } from "../../components/menu/MenuItem";

import defaultAvatar from "../../assests/images/avatar.png";

export const UserMenu = () => {
  /* Menu List */
  const UserMenu = (
    <Menu>
      <Menu.Item key="0">
        <MenuItem title="My Tunes" icon="melody" />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <MenuItem title="Profile Settings" icon="settings" />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <MenuItem title="Logout" icon="logout" />
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownCustom overlay={UserMenu} btnClass="avatar ml-4">
      <img src={defaultAvatar} alt="profile picture" />
    </DropdownCustom>
  );
};
