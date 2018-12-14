import { withRouter } from "react-router-dom";
import React, { Component } from "react";

import MainMenu from "../../components/Navigation/MainMenu/MainMenu";

import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <>
        <MainMenu location={this.props.location} history={this.props.history} />
        <div className="Layout__Page">{this.props.children}</div>
      </>
    );
  }
}

export default withRouter(Layout);
