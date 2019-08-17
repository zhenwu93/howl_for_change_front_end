import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/hfclogo.png";
import ReqInviteButton from "./ReqInviteButton.js";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.dropdown = this.dropdown.bind(this)
  }

  dropdown() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav-ctn container") {
      x.className += " responsive";
    } else {
      x.className = "topnav-ctn container";
    }
  }

  render() {
    return (
      <nav className="topnav" >
        <div className="topnav-ctn container" id='topnav'>
          <NavLink exact to="/">
            <img src={logo} className="topnavlogo" alt="hfclogo" />
          </NavLink>

          <NavLink to="/process">Our Process</NavLink>
          <NavLink to="/event">Community Events</NavLink>
          <NavLink to="/podcast">More From HFC</NavLink>
          <a href="javascript:void(0);" className="icon" onClick={this.dropdown}>
            <i className="fa fa-bars"></i>
          </a>
          <ReqInviteButton />
        </div>
      </nav>
    );
  }
}
export default Topnav;
