import React, { Fragment } from "react";
import "./assests/sass/style.scss";

import { Header } from "./sections/header/";
import { Hero } from "./sections/hero/";

import Icon from "./utils/icomoon";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Icon icon="music" size={20} color="orange" />
      </Fragment>
    );
  }
}

export default App;
