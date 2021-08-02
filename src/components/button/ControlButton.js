import React, { useRef } from "react";
import { ButtonCustom } from "./index";
import Icon from "../../utils/icomoon";

import "./button.scss";

export const ControlButton = (props) => {
  const Type = useRef("Type prop must fill");
  const Class = useRef("");
  if (props.type === "play") {
    Type.current = <Icon icon="play" size={30} />;
    Class.current = "control-btn";
  } else if (props.type === "pause") {
    Type.current = <Icon icon="pause" size={30} />;
    Class.current = "control-btn active";
  } else {
    Type.current = "No type prop";
    Class.current = "control-btn";
  }

  return (
    <ButtonCustom
      type="primary"
      btnClass={Class.current}
      onClick={props.onClick}
    >
      {Type.current}
    </ButtonCustom>
  );
};
