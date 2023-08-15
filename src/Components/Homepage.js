import React, { Component } from "react";

class Homepage extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    return (
      <section id="resume">
        <div className="education-container">
          <div className="row education">
            <div className="twelve columns header-col">
              <h1>
                <span>Our Services</span>
              </h1>
            </div>
          </div>
          <div className="row education">
            <div className="four columns">
              <h3>
                Software Development Expertise
              </h3>
              <div className="item">
                Looking for skilled software developers or dedicated development teams? Look no further. We offer a range of software development services that cater to your unique requirements. Whether you need a small-scale application or a complex enterprise solution, our experienced developers are here to turn your ideas into reality.
              </div>
            </div>

            <div className="four columns">
              <h3>
                Custom Software Tailored to Your Needs
              </h3>
              <div className="item">
                No two businesses are alike, and neither should their software solutions be. Our team excels in understanding your organization's goals and challenges, translating them into powerful and efficient software that enhances productivity and drives growth.
              </div>
            </div>

            <div className="four columns">
              <h3>
                Innovative Mobile Applications
              </h3>
              <div className="item">
                With the mobile market growing exponentially, having a presence on iOS and Android platforms is essential. Our collection of cutting-edge mobile applications, available on both the Apple App Store and Google Play Store, offers intuitive solutions that connect you with your audience on the go.
              </div>
            </div>
          </div>
        </div>

        <div className="work-container">
          <div className="row work">
            <div className="twelve columns header-col">
              <h1>
                <span>Why Us?</span>
              </h1>
            </div>
          </div>
          <div className="row work">
            <div className="four columns">
              <h3>
                Expertise That Matters
              </h3>
              <div className="item">
                Backed by a team of seasoned IT professionals, we possess a deep well of industry knowledge and technical expertise. We've successfully undertaken projects spanning various domains and complexities, enabling us to deliver solutions that exceed expectations.
              </div>
            </div>

            <div className="four columns">
              <h3>
                Client-Centric Approach
              </h3>
              <div className="item">
                Your satisfaction is our driving force. We believe in a collaborative approach, working closely with you to understand your needs, concerns, and aspirations. Our iterative development process ensures that you're involved every step of the way, resulting in solutions that align perfectly with your vision.
              </div>
            </div>

            <div className="four columns">
              <h3>
                Unleash Innovation
              </h3>
              <div className="item">
                Innovation is at the heart of everything we do. We embrace the latest technologies and methodologies to create solutions that are not only functional but also forward-looking. Partnering with us means gaining a competitive edge in a rapidly evolving digital landscape.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Homepage;
