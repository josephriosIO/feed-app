import React from "react";
import { push as Menu } from "react-burger-menu";
import DarkModeToggle from "../DarkModeToggle";
import "./SideBar.css";

const SideBar = props => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <div>Profile</div>
      <div className="navbar">
        <DarkModeToggle />
      </div>
    </Menu>
  );
};

export default SideBar;
