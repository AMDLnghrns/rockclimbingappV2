import React from "react";
import "./style.css";


export default function ImageCard(props) {
  
  return (
    
    <div className="card">
      
      <div className="card__image card__image">
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
    
  );
}
