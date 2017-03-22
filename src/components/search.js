import React from 'react';




const Search = (props) => {

  let searchInput;

  const handleSearch = () => {
    let searchText = searchInput.value;
    props.onSearch(searchText);
  }

  return (
    <input className="right" type="search" ref={ el => searchInput = el } placeholder="Search recipes" onChange={handleSearch}/>
  );
}


export default Search;
