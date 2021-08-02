import React from "react";
import Slider from "../../components/slider/";
import { ButtonCustom } from "../../components/button";
import { ItemCard } from "./ItemCard";
import "./item-slide.scss";

import AlbumImage1 from "../../assests/images/song-1.jpg";
import AlbumImage2 from "../../assests/images/song-2.jpg";
import AlbumImage3 from "../../assests/images/song-3.jpg";
import AlbumImage4 from "../../assests/images/song-4.jpg";
import AlbumImage5 from "../../assests/images/song-5.jpg";

export const ItemSlide = (props) => {
  return (
    <div className="item-slide">
      <div className="container">
        <div className="top-section d-flex align-items-center justify-content-between">
          <h2>{props.title}</h2>
          <ButtonCustom type="secondary">See all</ButtonCustom>
        </div>

        <Slider>
          <ItemCard
            Img={AlbumImage1}
            song="Solar Power"
            artist="Lorde"
            price="200"
          />
          <ItemCard
            Img={AlbumImage2}
            song="Kiss Me More"
            artist="Doja Cat, ft. SZA & Unicefq DJ"
            price="580"
          />
          <ItemCard
            Img={AlbumImage3}
            song="It’s Alright (Baby’s Coming Back)"
            artist="Blinker the Star"
            price="300"
          />
          <ItemCard Img={AlbumImage4} song="Butter" artist="BTS" price="500" />
          <ItemCard
            Img={AlbumImage5}
            song="Atlantic"
            artist="The Weather Station"
            price="450"
          />
        </Slider>
      </div>
    </div>
  );
};
