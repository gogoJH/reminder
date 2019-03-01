import React from 'react';

const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.onChangeSearch}/>
    <button className="btn hidden-sm-down" onClick={props.handleSearchButton}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
