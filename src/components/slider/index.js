import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./slider.scss";

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
      items: 3,
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
      <div className="slider-owl">
        <OwlCarousel {...options}>{this.props.children}</OwlCarousel>
      </div>
    );
  }
}

export default Slider;

/* Item Sample

<div class='item'>
    <h4>This is Item</h4>
</div>

*/
