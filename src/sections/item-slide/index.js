import React from "react";
import Slider from "../../components/slider/";
import { ButtonCustom } from "../../components/button";
import { ItemCard } from "./ItemCard";
import "./item-slide.scss";

import AlbumImage1 from "../../assests/images/song-1.png";
import AlbumImage2 from "../../assests/images/song-2.png";

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
        <ItemCard
          Img={AlbumImage1}
          song="Solar Power"
          artist="Lorde"
          price=""
        />
        <ItemCard
          Img={AlbumImage2}
          song="Kiss Me More"
          artist="Doja Cat, ft. SZA & Unicefq DJ"
          price=""
        />
        <ItemCard
          Img={AlbumImage1}
          song="It’s Alright (Baby’s Coming Back)"
          artist="Blinker the Star"
          price=""
        />
        <ItemCard Img={AlbumImage2} song="Butter" artist="" price="BTS" />
        <ItemCard
          Img={AlbumImage1}
          song="Atlantic"
          artist="The Weather Station"
          price=""
        />
      </Slider>
    </section>
  );
};
