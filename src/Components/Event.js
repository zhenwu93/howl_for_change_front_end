import React, { Component, Fragment } from "react";
import hfceventicon from "../assets/events/HFCeventicon.png";
import eventlogo from "../assets/events/events.jpg";

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
import event24 from "../assets/events/event24.jpg";

import eventvideo from "../assets/events/events.MOV";

import stitcher from "../assets/more/podcast/stitcher.png";
import apple from "../assets/more/podcast/apple.png";
import breaker from "../assets/more/podcast/breaker.png";
import castbox from "../assets/more/podcast/castbox.png";
import google from "../assets/more/podcast/google.png";
import overcast from "../assets/more/podcast/overcast.png";
import pocketcast from "../assets/more/podcast/pocketcast.png";
import radiopublic from "../assets/more/podcast/radiopublic.png";
import rss from "../assets/more/podcast/rss.png";
import soundcloud from "../assets/more/podcast/soundcloud.png";
import spotify from "../assets/more/podcast/spotify.png";
import tunein from "../assets/more/podcast/tunein.png";
import youtube from "../assets/more/podcast/youtube.png";
import radiocom from "../assets/more/podcast/radiocom.png";

import empowering from "../assets/events/empowering.png";
import nextevent from "../assets/events/nextevent.png";
import lastevent from "../assets/events/lastevent.png";
import lastepisode from "../assets/events/lastepisode.png";
import rsvp from "../assets/events/rsvp.png"

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
              <img src={empowering} alt="empowering" className="empowering-header"/>
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
              <br/>
            </div>

            <div className="empower-footnote">
              <p>
                *our partner NeueHouse generously hosts our events in both their
                NYC and LA locations
              </p>
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
            <video
              src={eventvideo}
              title="eventvid"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              align="left"
              className="event-video"
            />

            <div className='rsvp1-btn-ctn'>
              <a href="http://rsvp.neuehouse.com/howlforchangebelal">
                <img src={rsvp} alt="rsvp1" className='rsvp1'/>
              </a>
            </div>
          </div>

          <div className="next-event-text">
            <img src={nextevent} alt="nextevent" className="next-event-header" />
            <h2>EMPOWERING COMMUNITIES</h2>
            <h2>WITH AMMAR BELAL FROM ONE432</h2>
            <br/>

            <a href="http://rsvp.neuehouse.com/howlforchangebelal">
              <img src={rsvp} alt="rsvp1" className='rsvp2'/>
            </a>

            <div className="event-details" align="left">
              <br/>
              <p>
                Join us next Thursday 08/08 in NYC at 6:30pm at the NeueHouse
                for Episode 6, where we host multicultural social impact fashion
                designer Ammar Belal to explore the power of the fashion and
                storytelling on the global identity.
              </p>
              <br />
              <p>
                Belal's vision is to find harmony amidst fashion, critical
                awareness, and Social Entrepreneurship, which manifests in his
                company ONE432, a socially conscious design system with a focus
                on transparency.
              </p>
              <br />
              <p>
                The evening will feature a conversation between Belal and our
                host Alicia Coleman, an immersive fashion performance and a DJ,
                spinning (and howling) into the night.
              </p>
              <br />
              <p>The event is free. We can't wait to see you in NYC soon.</p>
              <br />
              <div className="emoji-div">
                <p>xoxo</p>
                <i className="em em-wolf"></i>
                <i className="em em-sparkling_heart"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="last-event-container">
          <div className="last-event-text">
            <div className="last-event-header">
            <div className="last-event-img-container">
              <img src={lastevent} alt="lastevent" className="last-event-header-img"/>
            </div>
              <h2>EMPOWERING COMMUNITIES</h2>
              <h2>With arlan hamilton</h2>
            </div>
            <div className="last-event-paragraphs-container">
              <p>
                We had an incredible turnout for last Empowering Communities NYC
                event with trailblazing entrepreneur Arlan Hamilton to explore
                the power of store to catalyze change and shift narratives in
                Silicon Valley with her venture capital firm Backstage Capital,
                helping minimize funding disparities in tech.
              </p>
              <br />

              <p>
                It was such a special and intimate evening of storytelling,
                empowerment, community and stories shared by the amazing
                entrepreneurs during our Story Hour.
              </p>
              <br />
              <p>
                Thank you to everyone who attended and contributed to the event!
                We hope you were inspired by our conversation with Arlan
                Hamilton! Thank you Arlan for sharing your story with us.
              </p>
              <br />
            </div>
          </div>

          <div className="event-grid-container">

            <div className="event-grid-row-container">
              <div className="event-grid-item-div">
                <img className="event-grid-item" src={event1} alt="event1" />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event2}
                  alt="event2"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event3}
                  alt="event3"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event4}
                  alt="event4"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event5}
                  alt="event5"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event6}
                  alt="event6"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event7}
                  alt="event7"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event8}
                  alt="event8"
                />
              </div>
            </div>

            <div className="event-grid-row-container">
              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event9}
                  alt="event9"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event10}
                  alt="event10"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event11}
                  alt="event11"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event12}
                  alt="event12"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event13}
                  alt="event13"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event14}
                  alt="event14"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event15}
                  alt="event15"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event16}
                  alt="event16"
                />
              </div>
            </div>

            <div className="event-grid-row-container">
              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event17}
                  alt="event17"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event18}
                  alt="event18"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event19}
                  alt="event19"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event20}
                  alt="event20"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event21}
                  alt="event21"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event22}
                  alt="event22"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event23}
                  alt="event23"
                />
              </div>

              <div className="event-grid-item-div">
                <img
                  className="event-grid-item"
                  src={event24}
                  alt="event24"
                />
              </div>
            </div>
          </div>
          <p className="credentials" align="right">
            *photos courtesy of John Bernstein, Elko Weaver, and NeueHouse.
          </p>
        </div>

        <div className="event-video-container">

          <img src={lastepisode} alt="lastepisode" className="lastepisode"/>

          <div className="hfc-sound-and-video-ctn">
            <div className="hfc-sound-ctn">
              <iframe
                title="soundcloud"
                className="grid-item-song2"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/662718698&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                width="205px"
                height="206px"
              />
            </div>

            <div className="hfc-video-ctn">
              <iframe
                src="https://www.youtube.com/embed/uX0fowPSQsY"
                title="HFCep4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                height="206px"
              />
            </div>
          </div>
        </div>



        <div className="grid-container grid-padding">
          <div className="subscribe-div">
            <br />
            <p>Subscribe (it's free!) in your favorite podcast app:</p>
          </div>
          <div className="grid-row container" id="grid-row1">
            <div className="podcast-grid-item-div">
              <a href="https://www.stitcher.com/podcast/howl-for-change/the-howl-for-change-podcast">
                <img
                  className="podcast-grid-item"
                  src={stitcher}
                  alt="stitcher"
                  href="https://www.stitcher.com/podcast/howl-for-change/the-howl-for-change-podcast"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://itunes.apple.com/us/podcast/howl-for-change/id1454822383?mt=2">
                <img
                  className="podcast-grid-item"
                  src={apple}
                  alt="apple"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://play.google.com/music/listen?u=0#/ps/I64oehcz5cnwnui7pw2smqxq4xe">
                <img
                  className="podcast-grid-item"
                  src={google}
                  alt="google"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://overcast.fm/itunes1454822383/howl-for-change">
                <img
                  className="podcast-grid-item"
                  src={overcast}
                  alt="overcast"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://pca.st/oN8e">
                <img
                  className="podcast-grid-item"
                  src={pocketcast}
                  alt="pocketcast"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://www.breaker.audio/howl-for-change">
                <img
                  className="podcast-grid-item"
                  src={breaker}
                  alt="breaker"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="http://feeds.soundcloud.com/users/soundcloud:users:586585557/sounds.rss">
                <img className="podcast-grid-item" src={rss} alt="rss" />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://www.youtube.com/channel/UCqX4qeEsEYTHURnCZa2TrGg">
                <img
                  className="podcast-grid-item"
                  src={youtube}
                  alt="youtube"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://open.spotify.com/show/4KQxc2FCDG0rW6GOtojxYM?si=AoicWhY9Q9OeABQWlrUjkQ">
                <img
                  className="podcast-grid-item"
                  src={spotify}
                  alt="spotify"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="http://soundcloud.com/howl-for-change">
                <img
                  className="podcast-grid-item"
                  src={soundcloud}
                  alt="soundcloud"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://castbox.fm/channel/Howl-For-Change-id2041403?country=us">
                <img
                  className="podcast-grid-item"
                  src={castbox}
                  alt="castbox"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="http://tun.in/pjmEZ">
                <img
                  className="podcast-grid-item"
                  src={tunein}
                  alt="tunein"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <img
                className="podcast-grid-item"
                src={radiocom}
                alt="radiocom"
              />
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://radiopublic.com/howl-for-change-G7q1Ja">
                <img
                  className="podcast-grid-item"
                  src={radiopublic}
                  alt="radiopublic"
                />
              </a>
            </div>
          </div>

          <div className="grid-row container" id="grid-row2">
            {/* <div className="podcast-grid-item-div">
              <a href="https://www.youtube.com/channel/UCqX4qeEsEYTHURnCZa2TrGg">
                <img
                  className="podcast-grid-item"
                  src={youtube}
                  alt="youtube"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://open.spotify.com/show/4KQxc2FCDG0rW6GOtojxYM?si=AoicWhY9Q9OeABQWlrUjkQ">
                <img
                  className="podcast-grid-item"
                  src={spotify}
                  alt="spotify"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="http://soundcloud.com/howl-for-change">
                <img
                  className="podcast-grid-item"
                  src={soundcloud}
                  alt="soundcloud"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://castbox.fm/channel/Howl-For-Change-id2041403?country=us">
                <img
                  className="podcast-grid-item"
                  src={castbox}
                  alt="castbox"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <a href="http://tun.in/pjmEZ">
                <img
                  className="podcast-grid-item"
                  src={tunein}
                  alt="tunein"
                />
              </a>
            </div>

            <div className="podcast-grid-item-div">
              <img
                className="podcast-grid-item"
                src={radiocom}
                alt="radiocom"
              />
            </div>

            <div className="podcast-grid-item-div">
              <a href="https://radiopublic.com/howl-for-change-G7q1Ja">
                <img
                  className="podcast-grid-item"
                  src={radiopublic}
                  alt="radiopublic"
                />
              </a>
            </div> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Event;
