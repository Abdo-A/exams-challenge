import { connect } from "react-redux";
import { Search, Icon } from "semantic-ui-react";
import React, { Component } from "react";

import * as authActions from "../../../store/actions/authActions";
import Badge from "../Badge/Badge";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Heading">Welcome {this.props.username},</div>
        <div className="Header__Container">
          <div className="Header__OpenMenuIcon" onClick={this.props.showMenu}>
            <Icon name="bars" size="big" />
          </div>

          <div className="Header__SearchInput">
            <Search placeholder="Search" showNoResults={false} />
          </div>
          <div className="Header__BadgesContainer">
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
              className="Header__ProfileImage"
              src="https://cdn140.picsart.com/253231893022202.jpg?c256x256"
              alt="Profile"
            />
          </div>
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

const mapDispatchToProps = {
  showMenu: authActions.showMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
