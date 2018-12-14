import { connect } from "react-redux";
import { Menu, Sidebar, Search, Button } from "semantic-ui-react";
import React, { Component } from "react";
import withSizes from "react-sizes";

import * as authActions from "../../../store/actions/authActions";
import Backdrop from "../../UI/Backdrop/Backdrop";
import CloseMainMenuIcon from "../CloseMainMenuIcon/CloseMainMenuIcon";
import colors from "../../../assets/colors";
import devicesSizes from "../../../assets/devices_sizes";
import MainMenuItem from "../MainMenuItem/MainMenuItem";
import pages from "../../../data/pagesData";

import "./MainMenu.scss";

class MainMenu extends Component {
  componentDidMount() {
    this.settleTabAccordingToPath();
  }

  //To check the path and update the clicked color of the current element immediately
  settleTabAccordingToPath = () => {
    Array.from(document.getElementsByClassName("item")).forEach(element => {
      element.style.backgroundColor = "transparent";
      element.style.color = "white";
    });
    Array.from(
      document.getElementsByClassName(this.props.location.pathname)
    ).forEach(element => {
      element.style.backgroundColor = "white";
      element.style.color = "#084361";
    });
  };

  //on item click
  handleMenuItemClick = e => {
    Array.from(document.getElementsByClassName("item")).forEach(element => {
      element.style.backgroundColor = "transparent";
      element.style.color = "white";
    });
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = colors.primaryColor;
  };

  //on item hover
  handleMenuItemHover = e => {
    Array.from(document.getElementsByClassName("item")).forEach(element => {
      element.style.backgroundColor = "transparent";
      element.style.color = "white";
    });

    Array.from(
      document.getElementsByClassName(this.props.location.pathname)
    ).forEach(element => {
      element.style.backgroundColor = "white";
      element.style.color = colors.primaryColor;
    });

    e.currentTarget.style.backgroundColor = "rgba(224, 214, 214, 0.61)";
    e.currentTarget.style.color = "#04537B";
  };

  handleLogOut = () => {
    this.props.logOut();
    this.props.history.replace("/");
  };

  render() {
    const MainMenuStyles = {
      width: 200,
      backgroundImage: "linear-gradient(#084361, #3C8399)"
    };

    return (
      <>
        <Backdrop show={this.props.menuVisible} onClick={this.props.hideMenu} />
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={
            this.props.deviceWidth > devicesSizes.medium
              ? true
              : this.props.menuVisible
          }
          width="thin"
          style={MainMenuStyles}
        >
          <CloseMainMenuIcon closeMainMenu={this.props.hideMenu} />
          <div className="MainMenu__SearchContainer">
            <Search placeholder="Search" showNoResults={false} />
          </div>
          <h1 className="MainMenu__MenuHeader">coligo</h1>

          {pages.map(page => {
            return (
              <MainMenuItem
                handleClick={this.handleMenuItemClick}
                handleMouseEnter={this.handleMenuItemHover}
                handleMouseLeave={this.settleTabAccordingToPath}
                icon={page.icon}
                name={page.name}
                path={page.path}
                key={page.path}
              />
            );
          })}
          <Button
            onClick={this.handleLogOut}
            className="MainMenu__LogOutButton"
          >
            Log Out
          </Button>
        </Sidebar>
      </>
    );
  }
}

//Adding sizes
const mapSizesToProps = ({ width }) => ({
  deviceWidth: width
});
const MainMenuWithSizes = withSizes(mapSizesToProps)(MainMenu);

//Redux
const mapStateToProps = state => {
  return {
    menuVisible: state.auth.menuVisible
  };
};

const mapDispatchToProps = {
  showMenu: authActions.showMenu,
  hideMenu: authActions.hideMenu,
  logOut: authActions.logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenuWithSizes);
