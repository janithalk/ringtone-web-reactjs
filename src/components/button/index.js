import React from "react";
import { Button } from "antd";
import "./button.scss";

export const ButtonCustom = (props) => {
  return <Button onClick={props.onClick}>This is button</Button>;
};
