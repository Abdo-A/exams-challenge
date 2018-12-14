import React, { Component } from "react";

import Header from "../../components/PageTop/Header/Header";

import "../../assets/animatedHeader.scss";

class Schedule extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="Header--Animated">Schedule</h1>
      </>
    );
  }
}

export default Schedule;
