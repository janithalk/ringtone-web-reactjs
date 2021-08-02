import React from "react";
import Slider from "../../components/slider/";
import { ButtonCustom } from "../../components/button";

export const ItemSlide = () => {
  return (
    <div className="item-slide">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h2>Top Tones</h2>
          <ButtonCustom type="primary">See all</ButtonCustom>
        </div>
      </div>
      <Slider />
    </div>
  );
};
