import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

//TODO
// import Signup from "./SignUp";
// import LogIn from "./LogIn";
//<Route path="/signup" component={SignUp}/>
//<Route path="/login" component={LogIn}/>

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Howl for Change</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/login">Log In</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>

            <div className="content">
            <Route path="/" component={Home}/>
            
            <Route path="/contact" component={Contact}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default App;
