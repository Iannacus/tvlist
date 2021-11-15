import React from 'react';
import './PaginationElement.css'
const PaginationElement = ({ page, onCLickPagination }) => {
  return(
    <div className='pagination-element' onClick={e => onCLickPagination(e)}>
      <p>{page}</p>
    </div>
  )
}

export default PaginationElement;