import React from 'react';
import './movieitem.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function MovieItem(props) {

    const { movie } = props;
    return (
        <div key={movie.id} className='movie-block'>
            {movie.poster_path && <LazyLoadImage alt={'moviePoster'} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={250} height={345} effect='blur' />}
            {!movie.poster_path && <LazyLoadImage alt={'moviePoster'} src={`https://via.placeholder.com/230x345`} width={250} height={345} effect='blur' />}
            <div className='movie-info'>
                <h4 className='movie-title'>{movie.title}</h4>
                <p className='movie-rating'>Movie rating:
                {movie.vote_average &&
                        <div className='progress-wrapper'>
                            <CircularProgressbar strokeWidth='5' value={movie.vote_average * 10} text={movie.vote_average}
                                styles={buildStyles({
                                    textSize: '36px',
                                    pathColor: "rgba(0,40,161,1)"
                                })}></CircularProgressbar>
                        </div>}
                    {!movie.vote_average &&
                        <div className='progress-wrapper'>
                            <CircularProgressbar strokeWidth='5' value='0' text='0'
                                styles={buildStyles({
                                    textSize: '36px',
                                    pathColor: "rgba(0,40,161,1)"
                                })}></CircularProgressbar>
                        </div>}
                </p>
                <div className='ellipsis'>
                    <p className='movie-descr'> Movie description:{movie.overview}</p>
                </div>
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