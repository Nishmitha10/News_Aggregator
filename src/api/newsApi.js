import axios from 'axios';

const NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

// Function to fetch NewsAPI articles
export const fetchNewsApiArticles = (keyword) => {
    return axios.get(`${NEWS_API_URL}&q=${keyword}`);
};