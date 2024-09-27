import React, { createContext, useState, useEffect } from 'react';
import { fetchNewsApiArticles } from '../api/newsApi';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);

    const fetchArticles = async (keyword) => {
        const newsApiResponse = await fetchNewsApiArticles(keyword);
        const allArticles = [
            ...newsApiResponse.data.articles,
        ];
        setArticles(allArticles);
        setFilteredArticles(allArticles);
    };

    return (
        <NewsContext.Provider value={{ articles, filteredArticles, setFilteredArticles, fetchArticles }}>
            {children}
        </NewsContext.Provider>
    );
};