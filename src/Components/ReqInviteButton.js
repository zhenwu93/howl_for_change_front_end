import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import reqinvite from '../assets/reqinvite.png'

class ReqInviteButton extends Component {

  render() {
    return (
      <div>
        <NavLink to='/contact' className='req-invite-btn' id='req-invite-btn'>
          <img src={reqinvite} alt="reqinvite" className="reqinvite"></img>
        </NavLink>
      </div>
    )
  }
}

export default ReqInviteButton
