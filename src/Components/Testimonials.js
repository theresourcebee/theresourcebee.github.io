import React, { useState } from "react";
import { appData as initialAppData } from "../data/appData";

function Testimonials(props) {
  // eslint-disable-next-line
  const [appData, setAppData] = useState(initialAppData);

  const testimonials = appData?.testimonials.map(function (testimonial) {
    return (
      <li key={testimonial.user}>
        <blockquote>
          <p>{testimonial.text}</p>
          <cite>{testimonial.user}</cite>
        </blockquote>
      </li>
    );
  });

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
