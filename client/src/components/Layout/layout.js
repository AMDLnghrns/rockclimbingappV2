import React from "react";
import Footer from "../Footer/index";
import "./layout.css";

const Layout = ({ children }) => (
  <div className="page-container">
    <div className="content-wrap">
      {children}
    </div>
    <br /><br />
    <footer className="footer"><i className="fab fa-react" />
      <a
        href="https://github.com/krayt0n3/rockclimbingappV2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
        Repo
      </a></footer>
  </div>
);

export default Layout;
