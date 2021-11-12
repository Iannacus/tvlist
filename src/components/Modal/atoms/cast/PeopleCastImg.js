import React from 'react';
import './PeopleCastImg.css'

const PeopleCastImg = ({img, actorName}) => {
  return (
    <div className='tooltip'>
      <span className= 'tooltiptext'>{actorName}</span>
      <div className = 'people-cast'>
        <img src={img} alt={actorName} />
      </div>
    </div>
    
  )
}

export default PeopleCastImg;