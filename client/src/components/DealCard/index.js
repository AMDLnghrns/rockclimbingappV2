import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";


export default function DealCard(props) {
  
  return (
    <div className="card-deal">
      <div className="row">
        <div className="col">
          <div className="imageContainer">
            <img className="deal" src={props.picture} alt={props.title} />
          </div>
        </div>
        <div className="col">
          <h6>{props.title}</h6>
          <p>{props.description}</p>
        </div>
      </div>
      <br />
      <button className="dealButton"><a href={props.url} target="#" className="deal-link"><FontAwesomeIcon icon={faCartPlus} /></a></button>
        
      
    </div>
  );
}
