import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPages from "pages/LandingPages";

import "assets/scss/styles.scss";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact="/" component={LandingPages} />
      </Router>
    </div>
  );
}

export default App;
