import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { loadMovies, searchMovies, } from './app/movies/actions';
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Nav from './components/Nav';
import About from './components/About';




class App extends Component {

  // state = {
  //   isSearch: false
  // }



  componentDidMount() {
    this.props.loadMovies();
  }




  searchHandler = (e) => {
    e.preventDefault();
    const [input] = e.target;
    this.props.searchMovies({
      query: input.value,
    });
    // this.setState({ isSearch: true });
  }

  clearSearch = (e) => {
    this.setState({ isSearch: false });
    document.querySelector('.search__input').value = '';
    this.props.loadMovies()
  }


  render() {

    return (
      <Router>
        <Nav />
        <div>
          <div className='search'>
            <h3 className='search__title'>Movie search</h3>
            <form onSubmit={this.searchHandler} >
              <input className='search__input' placeholder="Start enter movies name to search" />
            </form>
            <button onClick={this.clearSearch}>Clear search</button>
          </div>
          <Route path='/' exact component={MovieList} />
          <Route path='/movie/:id' exact component={MovieDetails} />
          <Route path='/about' exact component={About} />
        </div >
      </Router>
    );
  }

}

export default connect(({ movies: { loading, error, total } }) => ({
  loading,
  error,
  total,


}), { loadMovies, searchMovies })(App);  
