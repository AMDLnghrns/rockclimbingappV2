import React, { Component } from "react";
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
        Find new deals on gear consolidated into a single page.<br />
            <br />
            <img src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80" alt="image" />
          </div>
          <div className="col">
            Whether you are solving your long time project, or flashing a route for the first time, everytime you send a new route, you get to spend time in Sendsville. Sendsville is a magical place where you can take in the scenery around you and relish in the fact that you made it!
    Sendsville the app is a place to connect with climbers and learn about what is happening in the climbing world, see some motivational photos of climbing adventures, find some great articles to read about some amazing feats other climbers are pulling off, find some stellar new deals on gear you may need, and even find your next great crag and some awesome new projects.
    Sign up today so you can visit Sendsville from anything you can get on the web with!
          </div>
        </div>
        <br />  
      </>
    );
  }
}

export default FrontPage;
