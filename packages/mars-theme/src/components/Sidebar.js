import React from "react";
import { css, connect, styled, Head } from "frontity";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import HotelIcon from "@material-ui/icons/Hotel";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import InfoIcon from "@material-ui/icons/Info";
import PoolIcon from "@material-ui/icons/Pool";
import DeckIcon from "@material-ui/icons/Deck";
import RowingIcon from "@material-ui/icons/Rowing";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import PetsIcon from "@material-ui/icons/Pets";
import TimelineIcon from "@material-ui/icons/Timeline";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import AnnouncementIcon from "@material-ui/icons/Announcement";
/* ----- *
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* ----- */
const Sidebar = ({ sidebar }) => {
  //  const dispatch = useDispatch()
  //  const logOutHandler = () => {
  //     dispatch(log_out())

  // function Sidebar() {
  return (
    <div
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <div className="SidebarSection">
        <SidebarRow Icon={HomeIcon} Title=" Home" size={23} />
        <SidebarRow Icon={TimelineIcon} Title="Market Data" />
        <SidebarRow Icon={Brightness2Icon} Title=" To The Moon" size={23} />
        <SidebarRow Icon={WhatshotIcon} Title=" Trending" size={23} />
        <SidebarRow Icon={AnnouncementIcon} Title="Coin News" size={23} />{" "}
        <SidebarRow Icon={InfoIcon} Title="Crypto 101" size={23} />{" "}
        <SidebarRow Icon={VideoLibraryIcon} Title="Crypto TV" size={23} />{" "}
        <SidebarRow Icon={PetsIcon} Title="Dogecoin" size={23} />{" "}
      </div>

      <div className="SidebarSection">
        <SidebarRow Icon={InfoIcon} Title="Crypto 101" size={23} />{" "}
        <SidebarRow Icon={InsertChartIcon} Title="Exchanges" />
        <SidebarRow Icon={BusinessIcon} Title="Timeshare" />
        <SidebarRow Icon={HotelIcon} Title="AirBnB" />
      </div>
    </div>
  );
};

export default Sidebar;
