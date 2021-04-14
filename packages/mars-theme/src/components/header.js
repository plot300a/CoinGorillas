import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon
          className="header__menuicon"
          onClick={() => handleToggleSidebar()}
        />

        <img
          className="header__logo"
          src="http://sxm360.thedailygrindsxm.com/wp-content/uploads/2021/04/st_maarten_logo.jpg"
          alt="sxm360"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="TJay"
          Title="Tso.J"
          src="https://yt3.ggpht.com/yti/ANoDKi5BiH3BI6lgBjTr2pnp3-2GZLOHlWfsU06-t6nyAQ=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};

export default Header;
