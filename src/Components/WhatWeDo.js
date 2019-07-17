import React, {Component} from "react"
import issues from '../assets/issues/issues.png'

class WhatWeDo extends Component {
  render() {
    return (
      <section>
        <div class="whatwedo container">
          <div class='textdiv'>
            <span class='headertext'>WHAT WE DO</span>
            <br></br>
            <span>
            WE ARE BUILDING COMMUNITY AROUND GLOBAL ISSUES AND CONTENT
            </span>
          </div>

          <div class='issuesimg'>
            <img src={issues} alt="issues"/>
          </div>

        </div>
      </section>
    )
  }
}
export default WhatWeDo
