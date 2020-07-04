import React from 'react';
import './movieitem.css';
import { Link } from 'react-router-dom';


function MovieItem(props) {

    const { movie } = props;
    return (
        <div key={movie.id} className='movie-block'>
            <img alt='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
            <div className='movie-info'>
                <h4 className='movie-title'>{movie.title}</h4>
                <p className='movie-rating'>Movie rating:{movie.vote_average}</p>
                <p className='movie-descr'> Movie description:{movie.overview}</p>
                <p className='movie-data'>Movie data release:{movie.release_date}</p>
                <div className='movie__button-wrapper'>
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.themoviedb.org/movie/${movie.id}`}>
                        <button>Check movie</button>
                    </a>
                    <button>
                        <Link to={'/movie/' + movie.id} className='movie__details'>Details</Link>
                    </button>
                </div>
            </div>
        </div >
    )
}



export default MovieItem;