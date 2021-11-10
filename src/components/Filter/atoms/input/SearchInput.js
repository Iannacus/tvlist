import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFlagFavorites } from '../../../../actions/favoriteActions';
import { fetchCustomMovies } from '../../../../actions/fetchActions';
import './SearchInput.css';

const SearchInput = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const url = 'https://api.tvmaze.com/search/shows?q='
  const handleSearch = (e) => {
    if(e.key === 'Enter'){
      if(e.target.value.trim() !== '')
        setSearchTerm(`${url}${e.target.value}`)
    }
  }

  useEffect(() => {
    dispatch(setFlagFavorites(false));
    dispatch(fetchCustomMovies(searchTerm));
  }, [searchTerm, dispatch])

  return (
    <input 
      type='text' 
      className='search' 
      placeholder='Buscar'
      onKeyDown={e=>{handleSearch(e)}}
    >

    </input>
  )
}

export default SearchInput;