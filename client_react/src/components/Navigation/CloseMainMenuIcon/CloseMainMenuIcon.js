import { Icon } from "semantic-ui-react";
import React from "react";

import "./CloseMainMenuIcon.scss";

const CloseMainMenuIcon = props => {
  return (
    <div className="CloseMainMenuIcon" onClick={props.closeMainMenu}>
      <Icon name="close" style={{ cursor: "pointer" }} size="big" />
    </div>
  );
};

export default CloseMainMenuIcon;
