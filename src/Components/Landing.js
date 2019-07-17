import React, {Component} from "react"
import hero from "../assets/hero/hero.jpg"

class Landing extends Component {

  handleClick = (e) => {

  }

  render() {
    return (
      <section>
        <div className="landing container">
          <img width="1502" height="511" src={hero} alt='hero'/>
          <div className="request invite button container">
            <button className="ui black button" onClick={this.handleClick}>Request an Invite</button>
            <h1>JOIN A COMMUNITY OF CREATIVE CHANGEMAKERS WORKING WITH NONPROFITS</h1>
            <h1>ON GLOBAL ISSUES THEY ARE PASSIONATE ABOUT WHILE MAKING A LIVING</h1>
            <h1>#AWORLDOFWOLVES</h1>
          </div>
        </div>
      </section>
    )
  }
}
export default Landing
