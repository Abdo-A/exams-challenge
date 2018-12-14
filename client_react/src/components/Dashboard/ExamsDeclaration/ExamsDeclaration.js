import { Card, Button } from "semantic-ui-react";
import React, { Component } from "react";

import "./ExamsDeclaration.scss";
import exams_time from "../../../assets/images/exams_time.jpeg";

class ExamsDeclaration extends Component {
  render() {
    return (
      <Card style={this.props.style}>
        <div className="ExamsDeclaration__ContentContainer">
          <div className="ExamsDeclaration__Left">
            <p className="ExamsDeclaration__Header">Exams Time</p>
            <p className="ExamsDeclaration__Paragraph">
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tops to be ready for your exams.
            </p>
            <p className="ExamsDeclaration__Quote">
              "Nothing happens until something movies." ~ Albert Einstein
            </p>
            <Button
              className="ExamsDeclaration__Button"
              style={{ fontSize: 13 }}
            >
              View exams tips
            </Button>
          </div>

          <div className="ExamsDeclaration__Right">
            <img
              src={exams_time}
              className="ExamsDeclaration__Image"
              alt="Exams"
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default ExamsDeclaration;
