import React from "react";
import "./styles.css";


export default function ArticleCard(props) {
  
  return (
    <div>
      <section>
        <h6>{props.title}</h6>
      </section>
      <div className="imageContainer">
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
  );
}
