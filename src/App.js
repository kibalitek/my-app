import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Gallery from "./Gallery";
import Team from "./Team";
import Footer from "./Footer";
import Faq from "./Faq";
import PunchLine from "./PunchLine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/faq" component={Faq} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/gallery/:id" component={PunchLine} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

const Home = () => (
  <div class="center">
    <h4>Welcome to Kibali-Tech</h4>
    <br />
    <p>We develop</p>
    <ul>
      <li>Mobile Apps</li>
      <li>Enterprise Applications</li>
    </ul>
  </div>
);

export default App;
