import React from 'react';

const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.searchBarChangeHandler}/>
    <button className="btn btn-warning" onClick={props.searchButtonClick}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
