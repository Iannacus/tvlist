import React from 'react';
import InfoModal from '../Organism/InfoModal';
import './ModalTemplate.css'

const ModalTemplate = ({image, name, id, favorite, handleFavorite}) => {

  const handleCloseModal = (e) => {
    console.log(e)
  }

  return(
    <div className='modal-template' onKeyDown={e => console.log(e, 'si')} tabIndex={-1}>
      <InfoModal image={image} name={name} id={id} favorite={favorite} handleFavorite={handleFavorite} />
    </div>
  )
}

export default ModalTemplate;