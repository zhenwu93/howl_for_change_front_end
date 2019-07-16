import React, {Component} from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import logo from "../assets/hfclogo.png"
import { Image } from 'semantic-ui-react'

class Topnav extends Component {
  render() {
    return (
      <nav class="topnav">
        <div class="topnavdiv">
          <NavLink exact to="/"><img src={logo} size='medium'/></NavLink>
          <ul className="header">
            <li><NavLink to="/event">Community Events</NavLink></li>
            <li><NavLink to="/podcast">More From HFC</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/subscribe">Request an Invite</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Topnav
