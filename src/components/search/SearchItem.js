import React from "react";
import "./search.scss";

export const SearchItem = (props) => {
  return (
    <div className="search-item d-flex align-items-center">
      {props.song} <div className="dot" />
      <span className="artist text-truncate">by&nbsp;{props.artist}</span>
    </div>
  );
};
