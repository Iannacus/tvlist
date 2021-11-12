import React from 'react';
import { useSelector } from 'react-redux';
import PeopleCastImg from '../../atoms/cast/PeopleCastImg';
import './CastSection.css';

const CastSection = () => {
  
  const cast = useSelector(state => state.castReducer.cast);
  return(
    <div>
      {cast.length > 0 ? 
        <h3>Cast</h3> : <h3>Cast not found</h3>
      }
      <div className='cast-persons'>
        { cast.length > 0 ?
          cast.slice(0,7).map((caster, i) => {
            if(caster.person.image !== null)
              return(
                <PeopleCastImg img={caster.person.image.medium} actorName={caster.person.name} key={i} />
              )
          })
          :
          null
        }
      </div>
      
    </div>
  )
}

export default CastSection;
{/* 
  la ruta seria [].person.name  y [].person.image.medium

*/}


