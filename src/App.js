import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { loadMovies } from './app/movies/actions';

class App extends Component {

  componentDidMount() {
    this.props.loadMovies();
  }

  searchHandler = (e) => {
    e.preventDefault();
    const [input] = e.target;
    debugger;
    this.props.loadMovies({ query: input.value });
    e.target[0].value = '';

  }
  checkMovie = (e) => {
    window.location.href = 'https://www.themoviedb.org/movie'
  }

  render() {

    return (
      <div>
        <h3 className='search'>Movie search</h3>
        <form onSubmit={this.searchHandler} >
          <input placeholder="Start enter movies name to search" />
        </form>
        <div>
          {this.props.moviesList.map(item => (
            <div key={item.id} className='movie-block'>
              <img alt='poster' src='http://image.tmdb.org/t/p/w500/rfxvoRoZtBLUXJqLf8z9kgJWkKt.jpg'></img>
              <div className='movie-info'>
                <h4 className='movie-title'>Movie title:{item.original_title}</h4>
                <p className='movie-rating'>Movie rating:{item.vote_average}</p>
                <p className='movie-descr'> Movie description:{item.overview}</p>
                <p className='movie-data'>Movie data release:{item.release_date}</p>
                <button onClick={this.checkMovie}>Check movie</button>
              </div>
            </div>
          ))}
        </div>
      </div >
    );
  }

}

export default connect(({ movies }) => ({
  moviesList: movies.list
}), { loadMovies })(App);
