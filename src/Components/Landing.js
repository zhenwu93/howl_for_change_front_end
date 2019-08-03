import React, {Component} from "react"
import ReqInviteButton from './ReqInviteButton'
import hero from "../assets/hero/hero.jpg"
import tagline from "../assets/issues/tagline.png"

class Landing extends Component {

  render() {
    return (
      <section>
        <div className="landing-ctn container">


            <img src={hero} alt='hero' className='landing-img'/>


          <div className="tag-line container">
            <img src={tagline} alt="tag" className="tag-ling-img" align="center"/>
          </div>

          <div className='landing-text-div'>
            <p className='landing-text headertext'>JOIN A COMMUNITY OF CREATIVE CHANGEMAKERS WORKING WITH NONPROFITS ON GLOBAL ISSUES THEY ARE PASSIONATE ABOUT WHILE MAKING A LIVING</p>
            <p className='regtext'>WORK FOR SOMETHING MEANINGFUL | HIRE SOMEONE WHO TRULY CARES</p>
          </div>


        </div>
      </section>
    )
  }
}
export default Landing
