import React, { Fragment, useState } from "react";
import { Drawer } from "antd";
import { ControlButton } from "../button/ControlButton";
import "./drawer.scss";

export const DrawerCustom = (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <ControlButton type="play" onClick={showDrawer} />
      <Drawer
        placement="bottom"
        closable={true}
        onClose={onClose}
        visible={visible}
        mask={false}
        height={130}
      >
        {props.children}
      </Drawer>
    </Fragment>
  );
};
