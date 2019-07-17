import React, { Component, Fragment } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Event from "./Event";
import Podcast from "./Podcast";
import Subscribe from "./Subscribe"
import Topnav from "./Topnav"
import Footer from "./Footer"

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
