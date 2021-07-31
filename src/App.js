import React, { Fragment } from "react";
import "./assests/sass/style.scss";

import { Header } from "./sections/header/";
import { Hero } from "./sections/hero/";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
      </Fragment>
    );
  }
}

export default App;
