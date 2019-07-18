import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import logo from "../assets/hfclogo.png"
import Contact from "./Contact";
import Event from "./Event";
import Podcast from "./Podcast";
import Subscribe from "./Subscribe"

// import { Image } from 'semantic-ui-react'

class Topnav extends Component {
  render() {
    return (
      <nav class="topnav">
        <div class="topnav-ctn container">

          <div className="topnavlogodiv">
            <NavLink exact to="/"><img src={logo} className='topnavlogo'/></NavLink>
          </div>

          <div className="topnav-links">
            <ul>
              <li><NavLink to="/event">Community Events</NavLink></li>
              <li><NavLink to="/podcast">More From HFC</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
export default Topnav
