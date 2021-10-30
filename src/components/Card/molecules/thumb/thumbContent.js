import React from 'react';
import TvShowThumbnail from '../../atoms/TvShowThumbnail';
import FavoriteButton from '../../atoms/FavoriteButton';

const ThumbArea = ({ medium, name, favorite, handleFavorite, disabled }) => {
  return(
    <div className='content-thumbnail' >
      <TvShowThumbnail image={medium} name={name}/>
      {disabled ? null : <FavoriteButton higlight={favorite} clickAction={handleFavorite}/> }
      
    </div>
  )
}

export default ThumbArea;