import React, { Component } from "react";
import ReqInviteButton from "./ReqInviteButton.js";

import animation from "../assets/content/animation.png";
import gaming from "../assets/content/gaming.png";
import graphic from "../assets/content/graphic.png";
import more from "../assets/content/more.png";
import moreimg from "../assets/content/moreimg.jpg";
import music from "../assets/content/music.png";
import newmedia from "../assets/content/newmedia.png";
import photo from "../assets/content/photo.png";
import programming from "../assets/content/programming.png";
import video from "../assets/content/video.png";
import writing from "../assets/content/writing.png";
import chariot from "../assets/content/chariot.png";
import tagline from "../assets/issues/tagline.png";
import whoweare from "../assets/who we are.png";
// import "./gallery.css"
import './Gallery.sass'

class Gallery extends Component {

  state = {
    isOpen: false
  }

  handleShowDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log('clicked');
  }

  render() {
    return (
      
      <div className="section">
        <div className="container">
          <div className="gallery grid-ctn">
            <div className="gallery-text-div">
              <img src={whoweare} alt="whoweare" className="whoweare" />
              <p className="gallery-paragraph rightAlignText">
                OUR COMMUNITY IS MADE UP OF STORYTELLERS AND CONTENT CREATOR, BOTH
                VETERAN AND EMERGING, EACH ONE FUELED BY PASSION AND CREATIVITY.
              </p>
            </div>
          </div>

            <div className="columns is-vcentered is-multiline">
                {/* photo category done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-one">
                      <img
                        src={photo}
                        alt="logo"
                        className="categoryLogoPhoto"
                      />
                    </div>
                  </div>
                </div>
                
                {/* photo 2  done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-two">
                    </div>
                  </div>
                </div>

                {/* video1 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <iframe
                      title="video1"
                      // className="grid-item video1"
                      src="https://player.vimeo.com/video/345012446"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      top="0"
                      left="0"
                      height="500"
                    />
                  </div>
                </div>
                
                {/* video2 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <iframe
                      title="video2"
                      // className="grid-item video2"
                      align="right"
                      src="https://player.vimeo.com/video/116513060"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />

                    <img
                      src={video}
                      alt="videologo"
                      className="categoryLogoRight"
                      align="right"
                    />
                  </div>
                </div>
                
                {/* music category done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <img
                      src={music}
                      alt="music"
                      className="categoryLogoMusic"
                    />
                    <figure className="iframe-container">
                      <iframe
                        title="swan"
                        // className="swan-frame-fix"
                        border="0"
                        src="https://bandcamp.com/EmbeddedPlayer/album=516918889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                      >
                        <a href="http://ariansaleh.bandcamp.com/album/swan-bird-googoosh-remixed">
                          Swan Bird (Googoosh Remixed) by Arian Saleh
                        </a>
                      </iframe>
                    </figure>
                  </div>
                </div>

                {/* soundcloud done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <iframe
                      title="soundcloud"
                      // className="grid-item song2"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303208989&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </div>

                {/* graphic1 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-three">
                    </div>
                  </div>
                </div>
                
                {/* graphic2 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-four">
                      <img
                        src={graphic}
                        alt="graphic"
                        className="categoryLogoGraphic"
                      />
                    </div>
                  </div>
                </div>

                {/* writing1 category done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-writing-fix">
                    <blockquote 
                    className="gallery-blog"
                    >
                    <img
                      className="categoryLogoWriting"
                      src={writing}
                      alt="writing"
                    />
                      <h4>
                        <a href="https://medium.com/@jeremytneely/with-only-45-red-wolves-left-in-the-wild-confinement-plan-wont-save-species-b5b5b3b9c353">
                          With Only 45 Red Wolves Left in the Wild Confinement Plan
                          Won't Save Species
                        </a>
                      </h4>
                      <p className="">
                        Sending a mixed message for the future of red wolves , the
                        U.S. Fish and Wildlife Service announced Monday it will
                        confine red wolf recovery to just federal lands in Dare
                        County, North Carolina, but will identify new sites for wolf
                        introductions and double the number of captive-breeding
                        pairs.
                      </p>
                    </blockquote>
                  </div>
                </div>

                {/* writing2 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-writing-fix">
                    <blockquote 
                    className="gallery-blog"
                    >
                      <h4>
                        <a href="https://medium.com/@jkhoey/economics-and-activism-getting-more-girls-into-stem-2b98c041ba66">
                          Economics And Activism: Getting More Girls Into STEM
                        </a>
                      </h4>
                      <p>
                        The mission of the YWCA of the City of New York ("YWCA") can
                        be summed up in 5 words: eliminating racism and empowering
                        women. Fueled by that mission, the YWCA offers STEAAM
                        (Science, Technology, Engineering, Arts, Activism and Math)
                        as an expanded approach - grounded in dignity and
                        self-determination - to more traditional approaches to STEM
                        (Science, Technology, Engineering and Math) education.
                      </p>
                    </blockquote>
                  </div>
                </div>

                {/* vimeo done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <iframe
                      // className="grid-item animation2"
                      title="tree"
                      align="right"
                      src="https://player.vimeo.com/video/206468217?color=ffedc2&title=0&byline=0&portrait=0"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* animation done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-five">
                      <img
                        src={animation}
                        alt="animation"
                        className="categoryLogoAnimation"
                      />
                    </div>
                  </div>
                </div>

                {/* waiting for peace done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <img
                      className="categoryLogoPeace"
                      src={newmedia}
                      alt="newmedia"
                    />
                    <iframe
                      // className="grid-item media1"
                      title="waiting for peace"
                      src="https://www.youtube.com/embed/sRTSJ1K-yn8"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* authentically us done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <iframe
                      // className="grid-item media2"
                      title="authentically us"
                      src="https://www.youtube.com/embed/0sNMa9M1_nk"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* origami done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <iframe
                      // className="grid-item game1"
                      title="origami"
                      src="https://player.vimeo.com/video/338142145"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* 1979 revolution done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-frame-fix">
                    <img
                      className="categoryLogoRevo"
                      src={gaming}
                      alt="gaming"
                    />
                    <iframe
                      // className="grid-item game2"
                      title="1979 revolution"
                      src="https://www.youtube.com/embed/pGeFR8AqM7Q"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* chariot categor done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-chariot">
                      <img
                        className="categoryLogoProgramming"
                        src={programming}
                        alt="programming"
                      /> 
                    </div>
                  </div>
                </div>

                {/* program1 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-seven">
                    </div>
                    {/* <img
                      // className="grid-item program2"
                      src="https://content.fortune.com/wp-content/uploads/2018/10/ar52fmia-hanak.jpg"
                      alt="program1"
                    /> */}
                  </div>
                </div>

                {/* more1 done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-eight"></div>
                    {/* <img
                      // className="grid-item more1"
                      src="https://www.sadahespiiproctor.com/uploads/9/1/6/7/9167447/img-1364_orig.jpg"
                      alt="more1"
                    /> */}
                  </div>
                </div>

                {/* more2 category done*/}
                <div className="column is-one-quarter">
                  <div className="gallery-item-fix">
                    <div className="main-image-nine">
                      <img
                        src={more}
                        alt="more"
                        className="categoryLogoMore2"
                      /> 
                    </div>
                  </div>
                </div>
              </div>
            <div className="tag-line container">
              <img src={tagline} alt="tag" className="tag-line-img" />
            </div>

            <ReqInviteButton />
            </div>
          </div>

    );
  }
}
export default Gallery;
