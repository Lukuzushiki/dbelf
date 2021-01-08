import React from "react";
import Fade from "react-reveal/Fade";

import Fadli from "../assets/images/Fadli.png";
import Febri from "../assets/images/febri.png";
import Helfi from "../assets/images/Helfi.jpeg";
import Facebook from "../assets/images/facebook.png";
import Behance from "../assets/images/behance.png";
import Github from "../assets/images/github.png";
import Dribble from "../assets/images/dribble.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import Youtube from "../assets/images/youtube.png";

export default function Profile(props) {
  return (
    <section className="section-profile" ref={props.refAbout}>
      <div className="container">
        <div className="text-center">
          <h1>Who we are?</h1>
          <p>
            DBELF is a Fullstack Developer and UI UX Designer Team based in
            Pekanbaru, Indonesia. Our team consist of Febri as Programmer and
            Fadli as Designer.
          </p>
        </div>

        <div className="row justify-content-center">
          <Fade bottom delay={500}>
            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <img className="img-profile" src={Febri} alt="profile-1" />
                  <h1>Febri Wardhana</h1>
                  <p>Programmer</p>
                  <div className="social-media justify-content-center">
                    <a href="https://www.facebook.com/febri.wardhana">
                      <img
                        className="social-media-logo"
                        src={Facebook}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/febri-wardhana-683bb4175/">
                      <img
                        className="social-media-logo"
                        src={Linkedin}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://github.com/Lukuzushiki">
                      <img
                        className="social-media-logo"
                        src={Github}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://www.instagram.com/febri_wardhana22/">
                      <img
                        className="social-media-logo"
                        src={Instagram}
                        alt="profile-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade top delay={1000}>
            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper-image">
                    <img className="img-profile" src={Helfi} alt="profile-1" />
                  </div>
                  <h1>Helfi Setiani</h1>
                  <p>Web Programmer</p>
                  <div className="social-media">
                    <a href="https://www.instagram.com/helfisetiani11/">
                      <img
                        className="social-media-logo"
                        src={Instagram}
                        alt="profile-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1500}>
            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <img className="img-profile" src={Fadli} alt="profile-1" />
                  <h1>Muhammad Fadli</h1>
                  <p>Product Designer</p>
                  <div className="social-media">
                    <a href="https://www.instagram.com/faadhlyy/">
                      <img
                        className="social-media-logo"
                        src={Instagram}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/muhamad-fadli-63375419b/">
                      <img
                        className="social-media-logo"
                        src={Linkedin}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://www.behance.net/fadlymuhamad">
                      <img
                        className="social-media-logo"
                        src={Behance}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://dribbble.com/fadly09">
                      <img
                        className="social-media-logo"
                        src={Dribble}
                        alt="profile-1"
                      />
                    </a>
                    <a href="https://www.youtube.com/channel/UCyojWpiH2wPDlnYAf5kF3iA/videos?view_as=subscriber">
                      <img
                        className="social-media-logo"
                        src={Youtube}
                        alt="profile-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
