import "./sidebar.css";
import {
  Home,
  Apps,
  Assessment,
  Tune,
  MonetizationOn,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import {Link, NavLink} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <NavLink activeStyle={{ color: "palevioletred"}} to="/" className="link">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink activeStyle={{ color: "palevioletred"}} to="/management" className="link">
              <li className="sidebarListItem active">
                <Apps className="sidebarIcon" />
                Device Management
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink activeStyle={{ color: "palevioletred"}} to="/monitor" className="link">
              <li className="sidebarListItem active">
                <Assessment className="sidebarIcon" />
                Monitor and Tracking
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink activeStyle={{ color: "palevioletred"}} to="/control" className="link">
              <li className="sidebarListItem active">
                <Tune className="sidebarIcon" />
                Control & Configuration
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink activeStyle={{ color: "palevioletred"}} to="/" className="link">
              <li className="sidebarListItem active">
                <MonetizationOn className="sidebarIcon" />
                Billing
              </li>
            </NavLink>
          </ul>
        </div>
        {/*<div className="sidebarMenu">*/}
        {/*  <ul className="sidebarList">*/}
        {/*    <NavLink activeStyle={{ color: "palevioletred"}} to="/" className="link">*/}
        {/*      <li className="sidebarListItem">*/}
        {/*        <PermIdentity className="sidebarIcon" />*/}
        {/*        Users*/}
        {/*      </li>*/}
        {/*    </NavLink>*/}
            {/*<Link to="/products" className="link">*/}
            {/*  <li className="sidebarListItem">*/}
            {/*    <Storefront className="sidebarIcon" />*/}
            {/*    Products*/}
            {/*  </li>*/}
            {/*</Link>*/}
            {/*<li className="sidebarListItem">*/}
            {/*  <AttachMoney className="sidebarIcon" />*/}
            {/*  Transactions*/}
            {/*</li>*/}
            {/*<li className="sidebarListItem">*/}
            {/*  <BarChart className="sidebarIcon" />*/}
            {/*  Reports*/}
            {/*</li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
