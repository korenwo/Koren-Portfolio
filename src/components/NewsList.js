import React, { useState, useEffect } from 'react';
import  Axios  from "axios";
import NewsItem from './NewsItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

useEffect(() => {
    const getArticles = async () => {
        const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=4a7c1ea3f61d415db06a9786953b13c3");
    
    setArticles(res.data.articles);
    console.log(res);
};

    getArticles();
}, [])

    return (
        <div>
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem title={title} description={description} url={url} urlToImage={urlToImage}/>
            ))}
            <div className="links">
                <Link to="/"><li className="callUs">Home Page</li>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                </div>       
        </div>
        
    )
};

export default NewsList;