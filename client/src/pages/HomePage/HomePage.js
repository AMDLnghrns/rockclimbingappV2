import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/index.js";
import Container from "../../components/Container";
import "./HomePage.css";


class FrontPage extends Component {
  render() {
    return (
      <div>
        
        <h2>Sendsville</h2>
        
        <Container>
        Column 1:
        Title: Sendsville, Population: You.
        Connect with climbers and learn about what is happening in the climbing world.
        See photos of climbing adventures for a little motivation.
        Find new deals on gear consolidated into a single page.

        Column 2: 
        Registration? Can the pop up that appears when logging in be dropped here?
        </Container>
      </div>
    );
  }
}

export default FrontPage;
