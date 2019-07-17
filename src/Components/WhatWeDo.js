import React, {Component} from "react"

import issues from "../assets/issues/issues.png"

import globalissues from '../assets/global/HFC global issues.png'


class WhatWeDo extends Component {
  render() {
    return (
      <section>

        <div className="whatwedo container">
          
          <div className="issues container">
              <img src={issues} alt='issues' size='large'/>
          </div>
      
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
