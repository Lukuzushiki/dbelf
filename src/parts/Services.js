import React from "react";
import Mobile from "../assets/images/mobile.png";
import Website from "../assets/images/website.png";
import UiUx from "../assets/images/uiux.png";
import Button from "../elements/Button";

export default function Project() {
  return (
    <section className="section-services">
      <div className="container">
        <div className="text-center">
          <h1>What do you need?</h1>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <img className="img-service" src={Mobile} alt="service-1" />
                <h1>Mobile app development</h1>
                <p>
                  We help you to develop mobile application for your business
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <img className="img-service" src={Website} alt="service-1" />
                <h1>Mobile app development</h1>
                <p>
                  We help you to develop mobile application for your business
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <img className="img-service" src={UiUx} alt="service-1" />
                <h1>Mobile app development</h1>
                <p>
                  We help you to develop mobile application for your business
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="btn px-4 py-3"
            type="button"
            href=""
            isPrimary
            isLight
          >
            Let’s talk together
          </Button>
        </div>
      </div>
    </section>
  );
}
