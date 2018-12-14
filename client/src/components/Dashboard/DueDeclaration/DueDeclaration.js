import { Card } from "semantic-ui-react";
import React, { Component } from "react";

import "./DueDeclaration.scss";
import DueDeclarationItem from "./DueDeclarationItem/DueDeclarationItem";

class DueDeclaration extends Component {
  render() {
    let nothingDueMessage = null;

    if (!this.props.quizzes || this.props.quizzes.length <= 0) {
      nothingDueMessage = <h1>Nothing due! :)</h1>;
    }

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

          {this.props.quizzes
            ? this.props.quizzes.map((quiz, i) => (
                <>
                  <DueDeclarationItem
                    title={quiz.title}
                    course={quiz.course}
                    topic={quiz.topic}
                    dueTo={quiz.dueTo}
                    type={quiz.type}
                    motivator={quiz.motivator}
                  />
                  {i !== this.props.quizzes.length - 1 ? (
                    <hr className="DueDeclaration__ItemsSeparator" />
                  ) : null}
                </>
              ))
            : null}

          {nothingDueMessage}
        </div>
      </Card>
    );
  }
}

export default DueDeclaration;
