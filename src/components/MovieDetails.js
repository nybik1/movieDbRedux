import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from './../app/movies/actions';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

class movieDetail extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }
    render() {
        const { movie } = this.props
        return (
            <div className='movie'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='img'></img>
                <div className='movie__info'>
                    <h4 className="movie__title">{movie.original_title}</h4>
                    <p>{movie.overview}</p>
                    <Link to='/'>Back</Link>
                </div>
            </div >
        )
    }
}


export default connect(({ movies: { movie } }) => ({
    movie: movie,
}), { getMovie })(movieDetail);