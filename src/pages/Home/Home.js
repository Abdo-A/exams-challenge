import React, { Component } from "react";
import "./Home.scss";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <Link to="/dashboard">
          <Button>Let me in</Button>
        </Link>
      </>
    );
  }
}

export default Home;
