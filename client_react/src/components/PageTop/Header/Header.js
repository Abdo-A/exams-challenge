import React, { Component } from "react";

import "./Header.scss";
import { Search } from "semantic-ui-react";
import Badge from "../Badge/Badge";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Heading">
          <h1>Welcome {this.props.username},</h1>
        </div>
        <div className="Header__LeftContainer">
          <div className="Header__LeftContainer__SearchInput">
            <Search placeholder="Search" showNoResults={false} />
          </div>
          <Badge
            iconName="bell"
            count={1}
            content="Notifications to be shown here"
          />
          <Badge
            iconName="envelope"
            count={3}
            content="Messages to be shown here"
          />
          <img
            className="Header__LeftContainer__ProfileImage"
            src="https://cdn140.picsart.com/253231893022202.jpg?c256x256"
            alt="Profile"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username
  };
};

export default connect(mapStateToProps)(Header);
