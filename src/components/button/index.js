import React from "react";
import { Button } from "antd";
import "./button.scss";

export const ButtonCustom = (props) => {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      className={props.btnClass}
    >
      {props.children}
    </Button>
  );
};
