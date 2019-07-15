import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div class="wrapperDiv">
        <section>
          <div class="landing container">
            <h2>Landing Section</h2>
            <p>Insert 'Who we are and what we are about text'</p>
          </div>
        </section>
        <section>
          <div class="container">
            <h2>Gallery</h2>
            <p>Insert Pictures for Gallery</p>
          </div>
        </section>
        <section>
          <div class="container">
            <h2>About Us</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>

            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
          </div>
        </section>
        <section>
          <div class="container">
            <h2>How HFC Works</h2>
            <p>Step by Step process</p>
          </div>
        </section>
        <section>
          <div class="container">
            <h2>Footer</h2>
            <p>Footer Text/links</p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
