import React, { Component } from "react";

import "./Header.scss";
import { Search } from "semantic-ui-react";
import Badge from "../Badge/Badge";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Heading">
          <h1>Welcome Talia,</h1>
        </div>
        <div className="Header__LeftContainer">
          <div className="Header__LeftContainer__SearchInput">
            <Search placeholder="Search" showNoResults={false} />
          </div>
          <Badge iconName="bell" count={1} />
          <Badge iconName="envelope" count={3} />
          <img
            className="Header__LeftContainer__ProfileImage"
            src="https://cdn140.picsart.com/253231893022202.jpg?c256x256"
          />
        </div>
      </div>
    );
  }
}

export default Header;
