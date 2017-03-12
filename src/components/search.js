import React from 'react';
let searchInput;
const Search = () => {

  const handleSearch = () => {
    return "bla";
  }

  return (
    <input className="right" type="search" ref={ el => searchInput = el } placeholder="Search recipies" onChange={handleSearch}/>
  );
}


export default Search;
