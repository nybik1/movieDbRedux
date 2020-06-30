import React, { Component } from 'react';
import { Pagination, Spin } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import { loadMovies, searchMovies, } from './app/movies/actions';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


class App extends Component {
  componentDidMount() {
    this.props.loadMovies();
  }

  searchHandler = (e) => {
    e.preventDefault();
    const [input] = e.target;
    this.props.searchMovies({
      query: input.value,
    });
    e.target[0].value = '';
  }

  handlePageChange = (page) => {
    this.props.loadMovies({ page })
  }



  render() {
    const { loading, error, total } = this.props;
    return (
      <Router>
        <div>
          <div className='search'>
            <h3 className='search__title'>Movie search</h3>
            <form onSubmit={this.searchHandler} >
              <input className='search__input' placeholder="Start enter movies name to search" />
            </form>
          </div>
          <React.Fragment>
            {/* <div className='container'>
            {loading && <Spin />}
            {error && <h3>${error}</h3>}
            {!loading && <MovieList></MovieList>}
          </div> */}
          </React.Fragment>
          <Route path='/' exact component={MovieList} />
          <Route path='/movie/:id' exact component={MovieDetails} />
          <Pagination defaultCurrent={1} total={total} pageSize={20} onChange={this.handlePageChange} />

        </div >
      </Router>
    );
  }

}

export default connect(({ movies: { loading, error, total } }) => ({
  loading,
  error,
  total,


}), { loadMovies, searchMovies, })(App);  
