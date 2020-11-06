import React from "react";
import Button from "../elements/Button";
import Brand from "./IconText";

export default function Footer(props) {
  return (
    <footer>
      <div className="container" ref={props.refContact}>
        <div className="row">
          <div className="col-8 footer-detail">
            <h5>Contact Us</h5>
            <h1>
              Let’s talk about design, tech, personal development or even just
              chat over a cup of coffee
            </h1>
          </div>

          <div className="col-3 align-self-center ml-auto">
            <Button className="btn" isLight isLarge>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Brand />
            </div>
            <div className="col-4 align-self-center ml-auto">
              <p className="">Copyright DBELF 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
