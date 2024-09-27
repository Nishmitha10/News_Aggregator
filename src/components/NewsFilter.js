import React, { useState } from 'react';
import axios from 'axios';

const NewsFilter = ({ onFetchArticles }) => {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearch = () => {
    onFetchArticles({ keyword, selectedCategory, selectedSource, selectedDate });
  };

  return (
    <div>
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        placeholder="Search articles..."
      />
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select Category</option>
        {/* Populate categories here */}
      </select>
      <select onChange={(e) => setSelectedSource(e.target.value)}>
        <option value="">Select Source</option>
        {/* Populate sources here */}
      </select>
      <input 
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default NewsFilter;