import React, { useRef } from "react";
import Icon from "../../utils/icomoon";
import "./menuitem.scss";

export const MenuItem = (props) => {
  const IconCustom = useRef("");
  if (!!props.icon) {
    IconCustom.current = <Icon icon={props.icon} className="icon mr-3" />;
  } else if (!!props.iconImg) {
    IconCustom.current = (
      <img src={props.iconImg} className="icon-img mr-3" alt="Icon" />
    );
  }

  return (
    <div className="menu-item-wrap d-flex align-items-center">
      {IconCustom.current}
      {props.title}
    </div>
  );
};
