import { Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import React, { Component } from "react";

import * as authActions from "../../store/actions/authActions";

import "./Home.scss";

class Home extends Component {
  state = {
    username: null,
    showWarning: false
  };

  logInHandler = () => {
    if (!this.state.username || !isNaN(this.state.username)) {
      this.setState(() => ({
        showWarning: true
      }));

      return;
    }

    this.props.logIn(this.state.username);
    this.props.history.replace("/dashboard");
  };

  inputHandler = e => {
    const inputValue = e.target.value.trim();

    this.setState(() => ({
      username: inputValue,
      showWarning: false
    }));
  };

  render() {
    let warning = null;
    if (this.state.showWarning) {
      warning = <p>Please enter your name! :)</p>;
    }

    return (
      <div className="Home">
        <div className="Home__ContentContainer">
          <p className="Home__Welcome Home__WelcomeHeader">Welcome!</p>
          <p className="Home__Welcome">What's your name?</p>
          <Input placeholder="Your Name" onChange={this.inputHandler} />
          <Button onClick={this.logInHandler} className="Home__Button">
            Let me in
          </Button>
          <p className="Home__Warning">{warning}</p>
        </div>
      </div>
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
