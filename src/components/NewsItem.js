import React from 'react'
import "./NewsItem.css"; 

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="new-item">
            <img className="news-img" src={urlToImage} alt="New"/>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem;