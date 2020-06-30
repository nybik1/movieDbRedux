import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './movieItem';
import { loadMovies } from '../app/movies/actions';
import './MovieList.css';



class moviesList extends Component {
    // componentDidMount() {
    //     this.props.loadMovies();
    // }

    render() {
        return (
            <div className='container'>
                <div className='movie_list'>
                    {this.props.moviesList.map((movie) => (
                        <MovieItem key={movie.id}
                            movie={movie} >
                        </MovieItem>))}
                </div >
            </div>
        )
    }
}

export default connect(({ movies: { list } }) => ({
    moviesList: list,
}), { loadMovies })(moviesList);