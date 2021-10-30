import React from 'react';

const Poster = (image, name) => {
  return(
    <img src={image.image} alt={`${name} tv show`}/>
  )
}

export default Poster;