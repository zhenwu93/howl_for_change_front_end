import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import ReqInviteButton from './ReqInviteButton'
import process1 from "../assets/process/process1.png"
import process2 from "../assets/process/process2.png"
import process3 from "../assets/process/process3.png"
import process4 from "../assets/process/process4.png"
import one from "../assets/process/1.png"
import two from "../assets/process/2.png"
import three from "../assets/process/3.png"
import four from "../assets/process/4.png"
import yellow from "../assets/yellow.png"

class OurProcess extends Component {
  render() {
    return (
      <section>

      <div className="process-header-ctn">
        <img src={yellow} alt="yellowline" className="op-yellow-line"/>
        <p className='processText'>Our Process</p>
      </div>

        <div className="ourprocess-ctn container">
          <div className='processRow container'>
            <div className="processItem-ctn container">
              <img className = 'processImg' src={process1} alt='process1'/>
              <img className = 'processNumImg' src={one} alt='one'/>
              <p>NONPROFITS CREATE A CALL FOR <br></br> SUBMISSIONS FOR SPECIFIC CREATIVE <br></br> NEEDS AT A SPECIFIC PRICE.</p>
              <br></br>
            </div>
          </div>

          <div className='processRow container'>
            <div className="processItem-ctn container">
              <img className = 'processImg' src={process2} alt='process2'/>
              <img className = 'processNumImg' src={two} alt='two'/>
              <p>COMMUNITY MEMBERS SUBMIT PITCHES <br></br> TO OPEN PROJECT REQUESTS IN THEIR FIELD <br></br> OF EXPERTISE.</p>
            </div>
          </div>

          <br></br>

          <div className='processRow container'>
            <div className="processItem-ctn container">
            <img className = 'processImg' src={process3} alt='process3'/>
              <img className = 'processNumImg' src={three} alt='three'/>
              <p>THE COMMUNITY ENCOURAGE FELLOW <br></br> CREATIVES BY HOWLING AT THEIR PROPOSALS <br></br> TO HELP ORGANIZATIONS PICK THE PERFECT <br></br> WOLF FOR THEIR PROJECT.</p>
            </div>
          </div>

          <div className='processRow container'>
            <div className="processItem-ctn container">
              <img className = 'processImg' src={process4} alt='process4'/>
              <img className = 'processNumImg' src={four} alt='four'/>
              <p>AFTER THE SUBMISSION WINDOW CLOSES <br></br> NONPROFITS CHOOSE THEIR FAVORITE ALLIES <br></br> TO THEM CREATE MAGIC AND IMPACT.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default OurProcess
