import React from 'react';
import Star from '../../atoms/star/Star';
import Text from '../../atoms/text/Text';
import './StarsRate.css';

const StarsRate = ({children}) => {

  return(
    <div className='rate-container'>
      <Star fillStar={children}/>
      <Text>{children}</Text>
    </div>
  )
}

export default StarsRate;