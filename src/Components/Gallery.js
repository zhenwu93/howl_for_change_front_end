import React, {Component} from "react"

import animation from "../assets/content/animation.png"
import gaming from "../assets/content/gaming.png"
import graphic from "../assets/content/graphic.png"
import more from "../assets/content/more.png"
import moreimg from "../assets/content/moreimg.jpg"
import music from "../assets/content/music.png"
import newmedia from "../assets/content/newmedia.png"
import photo from "../assets/content/photo.png"
import programming from "../assets/content/programming.png"
import video from "../assets/content/video.png"
import writing from "../assets/content/writing.png"
import chariot from "../assets/content/chariot.png"

import "./gallery.css"

class Gallery extends Component {
  render() {
    return (
      <section>
        <div className="gallery container grid-ctn">
          <h1>WHO WE ARE</h1>
          <h2>OUR COMMUNITY IS MADE UP OF STORYTELLERS AND CONTENT CREATOR, BOTH VETERAN AND EMERGING,</h2><br></br>
          <h2>EACH ONE FUELED BY PASSION AND CREATIVITY.</h2>

          <div className="grid-container">

          <div className="grid-item">
              <img src={photo} alt="logo" class="photologo"></img>

              <img
                class="photo1"
                width="320"
                height="214"
                src="https://static1.squarespace.com/static/517773bde4b08b3c09a05827/5c0343dcaa4a996bc0212ba5/5c034447352f531f773a0a03/1543717964348/segou-025-IMG_9257.jpg?format=1500w"
                alt="photo1">
              </img>
          </div>

          <div className="grid-item">
              <img
                class="photo2"
                width="320"
                height="214"
                src="https://static1.squarespace.com/static/5137808ce4b06d40ae8adf8a/5b6a037e03ce6485a8d7ce56/5b6a395e70a6ad2f21c04939/1533688287946/egyptian+soldiers+arab+spring.jpg?format=750w"
                alt="photo2">
              </img>
          </div>

            <div className="grid-item">
              <iframe title="video1" class="video1" src="https://player.vimeo.com/video/345012446" width="320" height="214" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>

            <div className="grid-item">
              <iframe title="video2" class="video2" align="right" src="https://player.vimeo.com/video/116513060" width="320" height="214" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <img src={video} alt="videologo" class="videologo" align="right"></img>
            </div>

          <div className="grid-item">
            <img src={music} alt="music" class="musiclogo"></img>
              <iframe title="swan" class="song1" border="0" width= "320" height="214" src="https://bandcamp.com/EmbeddedPlayer/album=516918889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"><a href="http://ariansaleh.bandcamp.com/album/swan-bird-googoosh-remixed">Swan Bird (Googoosh Remixed) by Arian Saleh</a></iframe>
          </div>

          <div className="grid-item">
              <iframe title="soundcloud" width="320" class="song2" height="214" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303208989&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>

          <div className="grid-item">
              <img
                class="graphic1"
                width="320"
                height="214"
                src="https://images.squarespace-cdn.com/content/v1/5137808ce4b06d40ae8adf8a/1533687176760-KC3IPQDFX93UM0GBYONR/ke17ZwdGBToddI8pDm48kD87M0U7Mr8Yzc4-RMcNsOpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIiumrcAedN-bQTn2R0qAB6AL-GedccOSmw3wZu30bBawKMshLAGzx4R3EDFOm1kBS/jerusalem_potraits.jpg?format=2500w"
                alt="graphic1">
              </img>
          </div>

          <div className="grid-item">
              <img
                align="right"
                class="graphic2"
                width="320"
                height="214"
                src="https://images.squarespace-cdn.com/content/v1/5137808ce4b06d40ae8adf8a/1533685790486-RFNJD4UGUMARM3VVV34E/ke17ZwdGBToddI8pDm48kO5kBq5EvnYhvlHvh_s2fYQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc7RIW_1NHz48DMCo4w_aPejh2F2hlNaQzpkS0plhZquSmmKz9-JpnXIHHlDG4RYaL/earthmonth-hero.png?format=2500w"
                alt="graphic2">
              </img>

            <img src={graphic} alt="graphic" class="graphiclogo" align="right"></img>
          </div>

          <div className="grid-item">
            <img className="writinglogo" src={writing} alt="writing"></img>

            <blockquote class="writing1" width="320" height="214"><h4><a href="https://medium.com/@jeremytneely/with-only-45-red-wolves-left-in-the-wild-confinement-plan-wont-save-species-b5b5b3b9c353">With Only 45 Red Wolves Left in the Wild Confinement Plan Won't Save Species</a></h4><p>Sending a mixed message for the future of red wolves , the U.S. Fish and Wildlife Service announced Monday it will confine red wolf recovery to just federal lands in Dare County, North Carolina, but will identify new sites for   wolf introductions and double the number of captive-breeding pairs.</p></blockquote>
          </div>

          <div className="grid-item">
            <blockquote class="writing2"><h4><a href="https://medium.com/@jkhoey/economics-and-activism-getting-more-girls-into-stem-2b98c041ba66">Economics And Activism: Getting More Girls Into STEM</a></h4><p>The mission of the YWCA of the City of New York ("YWCA") can be summed up in 5 words: eliminating racism and empowering women. Fueled by that mission, the YWCA offers STEAAM (Science, Technology, Engineering, Arts, Activism and Math) as an expanded approach - grounded in dignity and self-determination - to more traditional approaches to STEM (Science, Technology, Engineering and Math) education.</p></blockquote>
          </div>

          <div className="grid-item">
            <iframe class="animation2" title="tree" align="right" src="https://player.vimeo.com/video/206468217?color=ffedc2&title=0&byline=0&portrait=0" width="320" height="214" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <img src={animation} alt="animation" class="animationlogo" align="right"></img>
          </div>

          <div className="grid-item">
            <img
              class="animation1"
              align="right"
              width="320"
              height="214"
              src="https://images.squarespace-cdn.com/content/v1/56c890e745bf2194d5449a55/1535821402678-3HR37WTYGTYKIY4FFDZP/ke17ZwdGBToddI8pDm48kBZw6jF4_OvU-ddo_vwqGhp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub61YCrK70I7JIpWiI8ho4Yi1WvVNQtDE81xuRbL1MFKm0sD-Bab7E9MY8W31A7zMQ/BM+Title+Card+FONT+v1.jpeg?format=1000w"
              alt="animation1">
            </img>
          </div>

          <div className="grid-item">
            <img className="newmedialogo" src={newmedia} alt="newmedia"></img>
              <iframe className="media1" title="waiting for peace" width="320" height="214" src="https://www.youtube.com/embed/sRTSJ1K-yn8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="grid-item">
              <iframe className="media2" title="authentically us" width="320" height="214" src="https://www.youtube.com/embed/0sNMa9M1_nk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="grid-item">
              <iframe className="game1" title="origami" width="320" height="214" src="https://player.vimeo.com/video/338142145" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>

          <div className="grid-item">
              <iframe className="game2" title="1979 revolution" width="320" height="214" src="https://www.youtube.com/embed/pGeFR8AqM7Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img className="gamelogo" src={gaming} alt="gaming" align="right"></img>
          </div>

            <div className="grid-item">
              <img className="programlogo" src={programming} alt="programming"></img>

              <img
                className="chariot"
                width="320"
                height="214"
                src={chariot}
                alt="chariot">
              </img>
            </div>

            <div className="grid-item">
              <img
                className="program2"
                width="320"
                height="214"
                src="https://content.fortune.com/wp-content/uploads/2018/10/ar52fmia-hanak.jpg"
                alt="program1">
              </img>
            </div>

            <div className="grid-item">
              <img
                className="more1"
                width="320"
                height="214"
                src="https://www.sadahespiiproctor.com/uploads/9/1/6/7/9167447/img-1364_orig.jpg"
                alt="more1">
              </img>
            </div>

            <div className="grid-item">
              <img
                className="more2"
                width="320"
                height="214"
                src={moreimg}
                alt="more2">
              </img>

              <img src={more} alt="more" className="morelogo"></img>
            </div>

          </div>
        </div>
      </section>
    )
  }
}
export default Gallery
