import React, { Component, Fragment } from "react";

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
import pawsonapproach from '../assets/HFC paws on.png'
import arapp from '../assets/HFC ar app.png'
import podcastyoutube from '../assets/HFC podcast youtube.png'

import "./podcast.css";

class Podcast extends Component {
  render() {
    return (
      <Fragment>
        <div className="podcast-container">
          <div className="podcast-youtube-container">
            <div className="podcast-youtube">
              <img src={podcastyoutube} alt="podcastyoutube" className="podcastyoutube"></img>
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
              <div className="grid-row-container" id="grid-row1">
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
              </div>

              <div className="grid-row-container" id="grid-row2">
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
            </div>
          </div>

          <div className="hfc-app-container">
            <img src={hfcapp} alt="applogo" className="phone-app" />
            <div className="hfc-app-paragraph">
              <img src={arapp} alt="arapp" className="arapp"></img>
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
              <a href="https://itunes.apple.com/us/app/howl-for-change/id1434457242?mt=8">
                <img src={app} alt="app" className="app-icon-img"/>
              </a>

              <a href="https://tinyurl.com/ycffnssz">
                <img src={android} alt="android" className="android-icon-img"/>
              </a>
            </div>
          </div>

          <div className="little-giant-wolf-container">
            <div className="wolf-text">
              <img src={pawsonapproach} alt="pawsonapproach" className="pawsonapproach"></img>
              <p className="paws-on-paragraph">
                OUR AGENCY & CONTENT STUDIO OFFERS NONPROFITS A HANDS-ON &{" "}
                HOLISTIC APPROACH FOR THEIR CREATIVE CAMPAIGN AND SERVICE NEEDS,
                STAFFED WITH MEMBERS FROM OUR COMMUNITY.
              </p>
            </div>

            <div className="paws-on-img-container">
              <img src={pawson} alt="paws" className="paws-on-img" />
              <div className="howl-at-us-button-container">
                <a href="https://www.littlegiantwolf.com/contact"><button type="button" className="howl-at-us-btn button">HOWL AT US</button></a>
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
