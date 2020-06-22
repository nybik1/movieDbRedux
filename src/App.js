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
              <img alt='poster' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></img>
              <div className='movie-info'>
                <h4 className='movie-title'>Movie title:{item.original_title}</h4>
                <p className='movie-rating'>Movie rating:{item.vote_average}</p>
                <p className='movie-descr'> Movie description:{item.overview}</p>
                <p className='movie-data'>Movie data release:{item.release_date}</p>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.themoviedb.org/movie/${item.id}`}>
                  <button>Check movie</button>
                </a>
              </div>
            </div >
          ))
          }
        </div>
      </div >
    );
  }

}

export default connect(({ movies }) => ({
  moviesList: movies.list
}), { loadMovies })(App);
