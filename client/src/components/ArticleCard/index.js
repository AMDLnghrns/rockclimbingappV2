import React from "react";
import "./styles.css";


export default function ArticleCard(props) {
  
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>{props.title}</h2>
        </div>
        <div className="col">
          <div className="imageContainer">
            <img src={props.picture} alt={props.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
