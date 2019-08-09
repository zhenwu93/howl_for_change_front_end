import React, { Component } from "react";
import process1 from "../assets/process/process1.png";
import process2 from "../assets/process/process2.png";
import process3 from "../assets/process/process3.png";
import process4 from "../assets/process/process4.png";
import one from "../assets/process/1.png";
import two from "../assets/process/2.png";
import three from "../assets/process/3.png";
import four from "../assets/process/4.png";

class OurProcess extends Component {
  render() {
    return (
      <section>
        <p id='processHeader' className="processText">Our Process</p>
        <div className="ourprocess-ctn container">
          <div className="processRow container">
            <div className="processItem-ctn container">
              <img className="processImg" src={process1} alt="process1" />
              <img className="processNumImg" src={one} alt="one" />
              <p className="regtext ">
                NONPROFITS CREATE A CALL FOR SUBMISSIONS FOR SPECIFIC CREATIVE
                NEEDS AT A SPECIFIC PRICE.
              </p>
            </div>
          </div>

          <div className="processRow container">
            <div className="processItem-ctn container">
              <img className="processImg" src={process2} alt="process2" />
              <img className="processNumImg" src={two} alt="two" />
              <p className="regtext ">
                COMMUNITY MEMBERS SUBMIT PITCHES TO OPEN PROJECT REQUESTS IN
                THEIR FIELD OF EXPERTISE.
              </p>
            </div>
          </div>

          <br />

          <div className="processRow container">
            <div className="processItem-ctn container">
              <img className="processImg" src={process3} alt="process3" />
              <img className="processNumImg" src={three} alt="three" />
              <p className="regtext ">
                THE COMMUNITY ENCOURAGES FELLOW CREATIVES BY HOWLING AT THEIR
                PROPOSALS TO HELP ORGANIZATIONS PICK THE PERFECT WOLF FOR THEIR
                PROJECT.
              </p>
            </div>
          </div>

          <div className="processRow container">
            <div className="processItem-ctn container">
              <img className="processImg" src={process4} alt="process4" />
              <img className="processNumImg" src={four} alt="four" />
              <p className="regtext ">
                AFTER THE SUBMISSION WINDOW CLOSES NONPROFITS CHOOSE THEIR
                FAVORITE ALLIES TO THEM CREATE MAGIC AND IMPACT.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default OurProcess;
