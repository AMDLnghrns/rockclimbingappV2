import React from "react";
import "./style.css";


export default function ImageCard(props) {
  
  return (
    
    <div className="card">
      
      <h6>{props.title}</h6>
      <div className="imageContainer">
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
    
  );
}
