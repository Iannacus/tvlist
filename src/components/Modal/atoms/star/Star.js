import React from 'react';
import './Star.css';

const Star = ({fillStar}) => {
  return(
    <div className="stars-outer">
          <div className="stars-inner" style={{width: `${fillStar * 10}%`}}></div>
    </div>
  )
}

export default Star;