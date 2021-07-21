import React, { useState, useEffect } from 'react';
import Axios  from "axios";
import NewsItem from './NewsItem';

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
        </div>
        
    )
};

export default NewsList;