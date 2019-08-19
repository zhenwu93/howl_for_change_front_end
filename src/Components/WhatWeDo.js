import React, { Component } from "react";
import issues from "../assets/issues/issues.png";
import inspired from "../assets/issues/inspired.png";
import './whatwedo.css';

class WhatWeDo extends Component {
  render() {
    return (
      <section>
        <div className="whatwedo-ctn container">
          <div className="whatwedo-text-div">
            <img src={inspired} alt="inspired" className="inspired" />
            <br />
            <p>
              THE UN SUSTAINABLE DEVELOPMENT GOALS ARE THE BLUEPRINT TO ACHIEVE
              A BETTER AND
            </p>
            <p>
              MORE SUSTAINABLE FUTURE FOR ALL BY 2030. THEY ADDRESS THE GLOBAL
              CHALLENGES WE FACE,
            </p>
            <p>TO PROMOTE PROSPERITY WHILE PROTECTING THE ENVIRONMENT</p>
          </div>

          <div className="issuesimg-container">
            <img src={issues} alt="issues" className="issues" />
          </div>
        </div>
      </section>
    );
  }
}
export default WhatWeDo;
