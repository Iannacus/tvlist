import React, { useEffect, useState } from 'react';
import './favoriteButton.css';

const FavoriteButton = ({ higlight, clickAction }) => {
  const [fav, setFav] = useState('');
  const [textValue, setTextValue] = useState('Add Favorites');
  
  useEffect(() => {
    if(higlight){
      setFav('button-fav');
      setTextValue('Quit Favorites')
    }else{
      setFav('');
      setTextValue('Add Favorites')
    }
    
  }, [higlight])

  return (
    <input 
      type='button' 
      className={`button ${fav}`} 
      value={textValue} 
      onClick={() => clickAction()}  
    />
  )
}

export default FavoriteButton;