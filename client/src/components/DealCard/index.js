import React from "react";
import "./styles.css";


export default function DealCard(props) {
  
  return (
    <div className="card">
      <section>
        <h6>{props.description}</h6>
      </section>
      <div className="imageContainer">
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
  );
}
