import Button from "elements/Button";
import React from "react";

export default function Header() {
  return (
    <header className="text-center spacing-sm">
      <div className="container">
        <div className="row">
          <div className="col-12 align-items-center justify-content-center">
            <h5>Hi, nice to meet ya</h5>
            <h1>
              We make your dream come true and we will help your business grow
              with application and website development
            </h1>

            <Button
              className="btn px-4"
              type="link"
              isExternal
              href="https://api.whatsapp.com/send?phone=+6281372118232"
              isLarge
              isLight
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
