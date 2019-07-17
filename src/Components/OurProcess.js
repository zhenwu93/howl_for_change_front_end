import React, {Component} from "react"
import process1 from "../assets/process/process1.png"
import process2 from "../assets/process/process2.png"
import process3 from "../assets/process/process3.png"
import process4 from "../assets/process/process4.png"

class OurProcess extends Component {
  render() {
    return (
      <section>
        <div className="ourprocess container">
          <h1>Our Process</h1>

          <div className="process1 container">
            <h2>1.</h2><p>NONPROFITS CREATE A CALL FOR SUBMISSIONS FOR SPECIFIC CREATIVE NEEDS AT A SPECIFIC PRICE.</p>
            <img src={process1} alt='process1' size='large'/>
          </div>

          <div className="process2 container">
            <h2>2.</h2><p>COMMUNITY MEMBERS SUBMIT PITCHES TO OPEN PROJECT REQUESTS IN THEIR FIELD OF EXPERTISE.</p>
            <img src={process2} alt='process2' size='large'/>
          </div>

          <div className="process3 container">
            <h2>3.</h2><p>THE COMMUNITY ENCOURAGE FELLOW CREATIVES BY HOWLING AT THEIR PROPOSALS TO HELP ORGANIZATIONS PICK THE PERFECT WOLF FOR THEIR PROJECT.</p>
            <img src={process3} alt='process3' size='large'/>
          </div>

          <div className="process4 container">
            <h2>4.</h2><p>AFTER THE SUBMISSION WINDOW CLOSES NONPROFITS CHOOSE THEIR FAVORITE ALLIES TO THEM CREATE MAGIC AND IMPACT.</p>
            <img src={process4} alt='process4' size='large'/>
          </div>
        </div>
      </section>
    )
  }
}
export default OurProcess
