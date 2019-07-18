import React, {Component} from "react"
import {NavLink} from "react-router-dom";

class ReqInviteButton extends Component {

  render() {
    return (

      <div className='req-invite-btn'>
        <NavLink to='/subscribe'>Request an Invite</NavLink>
      </div>
    )
  }
}

export default ReqInviteButton
