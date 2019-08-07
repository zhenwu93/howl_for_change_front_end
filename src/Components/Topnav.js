import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/hfclogo.png";
import ReqInviteButton from "./ReqInviteButton.js";

class Topnav extends Component {
  render() {
    return (
      <nav className="topnav">
        <div className="topnav-ctn container">
          <div className="topnavlogodiv">
            <NavLink exact to="/">
              <img src={logo} className="topnavlogo" alt="hfclogo" />
            </NavLink>
          </div>

          <div className="topnav-links">
            <ul>
              <li>
                <NavLink to="/process">Our Process</NavLink>
              </li>
              <li>
                <NavLink to="/event">Community Events</NavLink>
              </li>
              <li>
                <NavLink to="/podcast">More From HFC</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li rightAlignText>
                <ReqInviteButton/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Topnav;
