import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Howl for Change</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Log In</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="content">

        </div>
      </div>
    );
  }
}

export default App;
