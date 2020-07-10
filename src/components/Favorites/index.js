import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieItem from './../movieItem';
import s from './style.module.scss';


class FavoriteMovies extends Component {
    state = {
        favorites: []
    }

    componentDidMount() {
        this.getFavorite()
    }



    getFavorite() {
        if (!Object.keys(this.props.movieList).length) {
            return [];
        }
        const favorites = window.JSON.parse(localStorage.getItem('favorites'));
        const movieList = Object.values(this.props.movieList).reduce((acc, item) => { acc.push(...item); return acc; }, []);
        let favoriteMovies = [];
        favorites.forEach(function (elementOfFav) {
            movieList.forEach(function (elementOfList) {
                if (JSON.stringify(elementOfFav) === JSON.stringify(elementOfList.id)) {
                    favoriteMovies.push(elementOfList)
                }
                console.log(favoriteMovies)
                return favoriteMovies;
            })
        })
        this.setState({ favorites: favoriteMovies })
    }

    render() {
        return (
            <div>
                <div className={s.favorites__movie}>
                    {this.state.favorites.map((movie) => <MovieItem key={movie.id}
                        movie={movie}></MovieItem>)}
                </div>
                <Link className='movie__btn-back' to='/'>Back</Link>
            </div>
        )
    }
}


export default connect(({ movies: { list } }) => ({
    movieList: list
}))(FavoriteMovies);  