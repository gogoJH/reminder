import React from 'react';
import Search from './Search';

const Nav = (props) => {
  return (
    <nav className="navbar">
      <Search searchBarChangeHandler={props.searchBarChangeHandler} searchButtonClick={props.searchButtonClick}/>
    </nav>
  )
};

export default Nav;
