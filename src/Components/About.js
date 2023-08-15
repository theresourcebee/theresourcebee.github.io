import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/logo-192x192.png";
    const bio = this.props.data.bio;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Resource Bee"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About US</h2>

            <p>{bio}</p>
            {/* <div className="row">
              <div className="columns contact-details">
                <h2>Managing Par</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city} {state}, India
                  </span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default About;
