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
        <SidebarRow Icon={WhatshotIcon} Title=" Trending" size={23} />
        <SidebarRow Icon={InfoIcon} Title=" SXM 101" size={23} />{" "}
        <SidebarRow
          Icon={AirplanemodeActiveIcon}
          Title=" SXM Airport"
          size={23}
        />
        <SidebarRow Icon={PhotoCameraIcon} Title=" Photos" size={23} />{" "}
        <SidebarRow Icon={VideoLibraryIcon} Title=" Video Library" size={23} />{" "}
      </div>

      <div className="SidebarSection">
        <SidebarRow Icon={LocationCityIcon} Title="Hotels" />
        <SidebarRow Icon={HomeWorkIcon} Title="Villas & Condos" />
        <SidebarRow Icon={BusinessIcon} Title="Timeshare" />
        <SidebarRow Icon={HotelIcon} Title="AirBnB" />
      </div>

      <div className="SidebarSection">
        <SidebarRow Icon={DriveEtaIcon} Title="Car Rentals" />
        <SidebarRow Icon={PoolIcon} Title="Beaches" />
        <SidebarRow Icon={DeckIcon} Title="Bars & Restaurants" />
        <SidebarRow Icon={RowingIcon} Title="Activities" />
        {/* deep sea fishing, parasailing, snorkeling, jetsky, plane watching */}
        <SidebarRow Icon={LocationOnIcon} Title="Places" />
        <SidebarRow Icon={SubscriptionsIcon} Title="Subscription" />
      </div>
    </div>
  );
};

export default Sidebar;
