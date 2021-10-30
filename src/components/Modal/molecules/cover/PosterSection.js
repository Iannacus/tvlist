import React from 'react';
import FavoriteButton from '../../../Card/atoms/FavoriteButton';
import './PosterSection.css'


const TvShowThumbnail = ({image, name, favorite, handleFavorite}) => {
  return(
    <div className='image-container'>
      <img src={image} alt={`${name} tv show`}/>
      <FavoriteButton higlight={favorite} clickAction={handleFavorite}/>
    </div>
    
  )
}

export default TvShowThumbnail;