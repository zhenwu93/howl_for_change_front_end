import React, {Component} from "react"
import issues from "../assets/issues/issues.png"

class WhatWeDo extends Component {
  render() {
    return (
      <section>
        <div className="whatwedo container">
          <h1>WHAT WE DO</h1>
          <h2>WE ARE BUILDING COMMUNITY AROUND GLOBAL ISSUES AND CONTENT</h2>
        </div>
        <div className="img container">
            <img src={issues} alt='issues' size='large'/>
        </div>
      </section>
    )
  }
}
export default WhatWeDo
