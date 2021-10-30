import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../actions/modalActions';
import './TvShowTitle.css'

const TvShowTitle = ({ title, id, disabled }) => {
  const dispatch = useDispatch();

  return(
    <>
    {disabled ? <h2>{title}</h2> : <h2 onClick={() => dispatch(openModal(id))}>{title}</h2>}
    </>
    
   )
 };

 export default TvShowTitle;