import React from "react";


export default function ArticleCard(props) {
  
  return (
    <div className="card">
      <section>
        <h6>{props.title}</h6>
      </section>
      <div className="imageContainer">
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
  );
}
