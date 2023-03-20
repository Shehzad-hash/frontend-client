import React, { useState, useEffect } from "react";
import ChartPie from "./../../img/ChartPieSlice.svg";
import DashBoard from "./../../img/dashboard.svg";
import Compare from "./../../img/ShoppingBagOpen.svg";
import SearchImage from "./../../img/Search.svg";
import SunImage from "./../../img/sun.svg";
import BellImage from "./../../img/bell.svg";
import fSwordImage from "./../../img/fSword.png";
import BroadCast from "./../../img/Broadcast.svg";

import DiscordImage from "./../../img/Discord.png";
import InstagramImage from "./../../img/Instagram.png";
import FacebookImage from "./../../img/Facebook.png";
import TwitterImage from "./../../img/Twitter.png";
import YoutubeImage from "./../../img/Youtube.png";
import TiktokImage from "./../../img/TikTok.png";
import TelegramImage from "./../../img/Telegram.png";

import BigX from "./../../img/bigX.png";
import EyeImage from "./../../img/Eye.png";
import smallCheck from "./../../img/CheckSquare.svg";
import smallX from "./../../img/X.svg";

import CheckImage from "./../../img/check.png";
import CeoImage from "./../../img/ceo.png";

export default function Index() {
  return (
    <div className="sideBar dark">
      <i className="fa-solid fa-chevron-left" onclick="sideMenuToggle()" />
      <h1 className="sideHeader">The Prop Firm Journal</h1>
      <div className="sideDashboardSection">
        <div className="silentText">Dashboards</div>
        <a href="./index-dark.html" className="active-link">
          <i className="fa-solid fa-chevron-right" />
          <img src={ChartPie} alt="" />
          Explore
        </a>
        <a href="./compare-dark.html">
          <i className="fa-solid fa-chevron-right" />
          <img src={Compare} alt="" />
          Compare
        </a>
      </div>
      <div className="sideRankingSection">
        <div className="silentText">Rankings</div>
        <a href="#" className="sideMenuLink">
          <i className="fa-solid fa-arrow-trend-up" /> Pricing
        </a>
        <a href="#" className="sideMenuLink active-link">
          <i className="fa-solid fa-arrow-trend-up" /> Account Size
        </a>
        <a href="#" className="sideMenuLink">
          <i className="fa-solid fa-arrow-trend-up" /> Max Scaling
        </a>
        <a href="#" className="sideMenuLink">
          <i className="fa-solid fa-arrow-trend-up" /> Max Profit Share
        </a>
        <a href="#" className="sideMenuLink">
          <i className="fa-solid fa-arrow-trend-up" /> Fastest Payout
        </a>
        <a href="#" className="sideMenuLink">
          <i className="fa-solid fa-arrow-trend-up" /> Most Voted
        </a>
      </div>
      <a href="#" className="sideBarLogo">
        <h1 className="text-center">The Prop Firm Journal</h1>
      </a>
    </div>
  );
}
