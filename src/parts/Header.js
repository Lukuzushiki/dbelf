import React from "react";
import Button from "elements/Button";

export default function Header() {
  return (
    <header className="text-center spacing-sm">
      <div className="container">
        <div className="row">
          <div className="col-12 align-items-center justify-content-center">
            <h5>Hi, nice to meet ya</h5>
            <h1>
              We make your dream come true <br /> and we will help your business
              grow <br />
              with application and website development
            </h1>

            <Button className="btn px-4" type="button" isLarge isLight>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
