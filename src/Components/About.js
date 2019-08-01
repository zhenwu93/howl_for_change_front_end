import React, { Component } from "react";
import Landing from "./Landing";
import WhatWeDo from "./WhatWeDo";
import Gallery from "./Gallery";
import OurProcess from "./OurProcess";

class About extends Component {
  render() {
    return (
      <div className="wrapperDiv">
        <Landing/>
        <WhatWeDo/>
        <Gallery/>
      </div>
    );
  }
}

export default About;
