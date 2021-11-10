import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TvShowCard from './Card/organism/TvShowCard';
import './ShowList.css'

function ShowsList() {
  const [view, setView] = useState(false);
  const shows = useSelector(state => state.fetchReducer.tvShows);
  const favorites = useSelector(state => state.favoriteReducer.showList);
  let fav = false;

  let today = new Date();
  let actualDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  useEffect(() => {
    if(shows.length > 0)
      setView(true);
    else
      setView(false);

  }, [shows])

  const renderTvShows = shows.map( (show, i) => {
    const {name, image, premiered, id, rating, summary} = {...show};
    console.log(id)
    if(favorites.findIndex(element => element.id === id) >= 0){
       fav = true;
    }else{
      fav = false;
    }
    
    return(
      <TvShowCard 
        image={image}
        name={name}
        date={premiered}
        id={id}
        fav={fav}
        calification={rating.average}
        description={summary}
        disabled={false}
        key={i}/>
    )
  }); 

  return(
    <div className='list-container'>
      {view ? 
        renderTvShows
        :
          <TvShowCard 
            image={
              {
                medium: 'https://i.pinimg.com/736x/41/f3/03/41f303e3957238ca908136d78d198eb4.jpg', 
                original: 'https://i.pinimg.com/736x/41/f3/03/41f303e3957238ca908136d78d198eb4.jpg' 
              }
            }
            name={"Seems there aren't results that match with your request"}
            date={actualDate}
            id={0}
            fav={false}
            calification={0}
            description={''}
            disabled={true}
          />
      }
          )
    </div>
  )
}

export default ShowsList; 