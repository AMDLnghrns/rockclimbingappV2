import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";


export default function DealCard(props) {
  
  return (
    <div className="card-deal">
      
        
      <h6>{props.title}</h6>
        
      <div className="row">
        <div className="col">
          <p>{props.description}</p>
        </div>
        <div className="col">
          <button className="dealButton"><a href={props.url} target="#" className="deal-link"><FontAwesomeIcon icon={faCartPlus} /></a></button>
        </div>
      </div>
      <div className="imageContainer">
        <img className="deal" src={props.picture} alt={props.title} />
      </div>
      
    </div>
  );
}
