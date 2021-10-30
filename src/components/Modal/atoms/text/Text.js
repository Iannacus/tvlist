import React from 'react';

const Text = ({children, fontS, color}) => {
  return(
    <p style={{fontSize: `${fontS}px`, color: `${color}`}}>{children}</p>
  )
}

export default Text;