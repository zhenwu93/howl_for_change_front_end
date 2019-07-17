import React, {Component} from "react"
import {NavLink} from "react-router-dom";

import facebook from "../assets/social/facebook.png"
import howl from "../assets/social/howl.png"
import instagram from "../assets/social/instagram.png"
import twitter from "../assets/social/twitter.png"

class Footer extends Component {
  render() {
    return (
      <section>

        <div className="footer-ctn container">

          <div class='legalinfo'>
            <span>
              Privacy Policy | Terms of Service
            </span>
            <br></br>
            <span>
              ©Howl For Change 2019
            </span>
          </div>

          <div class='sociallinks'>
            <ul class='links'>
              <li>
                <a href='https://twitter.com/howlforchange'>
                  <img src={twitter}/>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/howlforchange/'>
                  <img src={instagram}/>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/howlforchange'>
                  <img src={facebook}/>
                </a>
              </li>
            </ul>
          </div>



        </div>
      </section>
    )
  }
}
export default Footer
