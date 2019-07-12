import React, { Component, Fragment } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Event from "./Event";
import Podcast from "./Podcast";
import SignUp from "./SignUp";
import Subscribe from "./Subscribe";
//TODO
// import LogIn from "./LogIn";
//<Route path="/signup" component={SignUp}/>
//<Route path="/login" component={LogIn}/>

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <div>
            <h1>Howl for Change</h1>
            <ul className="header">
              <li><NavLink exact to="/">About</NavLink></li>
              <li><NavLink to="/event">Events</NavLink></li>
              <li><NavLink to="/podcast">More From Howl</NavLink></li>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            <div className="content">
              <Route exact path="/" component={About}/>
              <Route path="/event" component={Event}/>
              <Route path="/podcast" component={Podcast}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/subscribe" component={Subscribe}/>
            </div>
          </div>
      </HashRouter>
        <Subscribe>
        </Subscribe>
      </Fragment>
    );
  }
}

export default App;
