import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Gallery from "./Gallery";
import Database from "./Database";
import Footer from "./Footer";
import Work from "./Work";
import PunchLine from "./PunchLine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/database" component={Database} />
            <Route path="/footer" component={Footer} />
            <Route path="/work" component={Work} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={PunchLine} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
