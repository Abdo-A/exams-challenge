import { Icon, Menu, Sidebar, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

import pages from "../../../data/pagesData";

import "./MainMenu.scss";

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
          style={{ width: 200 }}
        >
          {pages.map(page => {
            return (
              <NavLink to={page.path} key={page.path}>
                <Menu.Item as="span" className={page.path} onClick={e => {}}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center"
                      }}
                    >
                      <Icon name={page.icon} size="big" />
                    </div>
                    <div
                      style={{
                        flex: 2,
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center"
                      }}
                    >
                      <span
                        style={{
                          textTransform: "capitalize"
                        }}
                      >
                        {page.name}
                      </span>
                    </div>
                  </div>
                </Menu.Item>
              </NavLink>
            );
          })}
        </Sidebar>
      </>
    );
  }
}

export default MainMenu;
