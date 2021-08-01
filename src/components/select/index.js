import React from "react";
import { Select } from "antd";
import "./select.scss";

function handleChange(value) {
  console.log(`selected ${value}`);
}

export const SelectCustom = (props) => {
  return (
    <Select
      placeholder={props.placeholder}
      // style={{ width: 120 }}
      onChange={handleChange}
      className="select-input"
    >
      {props.children}
    </Select>
  );
};

/* Select Comp
const { Option } = Select;

<SelectCustom>
  <Option value="jack">Jack</Option>
  <Option value="lucy">Lucy</Option>
  <Option value="disabled" disabled>
    Disabled
  </Option>
  <Option value="Yiminghe">yiminghe</Option>
</SelectCustom>

*/
