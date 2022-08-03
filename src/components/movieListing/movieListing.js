import React from 'react';
import { getAllmovies, getAllshows } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/movieCard';
import './movieListing.scss'

const MovieListing = () => {
    const movies = useSelector(getAllmovies);
    const shows = useSelector(getAllshows);

    console.log(movies);

    let renderMovies, renderShows = '';

    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            )
            ))
            :
            (<div className='movies-error'>
                <h3>{movies.Error}</h3>
            </div>);

    renderShows =
        shows.Response === 'True' ? (
            shows.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            )
            ))
            :
            (<div className='shows-error'>
                <h3>{shows.Error}</h3>
            </div>);

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
            <div className='movie-list'>
                <h2>Shows</h2>
                <div className='movie-container'>{renderShows}</div>
            </div>
        </div>

    );
};

export default MovieListing;