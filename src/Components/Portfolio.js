import React, { useState } from "react";
import { appData as initialAppData } from "../data/appData";

let id = 0;
function Portfolio(props) {
  // eslint-disable-next-line
  const [appData, setAppData] = useState(initialAppData);

  const projects = appData.portfolio.projects.map(function (project) {
    let projectImage = "images/portfolio/" + project.image;

    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap">
          <img alt={project.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{project.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of our apps.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
