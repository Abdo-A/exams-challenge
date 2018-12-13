import { Card } from "semantic-ui-react";
import React, { Component } from "react";

import "./DueDeclaration.scss";

class DueDeclaration extends Component {
  render() {
    return (
      <Card
        style={{
          width: "25%",
          height: "100%",
          margin: "0",
          boxShadow: "rgba(0, 1, 0, 0.75) 1px 6px 18px -3px"
        }}
      >
        <div className="DueDeclaration__ContentContainer">
          <div className="DueDeclaration__Header">
            <div className="DueDeclaration__Header__Left">What's due</div>

            <div className="DueDeclaration__Header__Right">All</div>
          </div>

          <div className="DueDeclaration__Subheader">
            Sometimes "LATER" becomes "NEVER", Go Now
          </div>
        </div>
      </Card>
    );
  }
}

export default DueDeclaration;
