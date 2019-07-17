import React, {Component} from "react"

import animation from "../assets/content/animation.png"
import gaming from "../assets/content/gaming.png"
import graphic from "../assets/content/graphic.png"
import more from "../assets/content/more.png"
import music from "../assets/content/music.png"
import newmedia from "../assets/content/newmedia.png"
import photo from "../assets/content/photo.png"
import programming from "../assets/content/programming.png"
import video from "../assets/content/video.png"
import writing from "../assets/content/writing.png"
import chariot from "../assets/content/chariot.png"

class Gallery extends Component {
  render() {
    return (
      <section>
        <div className="gallery header container">
          <h1>WHO WE ARE</h1>
          <h2>OUR COMMUNITY IS MADE UP OF STORYTELLERS AND CONTENT CREATOR, BOTH VETERAN AND EMERGING,</h2><br></br>
          <h2>EACH ONE FUELED BY PASSION AND CREATIVITY.</h2>

          <div className="photo&video container">
            <img src={photo} alt="logo"></img>
            <img
              width="320"
              height="214"
              src="https://static1.squarespace.com/static/517773bde4b08b3c09a05827/5c0343dcaa4a996bc0212ba5/5c034447352f531f773a0a03/1543717964348/segou-025-IMG_9257.jpg?format=1500w"
              alt="photo1">
            </img>

            <img
              width="320"
              height="214"
              src="https://static1.squarespace.com/static/5137808ce4b06d40ae8adf8a/5b6a037e03ce6485a8d7ce56/5b6a395e70a6ad2f21c04939/1533688287946/egyptian+soldiers+arab+spring.jpg?format=750w"
              alt="photo2">
            </img>

            <img src={video} alt="video"></img>
            <iframe title="video1" src="https://player.vimeo.com/video/345012446" width="320" height="214" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <iframe title="video2" src="https://player.vimeo.com/video/116513060" width="320" height="214" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>

          <div className="music&graphic">
            <img src={music} alt="music"></img>
              <iframe title="swan" border="0" width= "320" height="214" src="https://bandcamp.com/EmbeddedPlayer/album=516918889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"><a href="http://ariansaleh.bandcamp.com/album/swan-bird-googoosh-remixed">Swan Bird (Googoosh Remixed) by Arian Saleh</a></iframe>
              <iframe title="soundcloud" width="320" height="214" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303208989&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <img src={graphic} alt="graphic"></img>
          </div>

          <div className="writing&animation">
            <img src={writing} alt="writing"></img>

            <blockquote class="embedly-card"><h4><a href="https://medium.com/@jeremytneely/with-only-45-red-wolves-left-in-the-wild-confinement-plan-wont-save-species-b5b5b3b9c353">With Only 45 Red Wolves Left in the Wild Confinement Plan Won't Save Species</a></h4><p>Sending a mixed message for the future of red wolves , the U.S. Fish and Wildlife Service announced Monday it will confine red wolf recovery to just federal lands in Dare County, North Carolina, but will identify new sites for   wolf introductions and double the number of captive-breeding pairs.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

            <blockquote class="embedly-card"><h4><a href="https://medium.com/@jkhoey/economics-and-activism-getting-more-girls-into-stem-2b98c041ba66">Economics And Activism: Getting More Girls Into STEM</a></h4><p>The mission of the YWCA of the City of New York ("YWCA") can be summed up in 5 words: eliminating racism and empowering women. Fueled by that mission, the YWCA offers STEAAM (Science, Technology, Engineering, Arts, Activism and Math) as an expanded approach - grounded in dignity and self-determination - to more traditional approaches to STEM (Science, Technology, Engineering and Math) education.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

            <img
              width="320"
              height="214"
              src="https://images.squarespace-cdn.com/content/v1/56c890e745bf2194d5449a55/1535821402678-3HR37WTYGTYKIY4FFDZP/ke17ZwdGBToddI8pDm48kBZw6jF4_OvU-ddo_vwqGhp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub61YCrK70I7JIpWiI8ho4Yi1WvVNQtDE81xuRbL1MFKm0sD-Bab7E9MY8W31A7zMQ/BM+Title+Card+FONT+v1.jpeg?format=1000w"
              alt="animation1">
            </img>

            <iframe title="tree" src="https://player.vimeo.com/video/206468217?color=ffedc2&title=0&byline=0&portrait=0" width="320" height="214" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <img src={animation} alt="animation"></img>
          </div>

          <div className="newmedia&gaming">
            <img src={newmedia} alt="newmedia"></img>
              <iframe title="waiting for peace" width="320" height="214" src="https://www.youtube.com/embed/sRTSJ1K-yn8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe title="authentically us" width="320" height="214" src="https://www.youtube.com/embed/0sNMa9M1_nk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe title="1979 revolution" width="320" height="214" src="https://www.youtube.com/embed/pGeFR8AqM7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src={gaming} alt="gaming"></img>
          </div>

          <div className="program&other">
            <img src={programming} alt="programming"></img>

            <img
              width="320"
              height="214"
              src={chariot}
              alt="chariot">
            </img>

            <img
              width="320"
              height="214"
              src="https://content.fortune.com/wp-content/uploads/2018/10/ar52fmia-hanak.jpg"
              alt="program1">
            </img>

            <img
              width="320"
              height="214"
              src="https://www.sadahespiiproctor.com/uploads/9/1/6/7/9167447/img-1364_orig.jpg"
              alt="more1">
            </img>

            <img
              width="320"
              height="214"
              src="https://represent-com-production.s3.amazonaws.com/uploads/be6c6d19d56b2cbd51be0f4064f0b844.jpg"
              alt="more1">
            </img>

            <img src={more} alt="more"></img>
          </div>
        </div>
      </section>
    )
  }
}
export default Gallery
