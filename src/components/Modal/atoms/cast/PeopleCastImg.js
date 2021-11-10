import React from 'react';
import './PeopleCastImg.css'

const PeopleCastImg = ({img, actorName}) => {
  return (
    <div className = 'people-cast'>
      <img src={img} alt={actorName} />
    </div>
  )
}

export default PeopleCastImg;