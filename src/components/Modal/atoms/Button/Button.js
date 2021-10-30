import React from 'react';
import './Button.css';

const Button = ({textValue, clickAction}) => {
  return (
    <input 
      type='button' 
      className='delete-button'
      value={textValue} 
      onClick={() => clickAction()}  
    />
  )
}

export default Button;