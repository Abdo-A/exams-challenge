import React, { Component } from "react";

import Header from "../../components/PageTop/Header/Header";

import "../../assets/animatedHeader.scss";

class Announcement extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="Header--Animated">Announcement</h1>
      </>
    );
  }
}

export default Announcement;
