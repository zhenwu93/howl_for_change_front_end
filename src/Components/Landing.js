import React, {Component} from "react"
import hero from "../assets/hero/hero.jpg"

class Landing extends Component {

  handleClick = (e) => {

  }

  render() {
    return (
      <section>
        <div className="landing-ctn container">

          <div>
            <img src={hero} alt='hero' className='landing-img'/>
          </div>

          <div className="request invite button">
            <button className="ui black button" onClick={this.handleClick}>Request an Invite</button>
          </div>

          <div className='landing-text-div'>
            <span className='headertext'>JOIN A COMMUNITY OF CREATIVE CHANGEMAKERS WORKING WITH NONPROFITS</span>
            <span className='headertext'>ON GLOBAL ISSUES THEY ARE PASSIONATE ABOUT WHILE MAKING A LIVING</span>
            <span className='headertext'>#AWORLDOFWOLVES</span>
          </div>
          

        </div>
      </section>
    )
  }
}
export default Landing
