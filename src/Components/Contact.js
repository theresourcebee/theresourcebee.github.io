import React, { useState } from "react";
import { appData as initialAppData } from "../data/appData";

function Contact(props) {
  // eslint-disable-next-line
  const [appData, setAppData] = useState(initialAppData);

  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const message = appData.main.address.contactmessage || "Let us know how we can help and someone from our team will get in touch with you";
  const city = appData.main.address.city;
  const state = appData.main.address.state;
  const name = appData.main.name;

  const sendEmail = () => {
    window.open(`mailto:${email}?subject=${subject}&body=${contactName}\n${emailBody}`)
  }

  return (
    <section id="contact">
      <div className="row section-head">
        {/* <div className="two columns header-col"> */}
        <h1>
          Get In Touch.
        </h1>
        {/* </div> */}

        {/* <div className="ten columns"> */}
        <p className="lead">{message}</p>
        {/* </div> */}
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={sendEmail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactName"
                  name="contactName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  size="100"
                  id="contactSubject"
                  name="contactSubject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button className="submit" disabled={contactName.length === 0 || emailBody.length === 0 || email.length === 0 || subject.length === 0}>Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {city}, {state}, India
            </p>
          </div>

          {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div> */}
        </aside>
      </div>
    </section>
  );
}

export default Contact;
