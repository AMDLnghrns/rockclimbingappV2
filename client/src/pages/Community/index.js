import React, { useState, useEffect } from "react";
import ImageCard from "../../components/ImageCard";
import ArticleCard from "../../components/ArticleCard";
import DealCard from "../../components/DealCard";
import "./community.css";



export function Community() {
  const [picture, setPicture] = useState([]);
  const [article, setArticle] = useState([]);
  const [deal, setDeal] = useState([]);

  useEffect(() => {
    function fetchPictures() {
      console.log("fetching pictures");
      fetch("/type/picture", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this is the picture data", data);
          setPicture(data);
        }); 
    }

    function fetchArticles() {
      fetch("/type/article", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this is the article data", data);
          setArticle(data);
        });
    }

    function fetchDeals() {
      fetch("/type/deal", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this is the deal data", data);
          setDeal(data);
        }); 
    }

    fetchPictures();
    fetchArticles();
    fetchDeals();
  },[]);

    
  return (
    <div>
      <div className="row">
        {picture.map(pictures => (
        
          <ImageCard
            key={pictures.unique_id}
            title={pictures.title}
            url={pictures.url}       
          />
       
        ))}
      </div>

      <div className="sector">
        {article.map(articles => (
        
          <ArticleCard
            key={articles.unique_id}
            title={articles.title}
            picture={articles.picture}  
            articleDate={articles.articleDate}
            url={articles.url}  
            site={articles.site}     
          />
       
        ))}
        
      </div>

      <div className="row">
        {deal.map(deals => (
        
          <DealCard
            key={deals.unique_id}
            title={deals.title}
            description={deals.description} 
            picture = {deals.picture}
            site = {deals.site} 
            url = {deals.url}    
          />
       
        ))}
      </div>
    </div>
  ); 

}


export default Community;


