import React from "react";
import { DropdownCustom } from "../../components/dropdown";
import { Menu } from "antd";
import { MenuItem } from "../../components/menu/MenuItem";

import UkFlag from "../../assests/images/uk-flag.png";

export const LanguageMenu = () => {
  /* Menu List */
  const LanguageMenu = (
    <Menu>
      <Menu.Item key="0">
        <MenuItem title="English" iconImg={UkFlag} />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <MenuItem title="Tamil" iconImg={UkFlag} />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <MenuItem title="Sinhala" iconImg={UkFlag} />
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownCustom overlay={LanguageMenu}>
      <MenuItem title="English" iconImg={UkFlag} />
    </DropdownCustom>
  );
};
