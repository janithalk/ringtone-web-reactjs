import React from "react";
import { Select } from "antd";
import "./search.scss";

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export const SearchCustom = (props) => {
  return (
    <Select
      showSearch
      //style={{ width: 200 }}
      placeholder="Find song album or artist"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      showArrow={false}
      className="search-input"
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
