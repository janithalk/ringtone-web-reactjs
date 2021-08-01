import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./hero.scss";
import Icon from "../../utils/icomoon";
import Slide from "./Slide";

import SlideImg1 from "../../assests/images/slide-1.png";
import SlideImg2 from "../../assests/images/slide-2.png";

const ArrowLeft = (
  <div className="hero-arrow-wrap">
    <Icon icon="arrow-left" className="arrow-icon" />
  </div>
);
const ArrowRight = (
  <div className="hero-arrow-wrap">
    <Icon icon="arrow-right" className="arrow-icon" />
  </div>
);

export const Hero = () => {
  return (
    <section className="hero">
      <Carousel indicators={false} nextIcon={ArrowRight} prevIcon={ArrowLeft}>
        <Carousel.Item>
          <Slide title="Modern Music" image={SlideImg1} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide title="Innovative Tech" image={SlideImg2} />
        </Carousel.Item>
      </Carousel>

      <div class="carousel-shape-divider ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
