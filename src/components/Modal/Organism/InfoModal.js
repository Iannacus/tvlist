import React, { useEffect } from 'react';
import InfoSection from '../molecules/InfoSection';
import DeleteSection from '../molecules/deleteSection/DeleteSection';
import PosterSection from '../molecules/cover/PosterSection';
import './InfoModal.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../actions/modalActions';
import { cancelRequest } from '../../../actions/favoriteActions';
import CastSection from '../molecules/castSection/CastSection';
import { getCast } from '../../../actions/castActions';

const InfoModal = ({id, favorite, handleFavorite}) => {

  const dispatch = useDispatch();
  const info = useSelector(state => state.fetchReducer.tvShows).filter(item => item.id === id);
  const request = useSelector(state => state.favoriteReducer.request);
  const {image, name, summary, rating, externals } = {...info[0]};

  const handleClose = () => {
    dispatch(cancelRequest());
    dispatch(closeModal())
  }

  useEffect(() => {
    dispatch(getCast(`https://api.tvmaze.com/shows/${id}/cast`));
  }, []);



  return(
    <div className='modal-layout'>
      <div className='modal-section poster'>
        {image !== null ? 
          <PosterSection 
          image={image.original} n
          ame={name} 
          favorite={favorite}
          handleFavorite={handleFavorite}/> 
          :
          <PosterSection image='https://m.media-amazon.com/images/M/MV5BNDVhODY4Y2EtODQ5NS00ZjBkLWI0NzctYmZhMWEwZDgzYWRiXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg' 
          name={name} 
          favorite={favorite}
            handleFavorite={handleFavorite}
          /> 
          
          }
        
      </div>
      <div className='modal-section'>
        {!request ? 
        <>
          <InfoSection 
            title={name} 
            description={summary} 
            calification={rating.average} 
            links={externals}
            
          />
          <CastSection />
          </>
          :
          <DeleteSection title={name} id={id} />
        }
      </div>
      <span className='close' onClick={() => handleClose()}>x</span>
    </div>
  )
}

export default InfoModal;