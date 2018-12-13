import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import React, { Component } from "react";

import * as authActions from "../../store/actions/authActions";

import "./Home.scss";

class Home extends Component {
  logInHandler = () => {
    this.props.logIn();
    this.props.history.replace("/dashboard");
  };

  render() {
    return (
      <>
        <Button onClick={this.logInHandler}>Let me in</Button>
      </>
    );
  }
}

const mapDispatchToProps = {
  logIn: authActions.logIn
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
