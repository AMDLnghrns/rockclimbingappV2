import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/index.js";
import Container from "../../components/Container";
import "./HomePage.css";


class FrontPage extends Component {
  render() {
    return (
      <>
      <h1>Sendsville, Population: You.</h1>
      <div className="row">
        <div className="col">
        Connect with climbers and learn about what is happening in the climbing world.
        See photos of climbing adventures for a little motivation.
        Find new deals on gear consolidated into a single page.
        </div>
        <div className="col">
      Test
        </div>
      </div>
      </>
    );
  }
}

export default FrontPage;
