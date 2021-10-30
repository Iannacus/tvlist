import React from 'react';
import './tvShowDate.css';

const TvShowDate = ({ date }) => {
  const defaultDate = '25-07-1990'
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  let dateSplited = [];

  date !== null ? dateSplited = date.split('-') : dateSplited = defaultDate.split('-');

  const [year, month, day] = [...dateSplited];



  return(
    <div className="premiered-container">
      <div>
        <span className="month-label">{months[parseInt(month) - 1]}  </span>
        <span className="day-label">{day}</span>
      </div>
      <div>
        <span className="year-label">{year}</span>
      </div>
    </div>
  )
}

export default TvShowDate;