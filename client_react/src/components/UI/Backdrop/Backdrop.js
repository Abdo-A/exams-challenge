import React from "react";

import "./Backdrop.scss";

const backdrop = props => {
  return props.show ? (
    <div
      className="Backdrop"
      onClick={props.onClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 10
      }}
    />
  ) : null;
};

export default backdrop;
