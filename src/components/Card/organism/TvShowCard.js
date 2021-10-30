import React, { useEffect, useState } from 'react';
import { addFavorites, confirmDelete, deleteRequest } from '../../../actions/favoriteActions';
import { openModal } from '../../../actions/modalActions';
import { useDispatch, useSelector } from 'react-redux';
import ModalTemplate from '../../Modal/templates/Modaltemplate';
import InfoContent from '../molecules/info/InfoContent';
import ThumbArea from '../molecules/thumb/thumbContent';
import './tvShowCard.css'

const TvShowCard = ({image, name, date, id, fav, disabled}) => {
  const [favorite, setFavorite] = useState(fav);
  const dispatch = useDispatch();
  const items = useSelector(state => state.fetchReducer.tvShows);
  const {medium, original} = {...image};
  const { open, modalId } = useSelector(state => state.modalReducer);
  const confirm = useSelector(state => state.favoriteReducer.confirmation);

  const handleFavorite = () => {
    if(!favorite){
      setFavorite(true);
      dispatch(confirmDelete(false));
      dispatch(
        addFavorites(items.filter(item => item.id === id)
        )
      );
    }
    else{
      dispatch(confirmDelete(false));
      dispatch(deleteRequest());
      dispatch(openModal(id));
    }   
  }

  useEffect(() => {
    if(fav){
      setFavorite(true);
    }
  });

  useEffect(() => {
    if(confirm) {
      setFavorite(false);
    }
  }, [confirm]);

  return (
    <>
      <div className='card-container' style={{backgroundImage: `url(${original})`}}>
        <div className='opacity-container'>
          <div className='content'>
            <InfoContent date={date} name={name} id={id} disabled= {disabled}/>
            <ThumbArea 
              medium={medium} 
              name={name} 
              favorite={favorite} 
              handleFavorite={handleFavorite} 
              disabled= {disabled}
            />
          </div>    
        </div>
      </div>
      {open && modalId === id ?  
        <ModalTemplate
          image={original} 
          name={name}
          id={id} 
          favorite={fav} 
          handleFavorite={handleFavorite}
        /> : null}
    </>
  )
}

export default TvShowCard;