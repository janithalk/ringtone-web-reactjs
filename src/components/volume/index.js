import React, { useState } from "react";
import { Slider } from "antd";
import "./volume.scss";

import Icon from "../../utils/icomoon";

export const VolumeBar = () => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <div className="volume-bar align-items-center ml-4 d-none d-lg-flex">
      <Icon icon="speaker" size={20} className="volume-icon" />
      <Slider
        defaultValue={50}
        disabled={false}
        max={100}
        onChange={(value) => {
          setCurrentValue(value);
        }}
      />
    </div>
  );
};
