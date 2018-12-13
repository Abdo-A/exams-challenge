import { Icon } from "semantic-ui-react";
import React from "react";

import colors from "../../../assets/colors";

import "./Badge.scss";

const Badge = props => {
  return (
    <div className="Badge">
      <Icon name={props.iconName} size="big" className="Badge__Icon" />
      <span className="Badge__Count">{props.count}</span>
    </div>
  );
};

export default Badge;
