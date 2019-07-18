import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import ReqInviteButton from './ReqInviteButton'
import process1 from "../assets/process/process1.png"
import process2 from "../assets/process/process2.png"
import process3 from "../assets/process/process3.png"
import process4 from "../assets/process/process4.png"

class OurProcess extends Component {
  render() {
    return (
      <section>
        <div className="ourprocess-ctn container">
          <p className='headertext'>Our Process</p>

          <div className='processRow container'>
            <div className="processItem-ctn container">
              <p className='headertext processNum'>1.</p>
              <p className='regtext'>NONPROFITS CREATE A CALL FOR SUBMISSIONS FOR SPECIFIC CREATIVE NEEDS AT A SPECIFIC PRICE.</p>
              <img className = 'processImg' src={process1} alt='process1'/>
            </div>

            <div className="processItem-ctn container">
              <img className = 'processImg' src={process2} alt='process2'/>
              <p className='headertext processNum'>2.</p>
              <p className='regtext'>COMMUNITY MEMBERS SUBMIT PITCHES TO OPEN PROJECT REQUESTS IN THEIR FIELD OF EXPERTISE.</p>
            </div>
          </div>

          <br></br>

          <div className='processRow container'>
            <div className="processItem-ctn container">
              <p className='headertext processNum'>3.</p>
              <p className='regtext'>THE COMMUNITY ENCOURAGE FELLOW CREATIVES BY HOWLING AT THEIR PROPOSALS TO HELP ORGANIZATIONS PICK THE PERFECT WOLF FOR THEIR PROJECT.</p>
              <img className = 'processImg' src={process3} alt='process3'/>
            </div>

            <div className="processItem-ctn container">
              <img className = 'processImg' src={process4} alt='process4'/>
              <p className='headertext processNum'>4.</p>
              <p className='regtext'>AFTER THE SUBMISSION WINDOW CLOSES NONPROFITS CHOOSE THEIR FAVORITE ALLIES TO THEM CREATE MAGIC AND IMPACT.</p>
            </div>
          </div>
        </div>

        <div className='req-invite-ctn process-inv-ctn container'>
          <p className='regtext'>WORK FOR SOMETING MEANINGFUL | HIRE SOMEONE WHO TRULY CARES</p>
          <ReqInviteButton/>
        </div>
      </section>
    )
  }
}
export default OurProcess
