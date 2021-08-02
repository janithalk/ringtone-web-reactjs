import React, { Fragment } from "react";
import "./assests/sass/style.scss";

import { Header } from "./sections/header/";
import { Hero } from "./sections/hero/";
import { ItemSlide } from "./sections/item-slide";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <ItemSlide />
      </Fragment>
    );
  }
}

export default App;
