import React from 'react';
import './Resume.css';

const Resume = ({ children }) => {
  return(
    <div className='resume-container' dangerouslySetInnerHTML={{__html: children}}>
      
    </div>
  )
}

export default Resume;