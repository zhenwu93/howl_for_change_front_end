import React, { Component, Fragment } from "react";
import './contact.css'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        organization: '',
        message: '',
    };
  }

    render() {
        return (
          <Fragment>

            <div className='contact-text-div'>
              <div className='header-div'>
                <p className='contact-header'>HOWL AT US</p>
              </div>

              <div className='creatives-div' align="left">
                <p className='creatives-header'>CREATIVES</p>
                <p className="creatives-text">For questions, concerns, suggestions, or general feedback,</p>
                <p className='creatives-text-2'>contact us here.</p>
              </div>

              <div className='nonprofits-div' align="right">
                <p className='nonprofits-header'>NONPROFITS</p>
                <p className="nonprofits-text">For more information about how to Howl For Change can</p>
                <p className="nonprofits-text-2">work for you, contact us here.</p>
              </div>
            </div>

              <div className="creatives-subscribe-form">
                <form action="https://howlforchange.us19.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="6397bd73322c1f70600e82d2e"/>
                  <input type="hidden" name="id" value="ded48d18b3"/>

                    <label htmlFor='MERGE1'>
                      First Name
                      <input
                        type="text"
                        name="FNAME"
                        id="MERGE1"
                        value={this.state.fNameValue}
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        />
                      </label>

                    <label htmlFor='MERGE2'>
                      Last Name
                      <input
                        type="text"
                        name="LNAME"
                        id="MERGE2"
                        value={this.state.lNameValue}
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                      />
                    </label>

                    <label htmlFor='MERGE0'>
                      Email
                      <input
                        type="email"
                        name="EMAIL"
                        id="MERGE0"
                        value={this.state.emailValue}
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                        autoCapitalize="off"
                        autoCorrect="off"
                      />
                    </label>

                    <label htmlFor='MERGE7'>
                      Message
                      <input
                        type="text"
                        name="MESSAGE"
                        id="MERGE7"
                        value={this.state.message}
                        onChange={ (e)=>{this.setState({message: e.target.value});} }
                      />
                    </label>

                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

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

              <div className="nonprofits-subscribe-form">
                <form action="https://howlforchange.us19.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="6397bd73322c1f70600e82d2e"/>
                  <input type="hidden" name="id" value="ded48d18b3"/>

                  <label htmlFor='MERGE12'>
                    Organization
                    <input
                      type="text"
                      name="organization"
                      id="MERGE12"
                      value={this.state.organization}
                      onChange={(e)=>{this.setState({organization: e.target.value});}}
                      />
                  </label>

                    <label htmlFor='MERGE1'>
                      First Name
                      <input
                        type="text"
                        name="FNAME"
                        id="MERGE1"
                        value={this.state.fNameValue}
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        />
                    </label>

                    <label htmlFor='MERGE2'>
                      Last Name
                      <input
                        type="text"
                        name="LNAME"
                        id="MERGE2"
                        value={this.state.lNameValue}
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                      />
                    </label>

                    <label htmlFor='MERGE0'>
                      Email
                      <input
                        type="email"
                        name="EMAIL"
                        id="MERGE0"
                        value={this.state.emailValue}
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                        autoCapitalize="off"
                        autoCorrect="off"
                      />
                    </label>

                    <label htmlFor='MERGE7'>
                      Message
                      <input
                        type="text"
                        name="MESSAGE"
                        id="MERGE7"
                        value={this.state.message}
                        onChange={ (e)=>{this.setState({message: e.target.value});} }
                      />
                    </label>

                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

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

            </Fragment>
        );
    }
}

export default Contact;
