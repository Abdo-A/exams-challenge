import React from "react";
import "./MainMenuItem.scss";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

const MainMenuItem = props => {
  return (
    <NavLink to={props.path} key={props.path}>
      <Menu.Item
        as="span"
        className={props.path}
        onClick={props.handleClick}
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
      >
        <div className="MainMenuItem__ItemWrapper">
          <div className="MainMenuItem__ItemWrapper__IconWrapper">
            <Icon name={props.icon} size="big" />
          </div>
          <div className="MainMenuItem__ItemWrapper__ItemNameWrapper">
            {props.name}
          </div>
        </div>
      </Menu.Item>
    </NavLink>
  );
};

export default MainMenuItem;
