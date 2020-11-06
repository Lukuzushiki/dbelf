import React from "react";
import Fade from "react-reveal/Fade";

export default function Project(props) {
  return (
    <section className="section-project" ref={props.refProject}>
      <div className="container-fluid">
        <div className="text-center">
          <h2>Here’s what we’ve been doing</h2>
        </div>

        <div className="row">
          {props.data.map((project, index) => {
            return (
              <>
                <Fade bottom delay={500}>
                  <div className="col-6">
                    {index % 2 === 0 ? (
                      <img
                        className="img-project"
                        src={project.imageUrl}
                        alt={`project-${[index]}`}
                      />
                    ) : (
                      <div className="card-detail">
                        <h1>{project.title}</h1>
                        <a href={project.urlProject}>{project.urlChild}</a>
                      </div>
                    )}
                  </div>
                </Fade>

                <Fade bottom delay={1000}>
                  <div className="col-6">
                    {index % 2 === 1 ? (
                      <img
                        className="img-project"
                        src={project.imageUrl}
                        alt={`project-${[index]}`}
                      />
                    ) : (
                      <div className="card-detail">
                        <h1>{project.title}</h1>
                        <a href={project.urlProject}>{project.urlChild}</a>
                      </div>
                    )}
                  </div>
                </Fade>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
