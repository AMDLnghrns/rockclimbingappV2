import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import background from "../Footer/background.jpeg";

function Footer() {
  return (
    <footer className="nav justify-content-center fixed-bottom">
      <img src={background} alt=" insert alternative here "/>
      <a className="nav-link" href="https://github.com/krayt0n3/rockclimbingappV2"><FontAwesomeIcon icon={faGithub} /></a>
    </footer>
  );
}

export default Footer;

// Rock and Ice
// Climbing Porn
// REI
// MooseJaw
// Back Country
// Climb stuff
// Auth0, Dark Sky, Rock & Ice, USG Water Services, Dark Sky, Google Maps, Mountain Project, GitHub, Heroku, JawsDB,   

// when to go, weather, popular routes, average difficulty