import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import facebook from "../assets/social/facebook.png";
import howl from "../assets/social/howl.png";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";
import pdfpp from '../assets/pdf/HFC Privacy Policy.pdf'
import pdftos from '../assets/pdf/HFC Terms of Service.pdf'

class Footer extends Component {
  render() {
    return (
      <section>
        <div className="footer-ctn container">

          <div className="legalinfo">
            <ul>
              <a target="_blank" href={pdfpp}>
                <li>Privacy Policy |</li>
              </a>
              <a target="_blank" href={pdftos}>
                <li> Terms of Service</li>
              </a>
                <br></br>
              <li className="howlForChange">©Howl For Change 2019</li>
            </ul>
          </div>

          <div className="sociallinks">
            <ul className="links">
            <li>
              <a target="_blank" href="http://littlegiantwolf.com">
                <img src={howl} alt="howl" className="howl-footer-img"/>
              </a>
            </li>
              <li>
                <a target="_blank" href="https://twitter.com/howlforchange">
                  <img src={twitter} alt="twitter" className="twitter-footer-img"/>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/howlforchange/">
                  <img src={instagram} alt="ig" className="instagram-footer-img"/>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/howlforchange">
                  <img src={facebook} alt="fb" className="facebook-footer-img"/>
                </a>
              </li>
            </ul>
          </div>

        <div className="footer-nav-ctn container">
            <ul>
              <li>
                <NavLink to="/process">Our Process</NavLink>
              </li>
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
