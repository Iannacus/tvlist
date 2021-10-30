import React from 'react';
import ModalTitle from '../../atoms/title/ModalTitle';
import Text from '../../atoms/text/Text';
import Button from '../../atoms/Button/Button';
import { useDispatch } from 'react-redux';
import {cancelRequest, confirmDelete, deleteFavorites} from '../../../../actions/favoriteActions'
import { closeModal } from '../../../../actions/modalActions';
import './DeleteSection.css'



const DeleteSection = ({title, id}) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(confirmDelete(true));
    dispatch(deleteFavorites(id));
    dispatch(closeModal());
  }

  const handleCancel = () => {
    dispatch(cancelRequest())
    dispatch(closeModal())
  }

  return (
    <div className="info-container">
      <ModalTitle links={{}}>{title}</ModalTitle>
      <Text fontS={32} color={'rgba(235,49,90,1)'}>Esta a punto de eliminar de favoritos este título</Text>
      <Text fontS={32} color={'rgba(235,49,90,1)'}>¿Esta Seguro?</Text>
      <div className='buton-container'>
        <Button textValue={'Aceptar'} clickAction={handleConfirm}/>
        <Button textValue={'cancelar'} clickAction={handleCancel}/>
      </div>
      
    </div>
  )
}

export default DeleteSection;