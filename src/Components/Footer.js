import React, {Component} from "react"

import facebook from "../assets/social/facebook.png"
import howl from "../assets/social/howl.png"
import instagram from "../assets/social/instagram.png"
import twitter from "../assets/social/twitter.png"

class Footer extends Component {
  render() {
    return (
      <section>
        <div class="footer container">
          <div class='legalinfo'>
          Privacy Policy | Terms of Service
          <br>
          </br>
          ©Howl For Change 2019
          </div>

          <div class='sociallinks'>
            <ul class='links'>
              <li><img src={howl}/></li>
              <li><img src={twitter}/></li>
              <li><img src={instagram}/></li>
              <li><img src={facebook}/></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default Footer
