import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./hero.scss";

import SlideImg from "../../assests/images/slide.jpg";
import PrevIcon from "../../assests/images/prev-test.png";

export const Hero = () => {
  return (
    <section className="hero">
      <Carousel indicators={false} nextIcon={<img src={PrevIcon} />}>
        <Carousel.Item>
          <img className="d-block" src={SlideImg} alt="First slide" />
          <h2>Slide 1</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={SlideImg} alt="Second slide" />
          <h2>Slide 2</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={SlideImg} alt="Third slide" />
          <h2>Slide 3</h2>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
