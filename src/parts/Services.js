import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
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
          <Fade bottom delay={500}>
            <div className="col-lg-4 col-sm-12">
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
          </Fade>

          <Fade top delay={1000}>
            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <img className="img-service" src={Website} alt="service-1" />
                  <h1>Web app development</h1>
                  <p>
                    We help you to build company profile, online store and
                    personal website
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1500}>
            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <img className="img-service" src={UiUx} alt="service-1" />
                  <h1>Product Design</h1>
                  <p>
                    We help you build applications and websites with good visual
                    and experience
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="text-center">
          <Zoom delay={1800}>
            <Button
              className="btn px-4 py-3"
              type="link"
              isExternal
              href="https://api.whatsapp.com/send?phone=+6281372118232"
              isPrimary
              isLight
            >
              Let’s talk together
            </Button>
          </Zoom>
        </div>
      </div>
    </section>
  );
}
