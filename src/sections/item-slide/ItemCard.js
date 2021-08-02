import React from "react";
import { ButtonCustom } from "../../components/button";
import { DropdownCustom } from "../../components/dropdown/";
import { Menu } from "antd";
import { MenuItem } from "../../components/menu/MenuItem";
import { DrawerCustom } from "../../components/drawer";
import Icon from "../../utils/icomoon";

export const ItemCard = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <MenuItem title="Set as tone" icon="melody" />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <MenuItem title="Send as Gift" icon="gift" />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <MenuItem title="Share on Whatsapp" icon="whatsapp" />
      </Menu.Item>
      <Menu.Item key="4">
        <MenuItem title="Share on Facebook" icon="facebook" />
      </Menu.Item>
    </Menu>
  );

  return (
    <div class="item card">
      <div className="control">
        <img src={props.Img} alt="card" />
        <DrawerCustom />
      </div>
      <div className="detail">
        <h3>{props.song}</h3>
        <p className="text-truncate">{props.artist}</p>
      </div>
      <div className="extra d-flex justify-content-between align-items-center">
        <span>
          <strong>Rs {props.price} /</strong> month
        </span>
        <DropdownCustom overlay={menu} btnClass="menu-icon">
          <Icon icon="verticle-menu" size={20} />
        </DropdownCustom>
      </div>
    </div>
  );
};
