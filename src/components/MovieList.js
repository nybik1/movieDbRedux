import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './movieItem';
import { loadMovies, searchMovies } from '../app/movies/actions';
import { Pagination, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './MovieList.css';



class moviesList extends Component {



    handlePageChange = (page) => {
        document.body.scrollIntoView();
        const input = document.querySelector('.search__input').value;
        if (this.props.isSearch) {
            return this.props.searchMovies({ page, query: input })
        }
        this.props.loadMovies({ page })

    }

    render() {
        const style = {
            fontSize: '150px',
        };
        const { loading, error, total } = this.props;
        const antIcon = <LoadingOutlined style={style} spin />;


        return (
            <React.Fragment>
                <div className='container'>
                    {loading && <div className='spinner'><Spin indicator={antIcon} /></div>}
                    {error && <h3>${error}</h3>}
                    {!loading && <div className='movie_list'>
                        {this.props.moviesList.map((movie) => (
                            <MovieItem key={movie.id}
                                movie={movie} >
                            </MovieItem>))}
                    </div >}
                </div>
                <div className='pagination'>
                    <Pagination defaultCurrent={1} total={total} pageSize={20} onChange={this.handlePageChange} />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(({ movies: { list, loading, error, total, isSearch } }) => ({
    moviesList: list,
    loading,
    error,
    total,
    isSearch,
}), { loadMovies, searchMovies })(moviesList);