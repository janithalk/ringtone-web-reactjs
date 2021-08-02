import React from "react";
import Slider from "../../components/slider/";
import { ButtonCustom } from "../../components/button";
import { ItemCard } from "./ItemCard";
import "./item-slide.scss";

export const ItemSlide = () => {
  return (
    <section className="item-slide">
      <div className="container">
        <div className="top-section d-flex align-items-center justify-content-between">
          <h2>Top Tones</h2>
          <ButtonCustom type="secondary">See all</ButtonCustom>
        </div>
      </div>
      <Slider>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Slider>
    </section>
  );
};
