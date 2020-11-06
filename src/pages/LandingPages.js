import React, { Component } from "react";

import Header from "parts/Header";
import Navbar from "parts/Navbar";
import Project from "parts/Project";
import Services from "parts/Services";
import Profile from "parts/Profile";
import Footer from "parts/Footer";

import Data from "json/projectData.json";

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
          {...this.props}
          refProject={this.refProject}
          refContact={this.refContact}
          refAbout={this.refAbout}
        />
        <Header {...this.props} />
        <Project
          {...this.props}
          data={Data.project}
          refProject={this.refProject}
        />
        <Services {...this.props} />
        <Profile {...this.props} refAbout={this.refAbout} />
        <Footer {...this.props} refContact={this.refContact} />
      </>
    );
  }
}
