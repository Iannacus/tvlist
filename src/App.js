import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies} from './actions/fetchActions';
import ShowsList from './components/ShowList';
import Filter from './components/Filter/Filter';
import Spinner from './components/spinner/atoms/Spinner';
import './App.css';
import { closeModal } from './actions/modalActions';

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.fetchReducer.pending);

  useEffect(() => {
    dispatch(fetchMovies('https://api.tvmaze.com/shows?page=3'));
  }, [dispatch]);

  const handleEscape = (e) => {
    if(e.key === 'Escape') {
      dispatch(closeModal());
    }
  }

  return (
    <div className='main-container' onKeyDown={(e) => handleEscape(e)} tabIndex='0'>
      <Filter />
      {loader ? <Spinner /> : <ShowsList />}
    </div>
  );
}

export default App;
