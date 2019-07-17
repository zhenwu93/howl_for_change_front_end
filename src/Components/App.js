import React, { Component, Fragment } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Image } from 'semantic-ui-react';

import About from "./About";
import Contact from "./Contact";
import Event from "./Event";
import Podcast from "./Podcast";
import Subscribe from "./Subscribe"
import Topnav from "./Topnav"
import Footer from "./Footer"

import logo from "../assets/hfclogo.png"

//TODO
// import LogIn from "./LogIn";
//<Route path="/signup" component={SignUp}/>
//<Route path="/login" component={LogIn}/>
// <li><NavLink to="/signup">Sign Up</NavLink></li>
  // <Route path="/signup" component={SignUp}/>

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
            <Topnav/>
            <ul className="header">
              <li><NavLink exact to="/"><Image src={logo} size='medium'/></NavLink></li>
              <li><NavLink to="/event">Community Events</NavLink></li>
              <li><NavLink to="/podcast">More From HFC</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/subscribe">Request an Invite</NavLink></li>
            </ul>


            <div className="content">
              <Route exact path="/" component={About}/>
              <Route path="/event" component={Event}/>
              <Route path="/podcast" component={Podcast}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/subscribe" component={Subscribe}/>
            </div>
            <Footer/>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
