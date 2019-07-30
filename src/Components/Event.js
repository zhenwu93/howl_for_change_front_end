import React, { Component, Fragment } from 'react'
import eventlogo from "../assets/events/events.jpg"
import empowerlogo from "../assets/events/empower.jpg"
import './event.css'

class Event extends Component {
  render() {
    return (
      <Fragment>
      <div className="event-logo-container" >
        <img src={eventlogo} alt='eventlogo' className='eventlogo'  />
      </div>

      <div className="empower-logo-container">
        <div className="empower-header"><h1>EMPOWERING COMMUNITIES EVENTS</h1></div>

        <div className="empower-paragraph1">
          <p>AN EVENT SERIES THAT REVOLVES AROUND A LIVE RECORDING OF INSIPRING</p><br></br>
          <p>CONVERSATIONS WITH INDIVIDUALS FROM ALL WALKS OF LIFE ABOUT HOW</p><br></br>
          <p>THEY HARNESS THE POWER OF STORYTELLING FOR POSITIVE IMPACT.</p>
        </div>

        <div className="empower-quote">
          <p>"STORIES ARE THE BUILDING BLOCKS OF SOCIETY;</p><br></br>
          <p>TO CHANGE SOCIETY, WE NEED TO CRAFT POWERFUL NEW STORIES."</p>
        </div>

        <div className="empower-paragraph2">
          <p>Our mission is to empower people to discover the power of storytelling for</p><br></br>
          <p>themselves in hearing from guests from a wide range of fields. We speak</p><br></br>
          <p>with traditional storytellers such as filmmakers and writers but also with</p><br></br>
          <p>scientists, educators, politicians, business leaders, and other individuals,</p><br></br>
          <p>who actively utilize storytelling and media to shape the cultural narrative</p><br></br>
          <p>and create social change.</p>
        </div>

        <img align='right' src={empowerlogo} alt='empowerlogo' className='empowerlogo'/>
      </div>
      </Fragment>
    );
  }
}

export default Event;
