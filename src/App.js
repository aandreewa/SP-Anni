import React from "react";
import LandingPage from "./website/LandingPage";
import Prices from "./website/Prices";
import Contacts from "./website/Contacts";
import Schedule from "./website/Schedule";
import Practices from "./website/Practices";
import NotFound from "./website/NotFound";
import './css/index.css';
import './css/NavBar.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Prices" component={Prices} />
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/Practices" component={Practices} />
          <Route exact path="/Contacts" component={Contacts} /> 
        </div>
      </Router>
    </div>
  );
}

export default App;
