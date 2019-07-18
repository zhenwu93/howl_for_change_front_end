import React, { Component, Fragment } from 'react'

import { Route, HashRouter, Switch } from "react-router-dom";
// import { Image } from 'semantic-ui-react';


import About from "./About";
import Contact from "./Contact";
import Event from "./Event";
import Podcast from "./Podcast";
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
              <Switch>
                <div className="content content-ctn container">
                  <Route exact path="/" component={About}/>
                  <Route path="/event" component={Event}/>
                  <Route path="/podcast" component={Podcast}/>
                  <Route path="/contact" component={Contact}/>
                </div>
              </Switch>
            <Footer/>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
