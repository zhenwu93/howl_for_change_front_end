import React, {Component} from "react"
import {NavLink} from "react-router-dom";

class ReqInviteButton extends Component {

  render() {
    return (
      <div className='req-invite-div'>
        <NavLink to='/contact' className='req-invite-btn'>Request an Invite</NavLink>
      </div>
    )
  }
}

export default ReqInviteButton
