import React, { Component } from "react";
import "../../assets/animatedHeader.scss";
import Header from "../../components/PageTop/Header/Header";

class Courses extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="Header--Animated">Courses</h1>
      </>
    );
  }
}

export default Courses;
