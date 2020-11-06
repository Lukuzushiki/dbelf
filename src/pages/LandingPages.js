import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Header from "parts/Header";
import Project from "parts/Project";
import Services from "parts/Services";
import Profile from "parts/Profile";
import Footer from "parts/Footer";

export default class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refProject = React.createRef();
    this.refContact = React.createRef();
    this.refAbout = React.createRef();
  }
  render() {
    return (
      <>
        <Navbar
          refProject={this.refProject}
          refContact={this.refContact}
          refAbout={this.refAbout}
        />
        <Header />
        <Project refProject={this.refProject} />
        <Services />
        <Profile refAbout={this.refAbout} />
        <Footer refContact={this.refContact} />
      </>
    );
  }
}
