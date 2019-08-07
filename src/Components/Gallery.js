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
import yellow from "../assets/yellow.png";
import tagline from "../assets/issues/tagline.png";
// import "./gallery.css"
import './Gallery.sass'

class Gallery extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="gallery grid-ctn">
            <div className="gallery-text-div">
              <img src={yellow} alt="yellowline" className="wwr-yellowline1" />
              <p className="gallery-header"> WHO WE ARE </p>
              <p className="gallery-paragraph rightAlignText">
                OUR COMMUNITY IS MADE UP OF STORYTELLERS AND CONTENT CREATOR, BOTH
                VETERAN AND EMERGING, EACH ONE FUELED BY PASSION AND CREATIVITY.
              </p>
            </div>
          </div>

            <div className="columns is-vcentered is-multiline">
                {/* photo category */}
                <div className="column is-one-quarter">
                  <div className="gallery-item-top">
                      <img
                        src={photo}
                        alt="logo"
                        className="categoryLogo"
                      />

                      <img
                        // className="grid-item"
                        src="https://static1.squarespace.com/static/517773bde4b08b3c09a05827/5c0343dcaa4a996bc0212ba5/5c034447352f531f773a0a03/1543717964348/segou-025-IMG_9257.jpg?format=1500w"
                        alt="photo1"
                      />
                  </div>
                </div>
                
                {/* photo 2 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      // className="photo2 grid-item"
                      src="https://static1.squarespace.com/static/5137808ce4b06d40ae8adf8a/5b6a037e03ce6485a8d7ce56/5b6a395e70a6ad2f21c04939/1533688287946/egyptian+soldiers+arab+spring.jpg?format=750w"
                      alt="photo2"
                    />
                  </div>
                </div>

                {/* video1 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <iframe
                      title="video1"
                      // className="grid-item video1"
                      src="https://player.vimeo.com/video/345012446"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* video2 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
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
                      // className="leftLogo categoryLogo videologo"
                      align="right"
                    />
                  </div>
                </div>
                
                {/* music */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      src={music}
                      alt="music"
                      className="categoryLogo musiclogo"
                    />
                    <iframe
                      title="swan"
                      // className="grid-item song1"
                      border="0"
                      src="https://bandcamp.com/EmbeddedPlayer/album=516918889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                    >
                      <a href="http://ariansaleh.bandcamp.com/album/swan-bird-googoosh-remixed">
                        Swan Bird (Googoosh Remixed) by Arian Saleh
                      </a>
                    </iframe>
                  </div>
                </div>

                {/* soundcloud */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
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

                {/* graphic1 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      // className="grid-item graphic1"
                      src="https://images.squarespace-cdn.com/content/v1/5137808ce4b06d40ae8adf8a/1533687176760-KC3IPQDFX93UM0GBYONR/ke17ZwdGBToddI8pDm48kD87M0U7Mr8Yzc4-RMcNsOpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIiumrcAedN-bQTn2R0qAB6AL-GedccOSmw3wZu30bBawKMshLAGzx4R3EDFOm1kBS/jerusalem_potraits.jpg?format=2500w"
                      alt="graphic1"
                    />
                  </div>
                </div>
                
                {/* graphic2 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      align="right"
                      // className="grid-item graphic2"
                      src="https://images.squarespace-cdn.com/content/v1/5137808ce4b06d40ae8adf8a/1533685790486-RFNJD4UGUMARM3VVV34E/ke17ZwdGBToddI8pDm48kO5kBq5EvnYhvlHvh_s2fYQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc7RIW_1NHz48DMCo4w_aPejh2F2hlNaQzpkS0plhZquSmmKz9-JpnXIHHlDG4RYaL/earthmonth-hero.png?format=2500w"
                      alt="graphic2"
                    />

                    <img
                      src={graphic}
                      alt="graphic"
                      className="leftLogo graphiclogo"
                      align="right"
                    />
                  </div>
                </div>

                {/* writing1 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      className="categoryLogo writinglogo"
                      src={writing}
                      alt="writing"
                    />

                    <blockquote 
                    // className="grid-item writing1"
                    >
                      <h4>
                        <a href="https://medium.com/@jeremytneely/with-only-45-red-wolves-left-in-the-wild-confinement-plan-wont-save-species-b5b5b3b9c353">
                          With Only 45 Red Wolves Left in the Wild Confinement Plan
                          Won't Save Species
                        </a>
                      </h4>
                      <p>
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

                {/* writing2 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <blockquote 
                    // className="grid-item writing2"
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

                {/* vimeo */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
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

                {/* animation */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      src={animation}
                      alt="animation"
                      className="categoryLogo animationlogo"
                      align="right"
                    />
                    <img
                      // className="grid-item animation1"
                      align="right"
                      src="https://images.squarespace-cdn.com/content/v1/56c890e745bf2194d5449a55/1535821402678-3HR37WTYGTYKIY4FFDZP/ke17ZwdGBToddI8pDm48kBZw6jF4_OvU-ddo_vwqGhp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub61YCrK70I7JIpWiI8ho4Yi1WvVNQtDE81xuRbL1MFKm0sD-Bab7E9MY8W31A7zMQ/BM+Title+Card+FONT+v1.jpeg?format=1000w"
                      alt="animation1"
                    />
                  </div>
                </div>

                {/* waiting for peace */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      className="categoryLogo newmedialogo"
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

                {/* authentically us */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
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

                {/* origami */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
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

                {/* 1979 revolution */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <iframe
                      // className="grid-item game2"
                      title="1979 revolution"
                      src="https://www.youtube.com/embed/pGeFR8AqM7Q"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <img
                      className="leftLogo "
                      src={gaming}
                      alt="gaming"
                      align="right"
                    />
                  </div>
                </div>

                {/* chariot */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      className="categoryLogo programlogo"
                      src={programming}
                      alt="programming"
                    />

                    <img
                      // className="grid-item chariot"
                      src={chariot}
                      alt="chariot"
                    />
                  </div>
                </div>

                {/* program1 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      // className="grid-item program2"
                      src="https://content.fortune.com/wp-content/uploads/2018/10/ar52fmia-hanak.jpg"
                      alt="program1"
                    />
                  </div>
                </div>

                {/* more1 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img
                      // className="grid-item more1"
                      src="https://www.sadahespiiproctor.com/uploads/9/1/6/7/9167447/img-1364_orig.jpg"
                      alt="more1"
                    />
                  </div>
                </div>

                {/* more2 */}
                <div className="column is-one-quarter">
                  <div className="gallery-item">
                    <img 
                    // className="grid-item more2"
                    src={moreimg} alt="more2" />

                    <img
                      src={more}
                      alt="more"
                      className="leftLogo morelogo"
                    />
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
