import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./slider.scss";

import Slide1 from "../../assests/images/slide/1.jpg";
import Slide2 from "../../assests/images/slide/2.jpg";
import Slide3 from "../../assests/images/slide/3.jpg";
import Slide4 from "../../assests/images/slide/4.jpg";
import Slide5 from "../../assests/images/slide/5.jpg";

const options = {
  className: "owl-theme",
  loop: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      stagePadding: 0,
    },
    576: {
      items: 1,
      margin: 15,
      stagePadding: 0,
    },
    768: {
      items: 2,
      stagePadding: 50,
      margin: 30,
    },
    992: {
      items: 4,
      stagePadding: 50,
      margin: 30,
    },
    1200: {
      items: 4,
      stagePadding: 50,
      margin: 30,
    },
  },
};

class Slider extends React.Component {
  render() {
    return (
      <div className="slider-owl container">
        <OwlCarousel {...options}>
          <div>
            <img className="img" src={Slide1} alt="" />
            <h4>1</h4>
          </div>
          <div>
            <img className="img" src={Slide2} alt="" />
            <h4>2</h4>
          </div>
          <div>
            <img className="img" src={Slide3} alt="" />
            <h4>3</h4>
          </div>
          <div>
            <img className="img" src={Slide4} alt="" />
            <h4>4</h4>
          </div>
          <div>
            <img className="img" src={Slide5} alt="" />
          </div>
          <div>
            <img className="img" src={Slide1} alt="" />
          </div>
          <div>
            <img className="img" src={Slide2} alt="" />
          </div>
          <div>
            <img className="img" src={Slide3} alt="" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Slider;
