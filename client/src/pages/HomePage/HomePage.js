import React, { Component } from "react";
import "./HomePage.css";


class FrontPage extends Component {
  render() {
    return (
      <div>
        <h1>Sendsville, Population: You.</h1>
        <div className="row">
          <div className="col">
            <img src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80" alt="image" />
          </div>
          <div className="col">
            <p>Whether you are solving your long time project, or flashing a route for the first time, everytime you send a new route, you get to spend time in Sendsville. Sendsville is a magical place where you can take in the scenery around you and relish in the fact that you made it!</p>
            <p>Sendsville the app is a place to connect with climbers and learn about what is happening in the climbing world, see some motivational photos of climbing adventures, find some great articles to read about some amazing feats other climbers are pulling off, find some stellar new deals on gear you may need, and even find your next great crag and some awesome new projects.</p>
            <p>Sign up today so you can visit Sendsville from anything you can get on the web with!</p>
          </div>
        </div>
        <br />  
      </div>
    );
  }
}

export default FrontPage;
