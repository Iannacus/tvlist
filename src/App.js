import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies} from './actions/fetchActions';
import ShowsList from './components/ShowList';
import Filter from './components/Filter/Filter';
import Spinner from './components/spinner/atoms/Spinner';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.fetchReducer.pending);

  useEffect(() => {
    dispatch(fetchMovies('https://api.tvmaze.com/shows?page=3'));
  }, [dispatch]);



  return (
    <div className='main-container'>
      <Filter />
      {loader ? <Spinner /> : <ShowsList />}
    </div>
  );
}

export default App;
