import React, { Component } from "react";
import MainMenu from "../../components/Navigation/MainMenu/MainMenu";

class Layout extends Component {
  render() {
    return (
      <>
        <MainMenu />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
