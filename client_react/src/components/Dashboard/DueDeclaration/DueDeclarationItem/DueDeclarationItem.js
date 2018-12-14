import React from "react";
import "./DueDeclarationItem.scss";
import { Icon, Button } from "semantic-ui-react";

const DueDeclarationItem = props => {
  let icon = <Icon name="clipboard check" size="big" />;
  if (props.type === "quiz") {
    icon = <Icon name="hourglass half" size="big" />;
  }

  return (
    <div className="DueDeclarationItem">
      <div className="DueDeclarationItem__Top">
        <div className="DueDeclarationItem__Top__Icon">{icon}</div>
        <p className="DueDeclarationItem__Top__Title">{props.title}</p>
      </div>
      <div className="DueDeclarationItem__Info">
        <p>
          <span className="DueDeclarationItem__Info__Intro">Course: </span>
          {props.course}
        </p>
        <p>
          <span className="DueDeclarationItem__Info__Intro">Topic: </span>
          {props.topic}
        </p>
        <p>
          <span className="DueDeclarationItem__Info__Intro">Due to: </span>
          {props.dueTo}
        </p>
      </div>

      <Button className="DueDeclarationItem__Button">{props.motivator}</Button>
    </div>
  );
};

export default DueDeclarationItem;
