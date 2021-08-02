import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./item-slide.scss";

import Slide1 from "../../assests/images/slide/1.jpg";
import Slide2 from "../../assests/images/slide/2.jpg";
import Slide3 from "../../assests/images/slide/3.jpg";
import Slide4 from "../../assests/images/slide/4.jpg";

export const ItemSlide = () => {
  return (
    <div>
      <div class="container-fluid">
        <OwlCarousel
          items={3}
          className="owl-theme"
          loop
          margin={8}
          nav={false}
        >
          <div>
            <img className="img" src={Slide1} alt="" />
          </div>

          <div>
            <img className="img" src={Slide2} alt="" />
          </div>

          <div>
            <img className="img" src={Slide3} alt="" />
          </div>

          <div>
            <img className="img" src={Slide4} alt="" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
