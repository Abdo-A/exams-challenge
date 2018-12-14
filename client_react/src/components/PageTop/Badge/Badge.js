import { Icon, Popup } from "semantic-ui-react";
import React from "react";

import "./Badge.scss";

const Badge = props => {
  return (
    <div className="Badge">
      <Popup
        trigger={
          <Icon name={props.iconName} size="big" className="Badge__Icon" />
        }
        content={props.content}
        on="click"
      />

      <span className="Badge__Count">{props.count}</span>
    </div>
  );
};

export default Badge;
