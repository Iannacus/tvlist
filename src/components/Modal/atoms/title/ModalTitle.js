import React from 'react';
import './ModalTitle.css'

const TvShowTitle = ({ children, links }) => {
  return(
    <>
    {links.hasOwnProperty('imdb') ? 
        (
        <a href={`https://www.imdb.com/title/${links.imdb}`} target='_BLANK' rel='noreferrer'>
          <h3>{children}</h3>
        </a>
        )
        : 
        <h3>{children}</h3>
      }
      </>
    
   )
 };

 export default TvShowTitle;