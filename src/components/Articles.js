import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import './Articles.css';

const Articles = () => {
    const { filteredArticles } = useContext(NewsContext);

    return (
        <div className="articles-container">
            {filteredArticles.map((article, index) => (
                <div className="article-card" key={index}>
                    <h3>{article.title}</h3>
                    <p>{article.source.name}</p>
                    <p>{article.publishedAt}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;