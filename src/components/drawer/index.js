import React, { Fragment, useState } from "react";
import { Drawer } from "antd";
import { ButtonCustom } from "../button";
import Icon from "../../utils/icomoon";

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
      <ButtonCustom type="primary" onClick={showDrawer} btnClass="control-btn">
        <Icon icon="play" className="icon" />
      </ButtonCustom>
      <Drawer
        placement="bottom"
        closable={true}
        onClose={onClose}
        visible={visible}
        mask={false}
        height={100}
      >
        {props.children}
      </Drawer>
    </Fragment>
  );
};
