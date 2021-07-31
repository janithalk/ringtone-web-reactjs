import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../assests/fonts/icomoon/selection.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;

/* How to Use 

import Icon from "./utils/icomoon";

<Icon icon="music" size={20} color="orange" />

*/
