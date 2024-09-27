import React, { useState, useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import './FilterComponent.css';

const FilterComponent = () => {
    const { articles, setFilteredArticles } = useContext(NewsContext);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [source, setSource] = useState('');

    const handleFilter = () => {
        let filtered = articles;

        if (keyword) {
            filtered = filtered.filter(article => article.title.includes(keyword));
        }

        if (category) {
            filtered = filtered.filter(article => article.category === category);
        }

        if (source) {
            filtered = filtered.filter(article => article.source.name === source);
        }

        setFilteredArticles(filtered);
    };

    return (
        <div className="filter-container">
            <input 
                type="text" 
                placeholder="Search by keyword" 
                onChange={(e) => setKeyword(e.target.value)} 
            />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
            </select>
            <select onChange={(e) => setSource(e.target.value)}>
                <option value="">All Sources</option>
                <option value="BBC">BBC</option>
                <option value="CNN">CNN</option>
            </select>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default FilterComponent;