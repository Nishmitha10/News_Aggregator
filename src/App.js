import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import FilterComponent from './components/FilterComponent';
import { NewsContext } from './context/NewsContext';
import './App.css';

const App = () => {
    const { fetchArticles } = useContext(NewsContext);

    useEffect(() => {
        fetchArticles('latest'); // Default keyword
    }, []);

    return (
        <div>
            <Navbar />
            <FilterComponent />
            <Articles />
        </div>
    );
};

export default App;