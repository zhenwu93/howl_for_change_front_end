import React, { Component, Fragment } from "react";
import ReqInviteButton from "./ReqInviteButton";
import hfceventicon from "../assets/events/HFCeventicon.png";
import eventlogo from "../assets/events/events.jpg";
import empowerlogo from "../assets/events/empower.jpg";
import event1 from "../assets/events/HFCEvents/event1.jpg";
import event2 from "../assets/events/HFCEvents/event2.jpg";
import event3 from "../assets/events/HFCEvents/event3.jpg";
import event4 from "../assets/events/HFCEvents/event4.jpg";
import event5 from "../assets/events/HFCEvents/event5.jpg";
import event6 from "../assets/events/HFCEvents/event6.jpg";
import event7 from "../assets/events/HFCEvents/event7.jpg";
import event8 from "../assets/events/HFCEvents/event8.jpg";
import event9 from "../assets/events/HFCEvents/event9.jpg";
import event10 from "../assets/events/HFCEvents/event10.jpg";
import event11 from "../assets/events/HFCEvents/event11.jpg";
import event12 from "../assets/events/HFCEvents/event12.jpg";
import event13 from "../assets/events/HFCEvents/event13.jpg";
import event14 from "../assets/events/HFCEvents/event14.jpg";
import event15 from "../assets/events/HFCEvents/event15.jpg";
import event16 from "../assets/events/HFCEvents/event16.jpg";
import event17 from "../assets/events/HFCEvents/event17.jpg";
import event18 from "../assets/events/HFCEvents/event18.jpg";
import event19 from "../assets/events/HFCEvents/event19.jpg";
import event20 from "../assets/events/HFCEvents/event20.jpg";
import event21 from "../assets/events/HFCEvents/event21.jpg";
import event22 from "../assets/events/HFCEvents/event22.jpg";
import event23 from "../assets/events/HFCEvents/event23.jpg";
import event24 from "../assets/events/HFCEvents/event24.JPG";
import event25 from "../assets/events/HFCEvents/event25.JPG";
import event26 from "../assets/events/HFCEvents/event26.JPG";
import event27 from "../assets/events/HFCEvents/event27.JPG";
import event28 from "../assets/events/HFCEvents/event28.JPG";
import event29 from "../assets/events/HFCEvents/event29.JPG";
import event30 from "../assets/events/HFCEvents/event30.jpg";
import event31 from "../assets/events/HFCEvents/event31.jpg";
import event32 from "../assets/events/HFCEvents/event32.jpg";
import eventvideo from "../assets/events/events.mp4";
import yellow from "../assets/yellow.png";

import "./event.css";

