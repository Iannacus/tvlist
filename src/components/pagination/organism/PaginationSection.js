import React from 'react';
import PaginationElement from '../PaginationElement';
import './PaginationSection.css'

const PaginationSection = () => {

  const handlePagination = (e) => {
    console.log(e.target);
  }
  return(
    <div className='pagination-section'>
      <PaginationElement
        page={1}
        onCLickPagination={handlePagination}
      />
      <PaginationElement
        page={2}
        onCLickPagination={handlePagination}
      />
      <PaginationElement
        page={3}
        onCLickPagination={handlePagination}
      />
      <PaginationElement
        page={4}
        onCLickPagination={handlePagination}
      />
      <PaginationElement
        page={5}
        onCLickPagination={handlePagination}
      />
      <PaginationElement
        page={6}
        onCLickPagination={handlePagination}
      />
    </div>
  )
}

export default PaginationSection;