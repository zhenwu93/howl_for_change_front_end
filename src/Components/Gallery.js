import React, {Component} from "react"

class Gallery extends Component {
  render() {
    return (
      <section>
        <div className="gallery header container">
          <h1>WHO WE ARE</h1>
          <h2>OUR COMMUNITY IS MADE UP OF STORYTELLERS AND CONTENT CREATOR, BOTH VETERAN AND EMERGING,</h2><br></br>
          <h2>EACH ONE FUELED BY PASSION AND CREATIVITY.</h2>

          <div className="photo&video container">
            <img width="320" height="214" src="https://static1.squarespace.com/static/517773bde4b08b3c09a05827/5c0343dcaa4a996bc0212ba5/5c034447352f531f773a0a03/1543717964348/segou-025-IMG_9257.jpg?format=1500w
              " alt="photo1">
            </img>

            <img width="320" height="214" src="https://static1.squarespace.com/static/5137808ce4b06d40ae8adf8a/5b6a037e03ce6485a8d7ce56/5b6a395e70a6ad2f21c04939/1533688287946/egyptian+soldiers+arab+spring.jpg?format=750w
              " alt="photo2">
            </img>

            <iframe title="video1" src="https://player.vimeo.com/video/345012446" width="320" height="214" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <iframe title="video2" src="https://player.vimeo.com/video/116513060" width="320" height="214" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
          
        </div>
      </section>
    )
  }
}
export default Gallery
