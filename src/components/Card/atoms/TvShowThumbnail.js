import React from 'react';

const TvShowThumbnail = ({image, name}) => {
  return(
    <img src={image} alt={`${name} tv show`} style={{width: '60%'}}/>
  )
}

export default TvShowThumbnail;