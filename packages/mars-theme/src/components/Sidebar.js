import React from "react";
import { css, connect, styled, Head } from "frontity";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import InfoIcon from "@material-ui/icons/Info";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import PetsIcon from "@material-ui/icons/Pets";
import TimelineIcon from "@material-ui/icons/Timeline";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import FaceIcon from "@material-ui/icons/Face";

/* --------------- */
import { Btc } from "react-cryptocoins";
import { Eth } from "react-cryptocoins";
import { Xrp } from "react-cryptocoins";
import { Doge } from "react-cryptocoins";

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
        <SidebarRow Icon={InfoIcon} Title="Crypto 101" size={23} />{" "}
      </div>

      <div className="SidebarSection">
        <h5>Coins/Assets</h5>

        <div className="coinsTokens">
          <Btc />
          <Doge />
          <Eth />
          <Xrp />
        </div>
      </div>

      <div className="SidebarSection">
        <h5>Gorillas</h5>
        <SidebarRow Icon={FaceIcon} Title="Michael Saylor" size={23} />{" "}
        <SidebarRow Icon={FaceIcon} Title="Raul Pal" />
        <SidebarRow Icon={FaceIcon} Title="Chamath Palihapitiya" />
        <SidebarRow Icon={FaceIcon} Title="Vitalik Buterin" />
        
      </div>

      <div className="SidebarSection">
        <h5>Exchanges</h5>
        <SidebarRow Icon={InsertChartIcon} Title="Binance" />
        <SidebarRow Icon={InsertChartIcon} Title="CoinBase" />
        <SidebarRow Icon={InsertChartIcon} Title="Huobi Global" />
        <SidebarRow Icon={InsertChartIcon} Title="RobinHood" />
        <SidebarRow Icon={InsertChartIcon} Title="Kraken" />
        <SidebarRow Icon={InsertChartIcon} Title="Exchanges" />
        x
        <SidebarRow Icon={InsertChartIcon} Title="Sub Reddit Wallstreet Bets" />
      </div>
    </div>
  );
};

export default Sidebar;
