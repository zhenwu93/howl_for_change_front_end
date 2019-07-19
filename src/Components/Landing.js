import React, {Component} from "react"
import ReqInviteButton from './ReqInviteButton'
import hero from "../assets/hero/hero.jpg"

class Landing extends Component {

  handleClick = (e) => {

  }

  render() {
    return (
      <section>
        <div className="landing-ctn container">


            <img src={hero} alt='hero' className='landing-img'/>


          <div className="req-invite-ctn container regtext">
            <ReqInviteButton/>
          </div>

          <div className='landing-text-div'>
            <p className='landing-text headertext'>JOIN A COMMUNITY OF CREATIVE CHANGEMAKERS WORKING WITH NONPROFITS ON GLOBAL ISSUES THEY ARE PASSIONATE ABOUT WHILE MAKING A LIVING</p>
            <p className='landing-hashtag headertext'>#AWORLDOFWOLVES</p>
          </div>


        </div>
      </section>
    )
  }
}
export default Landing
