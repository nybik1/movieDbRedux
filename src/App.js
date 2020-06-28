import React, { Component } from 'react';
import { Pagination, Spin } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import { loadMovies, searchMovies, } from './app/movies/actions';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import MovieItem from './components/movieItem';


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

  handlePageChange = (page, itemsCount) => {
    this.props.loadMovies({ page })
  }



  render() {
    const { loading, error, total } = this.props;
    return (
      <div>
        <div className='search'>
          <h3 className='search__title'>Movie search</h3>
          <form onSubmit={this.searchHandler} >
            <input className='search__input' placeholder="Start enter movies name to search" />
          </form>
        </div>
        <Router>
          <div className='container'>
            {loading && <Spin />}
            {error && <h3>${error}</h3>}
            {!loading && this.props.moviesList.map(item => (
              <MovieItem key={item.id}
                title={item.original_title} rating={item.vote_average}
                description={item.overview} date={item.release_date} descr={item.overview} poster={item.poster_path} movieLink={item.id}>
              </MovieItem>
            ))}
          </div>
          <Switch>
            <Route path='/' exact></Route>
            <Route></Route>
          </Switch>
        </Router>
        <Pagination defaultCurrent={1} total={total} pageSize={20} onChange={this.handlePageChange} />
      </div >
    );
  }

}

export default connect(({ movies: { list, loading, error, total } }) => ({
  moviesList: list,
  loading,
  error,
  total,


}), { loadMovies, searchMovies, })(App);
