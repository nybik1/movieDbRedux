import React, { Component } from 'react';
import './movieitem.css';
import { Link } from 'react-router-dom';


class MovieItem extends Component {

    render() {
        const { movie } = this.props;
        return (
            <div key={movie.id} className='movie-block'>
                <img alt='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                <div className='movie-info'>
                    <h4 className='movie-title'>Movie title:{movie.original_title}</h4>
                    <p className='movie-rating'>Movie rating:{movie.vote_average}</p>
                    <p className='movie-descr'> Movie description:{movie.overview}</p>
                    <p className='movie-data'>Movie data release:{movie.release_date}</p>
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.themoviedb.org/movie/${movie.id}`}>
                        <button>Check movie</button>
                    </a>
                    <Link to={'/movie/' + movie.id}>Details</Link>
                </div>
            </div >
        )
    }



}

export default MovieItem;