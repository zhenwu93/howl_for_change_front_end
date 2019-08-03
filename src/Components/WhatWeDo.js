import React, {Component} from "react"
import issues from '../assets/issues/issues.png'
import yellow from '../assets/yellow.png'
import inspired from '../assets/issues/inspired.png'

class WhatWeDo extends Component {
  render() {
    return (
      <section>
        <div class="whatwedo-ctn container">
          <div class='whatwedo-text-div'>
            <img src={inspired} alt="inspired" />
            <p className='regtext'>
              THE UN SUSTAINABLE DEVELOPMENT GOALS ARE THE BLUEPRINT TO ACHIEVE A BETTER AND
              MORE SUSTAINABLE FUTURE FOR ALL BY 2030. THEY ADDRESS THE GLOBAL CHALLENGES WE FACE,
              TO PROMOTE PROSPERITY WHILE PROTECTING THE ENVIRONMENT
            </p>
          </div>

          <div class='issuesimg-container'>
            <img src={issues} alt="issues" className='issues'/>
          </div>

        </div>
      </section>
    )
  }
}
export default WhatWeDo
