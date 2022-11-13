import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Smart Meter Management System</span>
        </div>
        <div>
          <button className="devicebuttons">Light</button>
        </div>
        <div>
          <button className="devicebuttons">Fan</button>
        </div>
        <div>
          <button className="devicebuttons">Camera</button>
        </div>
        <div>
          <button className="devicebuttons">Water Meter</button>
        </div>
        <div>
          <button className="devicebuttons">Electricity Meter</button>
        </div>
        <div>
          <button className="devicebuttons">Weather Sensor</button>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          {/*<div className="topbarIconContainer">*/}
          {/*  <Language />*/}
          {/*  <span className="topIconBadge">2</span>*/}
          {/*</div>*/}
          {/*<div className="topbarIconContainer">*/}
          {/*  <Settings />*/}
          {/*</div>*/}
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
