import React, { Component, Fragment } from 'react'
import ReqInviteButton from './ReqInviteButton'
import eventlogo from "../assets/events/events.jpg"
import empowerlogo from "../assets/events/empower.jpg"
import event1 from "../assets/events/HFCEvents/event1.jpg"
import event2 from "../assets/events/HFCEvents/event2.jpg"
import event3 from "../assets/events/HFCEvents/event3.jpg"
import event4 from "../assets/events/HFCEvents/event4.jpg"
import event5 from "../assets/events/HFCEvents/event5.jpg"
import event6 from "../assets/events/HFCEvents/event6.jpg"
import event7 from "../assets/events/HFCEvents/event7.jpg"
import event8 from "../assets/events/HFCEvents/event8.jpg"
import event9 from "../assets/events/HFCEvents/event9.jpg"
import event10 from "../assets/events/HFCEvents/event10.jpg"
import event11 from "../assets/events/HFCEvents/event11.jpg"
import event12 from "../assets/events/HFCEvents/event12.jpg"
import event13 from "../assets/events/HFCEvents/event13.jpg"
import event14 from "../assets/events/HFCEvents/event14.jpg"
import event15 from "../assets/events/HFCEvents/event15.jpg"
import event16 from "../assets/events/HFCEvents/event16.jpg"
import event17 from "../assets/events/HFCEvents/event17.jpg"
import event18 from "../assets/events/HFCEvents/event18.jpg"
import event19 from "../assets/events/HFCEvents/event19.jpg"
import event20 from "../assets/events/HFCEvents/event20.jpg"
import event21 from "../assets/events/HFCEvents/event21.jpg"
import event22 from "../assets/events/HFCEvents/event22.jpg"
import event23 from "../assets/events/HFCEvents/event23.jpg"
import event24 from "../assets/events/HFCEvents/event24.JPG"
import event25 from "../assets/events/HFCEvents/event25.JPG"
import event26 from "../assets/events/HFCEvents/event26.JPG"
import event27 from "../assets/events/HFCEvents/event27.JPG"
import event28 from "../assets/events/HFCEvents/event28.JPG"
import event29 from "../assets/events/HFCEvents/event29.JPG"
import event30 from "../assets/events/HFCEvents/event30.jpg"
import event31 from "../assets/events/HFCEvents/event31.jpg"
import event32 from "../assets/events/HFCEvents/event32.jpg"



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

      <div className="next-event-container" align="right">
        <h1>OUR NEXT EVENT</h1>
        <h2>EMPOWERING COMMUNITIES</h2>
        <h2>WITH ARLAN HAMILTON FROM BACKSTAGE CAPITAL</h2>

        <div className="req-invite-ctn container regtext" align="right">
          <ReqInviteButton/>
        </div>

        <p className="ep5">For episode 5, we host trailblazing entrepreneur Arlan Hamilton
        to explore the power of story to catalyze change and shift narratives
        in Silicon Valley with her venture capital firm Backstage Capital, helping
        minimize funding disparities in tech.</p>

        <p>The conversatioan is followed by the HFC Story Hour featuring entrepreneurs sharing perilous,
        triumphal, cautionary, funny, inspiring sotires from their startup journeys.</p><br></br>

        <p>DJ James Lomax on the decks to bookend the night.</p><br></br>
        <p>The event is free. We can't wait to see you in LA soon</p><br></br>
        <p>XOXO</p>
      </div>

      <div className="last-event container">
        <p className="last-event-header"> OUR LAST EVENT </p>
        <p> We had an incredible turnout for Howl for Change's "Empowering communities" event
        with Madame Gandhi that took palce at Neue House in LA. We had an incredible turnout!</p><br></br>

        <p>It was such a special and intimate evening of storytelling, empowerment, community, and performances.</p><br></br>
        <p>Thank you to everyone who attended and contributed to the event! We hope you were inspired by our conversation with
         with Madame Gandhi, special thanks to Kiran for sharing her story with us.</p><br></br>

         <div className="grid-container container">

           <div className='grid-row container'>
             <div className="grid-item-div">
               <img
                 className="grid-item"
                 src={event1}
                 alt="event1">
               </img>
             </div>

             <div className="grid-item-div">
               <img
                 className="event2 grid-item"
                 src={event2}
                 alt="event2">
               </img>
             </div>

             <div className="grid-item-div">
               <img
                 className="event3 grid-item"
                 src={event3}
                 alt="event3">
               </img>
             </div>

             <div className="grid-item-div">
               <img
                 className="event4 grid-item"
                 src={event4}
                 alt="event4">
               </img>
             </div>
           </div>

           <div className='grid-row container'>
             <div className="grid-item-div">
               <img
                 className="event5 grid-item"
                 src={event5}
                 alt="event5">
               </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event6 grid-item"
                src={event6}
                alt="event6">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event7 grid-item"
                src={event7}
                alt="event7">
              </img>
             </div>

             <div className="grid-item-div">
             <img
               className="event8 grid-item"
               src={event8}
               alt="event8">
             </img>
           </div>
          </div>

           <div className='grid-row container'>
           <div className="grid-item-div">
              <img
                className="event9 grid-item"
                src={event9}
                alt="event9">
                </img>
            </div>

             <div className="grid-item-div">
              <img
                className="event10 grid-item"
                src={event10}
                alt="event10">
               </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event11 grid-item"
                src={event11}
                alt="event11">
              </img>
             </div>

             <div className="grid-item-div">
                <img
                  className="event12 grid-item"
                  src={event12}
                  alt="event12">
               </img>
             </div>
           </div>

           <div className='grid-row container'>
             <div className="grid-item-div">
                <img
                  className="event13 grid-item"
                  src={event13}
                  alt="event13">
                </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event14 grid-item"
                src={event14}
                alt="event14">
               </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event15 grid-item"
                src={event15}
                alt="event15">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event16 grid-item"
                src={event16}
                alt="event16">
              </img>
             </div>
           </div>

           <div className='grid-row container'>
             <div className="grid-item-div">
              <img
                className="event17 grid-item"
                src={event17}
                alt="event17">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event18 grid-item"
                src={event18}
                alt="event18">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event19 grid-item"
                src={event19}
                alt="event19">
               </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event20 grid-item"
                src={event20}
                alt="event20">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event21 grid-item"
                src={event21}
                alt="event21">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event22 grid-item"
                src={event22}
                alt="event22">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event23 grid-item"
                src={event23}
                alt="event23">
              </img>
             </div>

             <div className="grid-item-div">
              <img
                className="event24 grid-item"
                src={event24}
                alt="event24">
              </img>
             </div>
            </div>

            <div className='grid-row container'>
              <div className="grid-item-div">
               <img
                 className="event25 grid-item"
                 src={event25}
                 alt="event25">
               </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event26 grid-item"
                 src={event26}
                 alt="event26">
               </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event27 grid-item"
                 src={event27}
                 alt="event27">
                </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event28 grid-item"
                 src={event28}
                 alt="event28">
               </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event29 grid-item"
                 src={event29}
                 alt="event29">
               </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event30 grid-item"
                 src={event30}
                 alt="event30">
               </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event31 grid-item"
                 src={event31}
                 alt="event31">
               </img>
              </div>

              <div className="grid-item-div">
               <img
                 className="event32 grid-item"
                 src={event32}
                 alt="event32">
               </img>
              </div>
             </div>
              <p className="credentials">*photos courtesy of John Bernstein, Elko Weaver, and NeueHouse.</p>
            </div>
           </div>

      </Fragment>
    );
  }
}

export default Event;
