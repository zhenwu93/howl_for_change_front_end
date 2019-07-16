import React, {Component} from "react"
import globalissues from '../assets/global/HFC global issues.png'

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

          <div class='globalissuesimg'>
            <img src={globalissues}/>
          </div>

        </div>
      </section>
    )
  }
}
export default WhatWeDo
