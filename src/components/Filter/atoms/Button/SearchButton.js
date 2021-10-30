import React from 'react';
import './SearchButton.css';

const SearchButton = ({textValue, clickAction}) => {
  return (
    <input 
      type='button' 
      className='search-button'
      value={textValue} 
      onClick={() => clickAction()}  
    />
  )
}

export default SearchButton;