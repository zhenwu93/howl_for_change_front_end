import React, { Component, Fragment } from "react";
import ReqInviteButton from "./ReqInviteButton";

import yellow from "../assets/yellow.png";
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
import hfcapp from "../assets/more/ar/HFCapp.png";
import app from "../assets/more/ar/app.png";
import android from "../assets/more/ar/android.png";
import fullprocess from "../assets/more/fullprocess.png";
import podcastIcon from "../assets/more/podcast/hfcpodcasticon.png";
import radiocom from "../assets/more/podcast/radiocom.png";
import pawson from "../assets/more/pawson.png";

import "./podcast.css";

class Podcast extends Component {
  render() {
    return (
      <Fragment>
        <div className="podcast-container">
          <div className="podcast-youtube-container">
            <div className="podcast-youtube">
              <h1 className="podcast-header">HFC PODCAST & YOUTUBE SERIES</h1>
              <h2>
                INSPIRING CONVERSATIONS WITH INDIVIDUALS FROM ALL WALKS OF LIFE{" "}
              </h2>
              <h2>
                ABOUT HOW THEY HARNESS THE POWER OF STORYTELLING FOR POSITIVE
                IMPACT.
              </h2>

              <img
                className="podcastIcon-img"
                src={podcastIcon}
                alt="podcastIcon"
              />
            </div>

            <div className="hfc-media-container">
              <div className="hfc-sound-container">
                <iframe
                  height="200"
                  width="300"
                  title="soundcloud"
                  className="grid-item-song2"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/620223069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>

              <div className="hfc-video-container">
                <iframe
                  height="210"
                  width="350"
                  className="grid-item-video1"
                  src="https://www.youtube.com/embed/uX0fowPSQsY"
                  title="HFCep4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>

            <div className="subscribe-div">
              <p id="how-to">HOW TO LISTEN & WATCH</p>
              <p>Subscribe (it's free!) in your favorite podcast app.</p>
              <p>
                Episodes are released on a monthly basis. Recorded live from at
                our HFC Community Events.
              </p>
            </div>

            <div className="grid-container grid-padding">
              <div className="grid-row container" id="grid-row1">
                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={stitcher}
                    alt="stitcher"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img className="podcast-grid-item" src={apple} alt="apple" />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={google}
                    alt="google"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={overcast}
                    alt="overcast"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={pocketcast}
                    alt="pocketcast"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={breaker}
                    alt="breaker"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img className="podcast-grid-item" src={rss} alt="rss" />
                </div>
              </div>

              <div className="grid-row container" id="grid-row2">
                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={youtube}
                    alt="youtube"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={spotify}
                    alt="spotify"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={soundcloud}
                    alt="soundcloud"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={castbox}
                    alt="castbox"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={tunein}
                    alt="tunein"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={radiocom}
                    alt="radiocom"
                  />
                </div>

                <div className="podcast-grid-item-div">
                  <img
                    className="podcast-grid-item"
                    src={radiopublic}
                    alt="radiopublic"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hfc-app-container">
            <img src={hfcapp} alt="applogo" className="phone-app" />
            <div className="hfc-app-paragraph">
              <h1 className="app-header">HFC AR APP</h1>
              <p>
                THE HOWL FOR CHANGE AR APP OFFERS AN OPPORTUNITY TO MEANINGFULLY
                CONTRIBUTE TO CHANGING SOCIAL BIAS AND FALSE NARRATIVES.
              </p>

              <p id="app-paragraph">
                The app allows you to shield your identity in mystery until you
                are ready to reveal it by covering your face and augmenting your
                voice, offering a useful and fun tool for users to share their
                stories and truths in a safe and non-judgmental way that is free
                of bias.
              </p>
            </div>
          </div>

          <div className="your-turn">
            <p>NOW IT IS YOUR TURN!</p>
            <h1>Celebrate what makes us different to unite us as equal.</h1>
            <h1>
              Join us to create a world of wolves and Howl with us for change.
            </h1>

            <h1 className="find-ar">Find the AR app in your App Store:</h1>
            <div className="app-store-icon">
              <img src={app} alt="app" />
              <img src={android} alt="android" />
            </div>
          </div>

          <div className="little-giant-wolf-container">
            <div className="wolf-text">
              <p className="paws-header">PAWS ON APPROACH</p>
              <p className="paws-on-paragraph">
                OUR AGENCY & CONTENT STUDIO OFFERS NONPROFITS A HANDS-ON &{" "}
                HOLISTIC APPROACH FOR THEIR CREATIVE CAMPAIGN AND SERVICE NEEDS,
                STAFFED WITH MEMBERS FROM OUR COMMUNITY.
              </p>
            </div>

            <div className="paws-on-img-container">
              <img src={pawson} alt="paws" className="paws-on-img" />
              <div className="howl-at-us-button-container">
                <ReqInviteButton />
              </div>
            </div>
          </div>



          <div className="our-process">
            <p className="our-process-header">Our Process:</p>
            <img src={fullprocess} alt="fullprocess" className="fullprocess" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Podcast;
