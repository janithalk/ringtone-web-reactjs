import React from "react";
import { DropdownCustom } from "../../components/dropdown";
import { Menu } from "antd";
import { MenuItem } from "../../components/menu/MenuItem";

import EnglishFlag from "../../assests/images/lang-english.png";
import SinhalaFlag from "../../assests/images/lang-sinhala.png";
import TamilFlag from "../../assests/images/lang-tamil.png";

export const LanguageMenu = () => {
  /* Menu List */
  const LanguageMenu = (
    <Menu>
      <Menu.Item key="0">
        <MenuItem title="English" iconImg={EnglishFlag} />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <MenuItem title="Tamil" iconImg={TamilFlag} />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <MenuItem title="Sinhala" iconImg={SinhalaFlag} />
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownCustom overlay={LanguageMenu}>
      <MenuItem title="English" iconImg={EnglishFlag} />
    </DropdownCustom>
  );
};
