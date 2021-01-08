import React from "react";
import Button from "../elements/Button";
import Brand from "./IconText";

export default function Footer(props) {
  return (
    <footer>
      <div className="container" ref={props.refContact}>
        <div className="row">
          <div className="col-lg-8 col-sm-12 footer-detail">
            <h5>Contact Us</h5>
            <h1>
              Let’s talk about design, tech, personal development or even just
              chat over a cup of coffee
            </h1>
          </div>

          <div className="col-lg-3 col-sm-12 mb-5 align-self-center ml-auto">
            <Button className="btn" isLight isLarge>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            {window.innerWidth >= 960 ? (
              <>
                <div className="col-lg-8 col-sm-12 ">
                  <Brand />
                </div>
                <div className="col-lg-4 col-sm-12 align-self-center">
                  <div className="text-copyright ml-auto">
                    Copyright DBELF 2020. All Rights Reserved.
                  </div>
                </div>
              </>
            ) : (
              <div className="col-lg-4 col-sm-8 text-copyright">
                Copyright DBELF 2020. All Rights Reserved.
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
