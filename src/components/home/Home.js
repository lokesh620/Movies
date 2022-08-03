import React, { useEffect } from 'react';
import './home.scss'
import MovieListing from '../movieListing/movieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    

    useEffect(() => {
       dispatch(fetchAsyncMovies())  
       dispatch(fetchAsyncShows())     
    },[dispatch]);

    return (
        <div>
            <div className='banner-image'></div>
            <MovieListing/>
        </div>    
    );
};

export default Home;