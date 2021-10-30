import React from 'react';
import './TextLogo.css';
const TextLogo = ({clickAction}) => {
  return(
    <h1 className='logo' onClick={() => clickAction()}>Tv <span>Series</span></h1>
  )
}

export default TextLogo;