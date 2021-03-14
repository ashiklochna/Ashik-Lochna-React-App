import React, { Component } from 'react';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var fullname = this.props.data.fullname;
         var province = this.props.data.address.province;
         var city = this.props.data.address.city;
         var country = this.props.data.address.country;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form action="" method="post" id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Email</h4>
                     <p className="address">
                        {fullname}<br />
                        {city} <br />
                        {province}, {country}<br />
                        <span>{email}</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Some Quotes</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              “Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”
                         {/* <a href="#">http://t.co/CGIrdxIlI3</a>  */}
                           </span>
                           <b><a href="https://lelanddieno.com/">Leland Dieno</a></b>
                        </li>
                        <li>
                           <span>
                              “A successful website does three things:
                              It attracts the right kinds of visitors.
                              Guides them to the main services or product you offer.
                              Collect Contact details for future ongoing relation.”
                        {/* <a href="#">http://t.co/CGIrdxIlI3</a> */}
                           </span>
                           <b><a href="https://en.wikipedia.org/wiki/Mohamed_Saad">Mohamed Saad</a></b>
                        </li>
                     </ul>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
