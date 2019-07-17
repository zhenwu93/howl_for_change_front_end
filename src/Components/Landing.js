import React, {Component} from "react"
import hero from "../assets/hero/hero.jpg"

class Landing extends Component {

  handleClick = (e) => {

  }

  render() {
    return (
      <section>
        <div class="landing container">
          <img src={hero} alt='hero' size='large'/>
          <div class="request invite button container">
            <button class="ui black button" onClick={this.handleClick}>Request an Invite</button>
          <p>JOIN A COMMUNITY OF CREATIVE CHANGEMAKERS WORKING WITH NONPROFITS</p>
          <p>ON GLOBAL ISSUES THEY ARE PASSIONATE ABOUT WHILE MAKING A LIVING</p>
          <p>#AWORLDOFWOLVES</p>
          </div>
        </div>
      </section>
    )
  }
}
export default Landing
