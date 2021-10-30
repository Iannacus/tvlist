import React from 'react';
import InfoModal from '../Organism/InfoModal';
import './ModalTemplate.css'

const ModalTemplate = ({image, name, id, favorite, handleFavorite}) => {
  return(
    <div className='modal-template'>
      <InfoModal image={image} name={name} id={id} favorite={favorite} handleFavorite={handleFavorite} />
    </div>
  )
}

export default ModalTemplate;