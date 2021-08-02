import React, { Fragment } from "react";
import "./assests/sass/style.scss";

import { Header } from "./sections/header/";
import { Hero } from "./sections/hero/";
import { ItemSlide } from "./sections/item-slide/";
import Promotion from "./sections/promotion/";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <ItemSlide title="Top Tones" />
        <ItemSlide title="Latest Release" />
        <Promotion />
      </Fragment>
    );
  }
}

export default App;
