import React, { Fragment } from "react";
import "./assests/sass/style.scss";

import { Header } from "./sections/header/";
import { Hero } from "./sections/hero/";
import TopTones from "./sections/item-slide/TopTones";
import LatestTones from "./sections/item-slide/LatestTones";
import Promotion from "./sections/promotion/";
import Footer from "./sections/footer/";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <TopTones />
        <LatestTones />
        <Promotion />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
