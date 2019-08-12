import React from "react";
import "./styles.css";


export default function ArticleCard(props) {
  
  return (
    <div>
      <div className="blogs-container">
        <div className="blog-card">
          <figure><a href={props.url}><img src={props.picture} alt={props.title}/></a></figure>
          <div
            className="blog-content">
            <div className="blog-topic"><a href={props.url} target="#">{props.site}</a></div>
            <h3 className="blog-title"><a href={props.url} target="#">{props.title}</a></h3>
            <br />
            <div className="blog-footer"><a className="blog-category" href={props.url} target="#">{props.articleDate}</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}