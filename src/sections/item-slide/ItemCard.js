import React from "react";
import { ButtonCustom } from "../../components/button";
import { DropdownCustom } from "../../components/dropdown/";
import { Menu } from "antd";
import { DrawerCustom } from "../../components/drawer";
import Icon from "../../utils/icomoon";

import AlbumImage1 from "../../assests/images/song-1.png";
import AlbumImage2 from "../../assests/images/song-2.png";

export const ItemCard = () => {
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
    <div class="item card">
      <div>
        <img src={AlbumImage1} alt="card" />
        <DrawerCustom />
      </div>
      <div>
        <h4>Senorita</h4>
        <p>Shawn Medis</p>
      </div>
      <div>
        <span>Rs 200 / month</span>
        <DropdownCustom overlay={menu}>
          <Icon icon="verticle-menu" size={20} />
        </DropdownCustom>
      </div>
    </div>
  );
};