class Event extends Component {
  render() {
    return (
      <Fragment>
        <div className="event-logo-container">
          <img src={eventlogo} alt="eventlogo" className="eventlogo" />
        </div>

        <div className="empower-logo-container">
          <div className="empower-mission">
            <div className="empower-header">
              <h1>EMPOWERING COMMUNITIES EVENTS</h1>
            </div>

            <div className="empower-paragraph1">
              <p>
                AN EVENT SERIES THAT REVOLVES AROUND A LIVE RECORDING OF
                INSIPRING CONVERSATIONS WITH INDIVIDUALS FROM ALL WALKS OF LIFE
                ABOUT HOW THEY HARNESS THE POWER OF STORYTELLING FOR POSITIVE
                IMPACT.
              </p>
            </div>

            <div className="empower-quote">
              <p>"STORIES ARE THE BUILDING BLOCKS OF SOCIETY;</p>
              <p>TO CHANGE SOCIETY, WE NEED TO CRAFT POWERFUL NEW STORIES."</p>
            </div>

            <div className="empower-paragraph2">
              <p>
                Our mission is to empower people to discover the power of
                storytelling for themselves in hearing from guests from a wide
                range of fields. We speak with traditional storytellers such as
                filmmakers and writers but also with scientists, educators,
                politicians, business leaders, and other individuals, who
                actively utilize storytelling and media to shape the cultural
                narrative and create social change.
              </p>
            </div>

            <div className='empower-footnote'>
              <p>*our partner NeueHouse generously hosts our events in both their NYC and LA loctaions</p>
            </div>
          </div>

          <img
            align="right"
            src={hfceventicon}
            alt="hfc event icon"
            className="hfceventicon"
          />
        </div>

        <div className="next-event-container" align="right">
          <div className="event-video-container">
            <iframe
              src={eventvideo}
              title="eventvid"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              align="left"
            />
            <ReqInviteButton />
          </div>
        <div className='next-event-text'>
            <h1>OUR NEXT EVENT</h1>
            <h2>EMPOWERING COMMUNITIES</h2>
            <h2>WITH ARLAN HAMILTON FROM BACKSTAGE CAPITAL</h2>
            <div className="req-invite-ctn container regtext" align="right">
              <ReqInviteButton />
            </div>
        </div>
          

          

          

          {/* <p className="ep5">
            For episode 5, we host trailblazing entrepreneur Arlan Hamilton to
            explore the power of story to catalyze change and shift narratives
            in Silicon Valley with her venture capital firm Backstage Capital,
            helping minimize funding disparities in tech.
          </p>

          <p>
            The conversatioan is followed by the HFC Story Hour featuring
            entrepreneurs sharing perilous, triumphal, cautionary, funny,
            inspiring sotires from their startup journeys.
          </p>
          <br />

          <p>DJ James Lomax on the decks to bookend the night.</p>
          <br />
          <p>The event is free. We can't wait to see you in LA soon</p>
          <br />
          <p>XOXO</p> */}
        </div>

        <div className="last-event-container">
          <div className="last-event-paragraphs-container">
            <p className="last-event-header"> OUR LAST EVENT </p>
            <p>
              {" "}
              We had an incredible turnout for Howl for Change's "Empowering
              communities" event with Madame Gandhi that took palce at Neue
              House in LA. We had an incredible turnout!
            </p>
            <br />

            <p>
              It was such a special and intimate evening of storytelling,
              empowerment, community, and performances.
            </p>
            <br />
            <p>
              Thank you to everyone who attended and contributed to the event!
              We hope you were inspired by our conversation with with Madame
              Gandhi, special thanks to Kiran for sharing her story with us.
            </p>
            <br />
          </div>

          <div className="grid-container container">
            <div className="grid-row container">
              <div className="grid-item-div">
                <img className="grid-item" src={event1} alt="event1" />
              </div>

              <div className="grid-item-div">
                <img className="event2 grid-item" src={event2} alt="event2" />
              </div>

              <div className="grid-item-div">
                <img className="event3 grid-item" src={event3} alt="event3" />
              </div>

              <div className="grid-item-div">
                <img className="event4 grid-item" src={event4} alt="event4" />
              </div>

              <div className="grid-item-div">
                <img className="event5 grid-item" src={event5} alt="event5" />
              </div>

              <div className="grid-item-div">
                <img className="event6 grid-item" src={event6} alt="event6" />
              </div>

              <div className="grid-item-div">
                <img className="event7 grid-item" src={event7} alt="event7" />
              </div>

              <div className="grid-item-div">
                <img className="event8 grid-item" src={event8} alt="event8" />
              </div>
            </div>

            <div className="grid-row container">
              <div className="grid-item-div">
                <img className="event9 grid-item" src={event9} alt="event9" />
              </div>

              <div className="grid-item-div">
                <img
                  className="event10 grid-item"
                  src={event10}
                  alt="event10"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event11 grid-item"
                  src={event11}
                  alt="event11"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event12 grid-item"
                  src={event12}
                  alt="event12"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event13 grid-item"
                  src={event13}
                  alt="event13"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event14 grid-item"
                  src={event14}
                  alt="event14"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event15 grid-item"
                  src={event15}
                  alt="event15"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event16 grid-item"
                  src={event16}
                  alt="event16"
                />
              </div>
            </div>

            <div className="grid-row container">
              <div className="grid-item-div">
                <img
                  className="event17 grid-item"
                  src={event17}
                  alt="event17"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event18 grid-item"
                  src={event18}
                  alt="event18"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event19 grid-item"
                  src={event19}
                  alt="event19"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event20 grid-item"
                  src={event20}
                  alt="event20"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event21 grid-item"
                  src={event21}
                  alt="event21"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event22 grid-item"
                  src={event22}
                  alt="event22"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event23 grid-item"
                  src={event23}
                  alt="event23"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event24 grid-item"
                  src={event24}
                  alt="event24"
                />
              </div>
            </div>

            <div className="grid-row container">
              <div className="grid-item-div">
                <img
                  className="event25 grid-item"
                  src={event25}
                  alt="event25"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event26 grid-item"
                  src={event26}
                  alt="event26"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event27 grid-item"
                  src={event27}
                  alt="event27"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event28 grid-item"
                  src={event28}
                  alt="event28"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event29 grid-item"
                  src={event29}
                  alt="event29"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event30 grid-item"
                  src={event30}
                  alt="event30"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event31 grid-item"
                  src={event31}
                  alt="event31"
                />
              </div>

              <div className="grid-item-div">
                <img
                  className="event32 grid-item"
                  src={event32}
                  alt="event32"
                />
              </div>
            </div>
            <p className="credentials" align="right">
              *photos courtesy of John Bernstein, Elko Weaver, and NeueHouse.
            </p>
          </div>
        </div>

        <div className="event-video-container">
          <img src={yellow} alt="yellow line" className="bottom-yellow-line" />
          <p align="center">LISTEN TO OR WATCH THE 4TH HFC EPISODE NOW</p>

          <div className="hfc-sound-container">
            <iframe
              title="soundcloud"
              className="grid-item song2"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303208989&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>

          <div className="hfc-video-container">
            <iframe
              src="https://www.youtube.com/embed/uX0fowPSQsY"
              title="HFCep4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Event;
