import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Gallery from "./Gallery";
import PunchLine from "./PunchLine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
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
            <Route path="/gallery" component={Gallery} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={PunchLine} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

const Home = () => <div></div>;

export default App;
