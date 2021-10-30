import React from "react";
import TextLogo from "./atoms/textLogo/TextLogo";
import SearchButton from "./atoms/Button/SearchButton";
import SearchInput from "./atoms/input/SearchInput";
import { fetchShowsSuccess, fetchMovies } from "../../actions/fetchActions";

import './Filter.css';
import { useDispatch, useSelector } from "react-redux";
import { setFlagFavorites } from "../../actions/favoriteActions";

const Filter = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.favoriteReducer.showList)

  const handleSearch = () => {
    dispatch(fetchShowsSuccess(list));
    dispatch(setFlagFavorites(true));
  }

  const handleHome = () => {
    dispatch(fetchMovies('https://api.tvmaze.com/shows?page=3'));
  }

  return(
    <div className='filter-container'>
      <div className='filter-logo'>
        <TextLogo clickAction={handleHome}/>
      </div>
      <div className='filter-inputs'>
        <div className='search-inpt'>
          <SearchInput /> 
        </div>
        <div className='search-btn'>
          <SearchButton textValue={'See Favorites'} clickAction={() => handleSearch()}/>
        </div>
        
      </div>
    </div>
  )
}

export default Filter;