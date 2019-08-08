import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import facebook from "../assets/social/facebook.png";
import howl from "../assets/social/howl.png";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";

class Footer extends Component {
  render() {
    return (
      <section>
        <div className="footer-ctn container">

          <div className="legalinfo">
            <ul>
              <li>Privary Policy | Terms of Service </li>
                <br></br>
              <li>©Howl For Change 2019</li>
            </ul>
          </div>

          <div className="sociallinks">
            <ul className="links">
            <li>
              <a href="http://littlegiantwolf.com">
                <img src={howl} alt="howl" className="howl-footer-img"/>
              </a>
            </li>
              <li>
                <a href="https://twitter.com/howlforchange">
                  <img src={twitter} alt="twitter"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/howlforchange/">
                  <img src={instagram} alt="ig"/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/howlforchange">
                  <img src={facebook} alt="fb"/>
                </a>
              </li>
            </ul>
          </div>

        <div className="footer-nav-ctn container">
            <ul>
              <li>
                <NavLink to="/event">Community Events</NavLink>
              </li>
              <li>
                <NavLink to="/podcast">More From HFC</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
