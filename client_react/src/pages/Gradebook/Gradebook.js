import React, { Component } from "react";

import "../../assets/animatedHeader.scss";
import Header from "../../components/PageTop/Header/Header";

class Gradebook extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="Header--Animated">Gradebook</h1>
      </>
    );
  }
}

export default Gradebook;
