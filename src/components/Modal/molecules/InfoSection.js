import React from 'react';
import ModalTitle from '../atoms/title/ModalTitle';
import StarsRate from './stars-rate/StarsRate';
import Resume from '../atoms/Paragraph/Resume';

const InfoSection = ({title, description, calification, links}) => {
  return (
    <div className="info-container">
      <ModalTitle links={links}>{title}</ModalTitle>
      <StarsRate>{calification}</StarsRate>
      <Resume>
        {description !== null ?
          description : '<p>The tv series description was not founded</p>'
        }
      </Resume>
    </div>
  )
}

export default InfoSection;