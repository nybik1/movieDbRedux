import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './../movieItem';
import s from './style.module.scss';


class FavoriteMovies extends Component {


    render() {
        const favorites = window.JSON.parse(localStorage.getItem('favorites'));
        return (
            <div className={s.favorites__movie}>
                {favorites.map(movie => <div>
                    <MovieItem key={movie.id}
                        movie={movie} >
                    </MovieItem>))
                </div>)}
            </div>
        )
    }
}


export default connect(({ movies: { list } }) => ({
    movieList: list
}))(FavoriteMovies);  