import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

const SearchFilter = () => {
  const { setSearchQuery } = useContext(NewsContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  return (
    <div className="search-filter">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="input"
          placeholder="Search for news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchFilter;