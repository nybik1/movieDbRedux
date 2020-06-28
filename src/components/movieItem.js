import React from 'react';
import './movieitem.css';


function MovieItem({ id, title, rating, descr, date, poster, movieLink, }) {
    return (
        <div key={id} className='movie-block'>
            <img alt='poster' src={`https://image.tmdb.org/t/p/w500/${poster}`}></img>
            <div className='movie-info'>
                <h4 className='movie-title'>Movie title:{title}</h4>
                <p className='movie-rating'>Movie rating:{rating}</p>
                <p className='movie-descr'> Movie description:{descr}</p>
                <p className='movie-data'>Movie data release:{date}</p>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.themoviedb.org/movie/${movieLink}`}>
                    <button>Check movie</button>
                </a>
                <a href='/img'>img</a>
            </div>
        </div >
    )
}

export default MovieItem;