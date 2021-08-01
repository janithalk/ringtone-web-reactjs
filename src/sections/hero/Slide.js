import React from "react";
import { ButtonCustom } from "../../components/button/";

class Slide extends React.Component {
  render() {
    return (
      <div>
        <div className="slide-background"></div>
        <div className="container">
          <div className="slide-wrap d-flex">
            <div className="slide-content">
              <h1>{this.props.title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <ButtonCustom title="View More" />
            </div>
            <img src={this.props.image} alt="Slide" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
