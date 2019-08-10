import React from "react";
import "./styles.css";


export default function DealCard(props) {
  
  return (
    <div className="card-deal">
      <section>
        <h6>{props.description}</h6>
        <a href={props.url} target="#">{props.site}</a>
      </section>
      <div className="imageContainer">
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
  );
}
