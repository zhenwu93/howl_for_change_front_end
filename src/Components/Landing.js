import React, {Component} from "react"
import ReqInviteButton from './ReqInviteButton'
import hero from "../assets/hero/hero.jpg"
import tagline from "../assets/issues/tagline.png"
import hashtag from '../assets/issues/hashtag.png'

class Landing extends Component {

  render() {
    return (
      <section>
        <div className="landing-ctn main-container">


            <img src={hero} alt='hero' className='landing-img'/>


          <div className="tag-line main-container">
            <img src={tagline} alt="tag" className="tag-line-img"/>
          </div>

          <div className='landing-text-div'>
            <p className='landing-text'>JOIN A COMMUNITY OF CREATIVE CHANGEMAKERS AND NONPROFITS WORKING AND HOWLING TOGETHER TO GIVE VOICE TO GLOBAL ISSUES.</p>
            <img align='right' src={hashtag} alt="hashtag" className="hashtag-img"/>
          </div>


        </div>
      </section>
    )
  }
}
export default Landing
