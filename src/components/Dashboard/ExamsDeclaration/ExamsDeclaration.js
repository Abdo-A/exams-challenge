import { Card, Button } from "semantic-ui-react";
import React, { Component } from "react";

import colors from "../../../assets/colors";

import "./ExamsDeclaration.scss";
import exams_time from "../../../assets/images/exams_time.jpeg";

class ExamsDeclaration extends Component {
  render() {
    return (
      <Card
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "rgba(0, 1, 0, 0.75) 1px 6px 18px -3px"
        }}
      >
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
              style={{ backgroundColor: colors.green02, color: "white" }}
            >
              View exams tips
            </Button>
          </div>

          <div className="ExamsDeclaration__Right">
            <img src={exams_time} className="ExamsDeclaration__Image" />
          </div>
        </div>
      </Card>
    );
  }
}

export default ExamsDeclaration;
