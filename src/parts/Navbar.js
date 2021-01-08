import React from "react";

import Button from "elements/Button";
import Brand from "./IconText";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Header(props) {
  function showProject() {
    window.scrollTo({
      top: props.refProject.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showAbout() {
    window.scrollTo({
      top: props.refAbout.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showContact() {
    window.scrollTo({
      top: props.refContact.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Brand />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item`}>
              <Button className="nav-link" type="link" onClick={showProject}>
                Project
              </Button>
            </li>

            <li className={`nav-item`}>
              <Button className="nav-link" type="link" onClick={showAbout}>
                About
              </Button>
            </li>

            <li className={`nav-item`}>
              <Button
                className="btn px-4"
                type="button"
                isLarge
                isLight
                onClick={showContact}
              >
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
