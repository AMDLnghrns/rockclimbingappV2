import React from "react";
import "./styles.css";


export default function DealCard(props) {
  
  return (
    <div className="card-deal">
      <section>
        <h4>{props.title}</h4>
        <h6>{props.description}</h6>
        <a href={props.url} target="#" className="deal-link">{props.site}</a>
      </section>
      <div className="imageContainer">
        <img className="deal" src={props.picture} alt={props.title} />
      </div>
    </div>
  );
}
