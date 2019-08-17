import React, { Component } from "react";
import "./HomePage.css";
import Layout from "../../components/Layout/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "../../components/Profile";
import CragSearch from "../CragSearch/index";
import Community from "../Community/index";
import NoMatch from "../NoMatch/index.js";
import PrivateRoute from "../../components/PrivateRoute";
import NavBar from "../../components/NavBar/index";
import Name from "../../components/userName";
import { useAuth0 } from "../../react-auth0-wrapper";


function HomePage() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isAuthenticated) {
    return (
<>
<BrowserRouter>
  <NavBar />
  <Layout>
    <h1>Sendsville, Population: You.</h1>
    <div className="row">
      <div className="col">
        <img src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80" alt="image" />
      </div>
      <div className="col">
        <p>Hey <Name />, whether you are solving your long time project, or flashing a route for the first time, everytime you send a new route, you get to spend time in Sendsville. Sendsville is a magical place where you can take in the scenery around you and relish in the fact that you made it!</p>
        <p>Sendsville the app is a place to connect with climbers and learn about what is happening in the climbing world, see some motivational photos of climbing adventures, find some great articles to read about some amazing feats other climbers are pulling off, find some stellar new deals on gear you may need, and even find your next great crag and some awesome new projects.</p>
        <p>Sign up today so you can visit Sendsville from anything you can get on the web with!</p>
      </div>
    </div>
    <br />  
    <hr />
    <Switch>
      <Route path="/" exact />
      <Route exact path="/cragsearch" component={CragSearch} />
      <Route path="/community" component={Community} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route component={NoMatch} />
    </Switch>
  </Layout>
</BrowserRouter>
      </>);
  } else {

      
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Layout>
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
            <hr />
            <button className="introLogin" onClick={() =>
              loginWithRedirect({})
            }>Sign In</button>
            <Switch>
              <Route path="/" exact />
              <Route exact path="/cragsearch" component={CragSearch} />
              <Route path="/community" component={Community} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default HomePage;
