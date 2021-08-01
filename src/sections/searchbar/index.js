import React from "react";
import { Select } from "antd";
import { SelectCustom } from "../../components/select";
import { SearchCustom } from "../../components/search";
import { ButtonCustom } from "../../components/button";
import { SearchItem } from "../../components/search/SearchItem";
import "./searchbar.scss";
import Icon from "../../utils/icomoon";

const { Option } = Select;

export const SearchBar = () => {
  return (
    <div className="searchbar-wrap d-flex justify-content-center">
      <div className="searchbar">
        <form className="d-flex align-items-center flex-column flex-sm-row">
          <div className="search-filed">
            <SearchCustom>
              <Option value="1">
                <SearchItem song="Solar Power" artist="Lorde" />
              </Option>
              <Option value="2">
                <SearchItem song="Kiss Me More" artist="Doja Cat, ft. SZA" />
              </Option>
              <Option value="3">
                <SearchItem
                  song="It’s Alright (Baby’s Coming Back)"
                  artist="Blinker the Star"
                />
              </Option>
            </SearchCustom>
          </div>
          <div className="search-filed mr-sm-2">
            <SelectCustom placeholder="Filter By">
              <Option value="0">Song</Option>
              <Option value="1">Album</Option>
              <Option value="2">Artist</Option>
            </SelectCustom>
          </div>
          <div className="search-filed">
            <ButtonCustom type="primary">
              <div className="d-flex align-items-center justify-content-center">
                <Icon icon="search" size={16} />
                <span className="d-block ml-2">Search</span>
              </div>
            </ButtonCustom>
          </div>
        </form>
      </div>
    </div>
  );
};
