import React, { Component, Fragment } from "react";
// import './contact.css'
import Nonprofits from '../assets/contact/Nonprofits.png'
import Storytellers from '../assets/contact/Storytellers.png'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        crEmailValue: '',
        crFNameValue: '',
        crLNameValue: '',
        crMessage: '',
        npEmailValue: '',
        npFNameValue: '',
        npLNameValue: '',
        npMessage: '',
        npOrganization: ''
    };
  }

    render() {
        return (
          <Fragment>
            <div className='contact-text-ctn container'>
              <div className='contact-text-header-div'>
                <p className='headertext whiteText'>HOWL AT US</p>
              </div>
            </div>

            <div className="contact-form-div container">
              <img className="storytellers-image" src={Storytellers} height="400px" width="100px" alt="storyteller"/>
              <div className="creatives-subscribe-form">
                  <p className="creatives-text">For questions, concerns, suggestions, or general feedback, contact us here.</p>
                <form action="https://howlforchange.us19.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="6397bd73322c1f70600e82d2e"/>
                  <input type="hidden" name="id" value="ded48d18b3"/>

                  <div className='formRow formMargin'>
                    <div className="first-name-pair">
                      <label htmlFor='MERGE1'>First Name</label>
                      <br />
                      <input
                        type="text"
                        name="FNAME"
                        id="MERGE1"
                        value={this.state.crFNameValue}
                        onChange={(e)=>{this.setState({crFNameValue: e.target.value});}}
                        />
                    </div>

                    <div className="last-name-pair">
                      <label htmlFor='MERGE2'>Last Name</label>
                      <br />
                      <input
                        type="text"
                        name="LNAME"
                        id="MERGE2"
                        value={this.state.crLNameValue}
                        onChange={(e)=>{this.setState({crLNameValue: e.target.value});}}
                        />
                    </div>
                  </div>

                  <div className="formMargin email-pair">
                    <label htmlFor='MERGE0'>Email</label><br/>
                      <input
                        type="email"
                        name="EMAIL"
                        id="MERGE0"
                        value={this.state.crEmailValue}
                        onChange={ (e)=>{this.setState({crEmailValue: e.target.value});} }
                        autoCapitalize="off"
                        autoCorrect="off"
                      />
                  </div>

                  <div className="formMargin message-box">
                    <label classname="message-label" htmlFor='MERGE7'>Message</label><br/>
                      <textarea
                        rows="8"
                        cols="40"
                        type="text"
                        name="MESSAGE"
                        id="MERGE7"
                        value={this.state.crMessage}
                        onChange={ (e)=>{this.setState({crMessage: e.target.value});} }
                      />
                  </div>

                  <input type="submit" value="AWOOHOO" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div className="contact-form-div container">
              <div className="nonprofits-subscribe-form">
                  <p className="nonprofits-text">For more information about how to Howl For Change can work for you, contact us here.</p>
                <form action="https://howlforchange.us19.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="6397bd73322c1f70600e82d2e"/>
                  <input type="hidden" name="id" value="ded48d18b3"/>

                <div className="formMargin organization-pair">
                  <label htmlFor='MERGE12'>Organization</label><br/>
                    <input
                      type="text"
                      name="organization"
                      id="MERGE12"
                      value={this.state.npOrganization}
                      onChange={(e)=>{this.setState({npOrganization: e.target.value});}}
                    />
                </div>

                <div className='formRow formMargin'>
                  <div className="first-name-pair">
                    <label htmlFor='MERGE1'>First Name</label>
                    <br />
                    <input
                      type="text"
                      name="FNAME"
                      id="MERGE1"
                      value={this.state.npFNameValue}
                      onChange={(e)=>{this.setState({npFNameValue: e.target.value});}}
                      />
                  </div>

                  <div className="last-name-pair">
                    <label htmlFor='MERGE2'>Last Name</label>
                    <br />
                    <input
                      type="text"
                      name="LNAME"
                      id="MERGE2"
                      value={this.state.npLNameValue}
                      onChange={(e)=>{this.setState({npLNameValue: e.target.value});}}
                      />
                  </div>
                </div>


                <div className="formMargin email-pair">
                  <label htmlFor='MERGE0'>Email</label><br/>
                    <input
                      type="email"
                      name="EMAIL"
                      id="MERGE0"
                      value={this.state.npEmailValue}
                      onChange={ (e)=>{this.setState({npEmailValue: e.target.value});} }
                      autoCapitalize="off"
                      autoCorrect="off"
                    />
                </div>

                <div className="formMargin message-box">
                  <label htmlFor='MERGE7'>Message</label><br/>
                    <textarea
                      rows="8"
                      cols="40"
                      type="text"
                      name="MESSAGE"
                      id="MERGE7"
                      value={this.state.npMessage}
                      onChange={ (e)=>{this.setState({npMessage: e.target.value});} }
                    />
                </div>

                  <input type="submit" value="AWOOHOO" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                  </div>

                </form>
              </div>
              <img className="storytellers-image" src={Nonprofits} height="500px" width="100px" alt="non-profit"/>
            </div>

            </Fragment>
        );
    }
}

export default Contact;
