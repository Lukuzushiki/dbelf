import React from "react";
import Sahabat from "../assets/images/sahabatLawyer.png";
import Gaming from "../assets/images/gaminghouse.png";
import Staycation from "../assets/images/staycation.png";

export default function Project(props) {
  return (
    <section className="section-project" ref={props.refProject}>
      <div className="container-fluid">
        <div className="text-center">
          <h2>Here’s what we’ve been doing</h2>
        </div>

        <div className="row">
          <div className="col-6">
            <img className="img-project" src={Sahabat} alt="project-1" />
          </div>
          <div className="col-6">
            <h1>Improving the experience of Sahabat Lawyer application</h1>
            <a href="https://play.google.com/store/apps/details?id=com.sahabatlawyer">
              Visit Google Playstore
            </a>
          </div>

          <div className="col-6">
            <h1>Design and development Staycation website</h1>
            <a href="https://staycation-topaz.vercel.app/">Visit Website</a>
          </div>
          <div className="col-6">
            <img className="img-project" src={Staycation} alt="project-1" />
          </div>

          <div className="col-6">
            <img className="img-project" src={Gaming} alt="project-1" />
          </div>
          <div className="col-6">
            <h1>Improving the experience of Sahabat Lawyer application</h1>
            <a href="https://gaming-house-onwgjrgdd.vercel.app/">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
