import { Icon, Menu, Sidebar, Button } from "semantic-ui-react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainMenu extends Component {
  render() {
    return (
      <>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={true}
          width="thin"
        >
          <NavLink to="/">
            <Menu.Item as="span" onClick={e => {}}>
              {/* <Icon name={page.icon} /> */}
              <span
                style={{
                  textTransform: "capitalize"
                }}
              >
                Dashboard
              </span>
            </Menu.Item>
          </NavLink>

          <NavLink to="/">
            <Menu.Item as="span" onClick={e => {}}>
              {/* <Icon name={page.icon} /> */}
              <span
                style={{
                  textTransform: "capitalize"
                }}
              >
                Schedule
              </span>
            </Menu.Item>
          </NavLink>

          <NavLink to="/">
            <Menu.Item as="span" onClick={e => {}}>
              {/* <Icon name={page.icon} /> */}
              <span
                style={{
                  textTransform: "capitalize"
                }}
              >
                Courses
              </span>
            </Menu.Item>
          </NavLink>

          <NavLink to="/">
            <Menu.Item as="span" onClick={e => {}}>
              {/* <Icon name={page.icon} /> */}
              <span
                style={{
                  textTransform: "capitalize"
                }}
              >
                Gradebook
              </span>
            </Menu.Item>
          </NavLink>

          <NavLink to="/">
            <Menu.Item as="span" onClick={e => {}}>
              {/* <Icon name={page.icon} /> */}
              <span
                style={{
                  textTransform: "capitalize"
                }}
              >
                Performance
              </span>
            </Menu.Item>
          </NavLink>

          <NavLink to="/">
            <Menu.Item as="span" onClick={e => {}}>
              {/* <Icon name={page.icon} /> */}
              <span
                style={{
                  textTransform: "capitalize"
                }}
              >
                Announcements
              </span>
            </Menu.Item>
          </NavLink>
        </Sidebar>
      </>
    );
  }
}

export default MainMenu;
