import React, { useState } from "react";
import { appData as initialAppData } from "../data/appData";

function About() {
  // eslint-disable-next-line
  const [appData, setAppData] = useState(initialAppData);

  const profilepic = "images/logo-192x192.png";
  const bio = appData.main.bio;

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

export default About;
