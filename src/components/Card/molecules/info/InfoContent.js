import React from 'react';
import TvShowDate from '../../atoms/TvShowDate';
import TvShowTitle from '../../atoms/TvShowTitle';

const InfoContent = ({date, name, id, disabled}) => {
  return(
    <div className='content-info'>
      <TvShowDate date={date}/>
      <TvShowTitle title={name} id={id} disabled= {disabled}/>
    </div>
  )
}

export default InfoContent;