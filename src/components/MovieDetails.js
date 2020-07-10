import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from './../app/movies/actions';
import { Link } from 'react-router-dom';
import './MovieDetails.css';
import 'antd/dist/antd.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Button, Collapse } from 'antd';
// import { Accordion, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';




class movieDetail extends Component {
    state = {
        images: [],
        cast: [],
        teaser: [],
        reviews: [],
        addClass: false,
    }

    getMovieImg() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/images?api_key=4fbb4691e328ec322d3358761a861113`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ images: data.backdrops })
            })
    }

    getMovieCast() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=4fbb4691e328ec322d3358761a861113&append_to_response=credits`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ cast: data.credits.cast })
            })
    }

    getMovieTeaser() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=4fbb4691e328ec322d3358761a861113&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ teaser: data.results.slice(0, 1) })
            })
    }

    getMovieReviews() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/reviews?api_key=4fbb4691e328ec322d3358761a861113`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ reviews: data.results })
            })
    }

    toggleFavorites = (id) => (e) => {
        const favorites = JSON.parse(window.localStorage.getItem('favorites'));
        const index = favorites.findIndex(item => item === this.props.movie.id);
        if (index !== -1) {
            favorites.splice(index, 1)
        }
        else {
            favorites.push(id)
        };
        window.localStorage.setItem('favorites', JSON.stringify(favorites));
        this.forceUpdate();
    }

    toggleReviewClass() {
        this.setState({ addClass: !this.state.addClass })
    }





    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
        this.getMovieImg()
        this.getMovieCast()
        this.getMovieTeaser()
        this.getMovieReviews()
    }


    render() {
        const { movie } = this.props;
        const isMovieInFavorites = JSON.parse(window.localStorage.getItem('favorites')).find(item => item === movie.id)
        const favoriteBtnText = isMovieInFavorites ? 'Remove from favorites' : 'Add to favorites';
        const { Panel } = Collapse;
        let reviews = ['review'];
        if (this.state.addClass) {
            reviews.push('full')
        }


        return (
            <div>
                <div className='movie'>
                    <div className='movie__poster'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='img'></img>
                    </div>
                    <div className='movie__wrapper'>
                        <div className='movie__images'>
                            <Carousel
                                centered
                                slidesPerPage={3}
                                infinite
                                // autoPlay={2000}
                                animationSpeed={1000}>
                                {this.state.images.map(item =>
                                    <img className='movie__image' alt='movie img' src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}></img>

                                )}
                            </Carousel>
                        </div>
                        <div className='movie__info'>
                            <h4 className="movie__title">{movie.original_title}</h4>
                            <p>{movie.overview}</p>
                            <Link className='movie__btn-back' to='/'>Back</Link>
                            <Button onClick={this.toggleFavorites(movie.id)} type='primary' className='movie__addFav'>{favoriteBtnText}</Button>
                        </div>
                        <div className='movie__cast'>
                            <Carousel
                                slidesPerPage={7}
                                infinite
                                // autoPlay={2000}
                                animationSpeed={1000}>
                                {this.state.cast.map(item =>
                                    <div className='movie__actor'>
                                        <img alt='actor_photo' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}></img>
                                        <p className='actor__name'>{item.name}</p>
                                        <p className='actor__character'><strong>Character: </strong>{item.character}</p>
                                    </div>)}
                            </Carousel>
                        </div>
                    </div>
                </div >
                {
                    this.state.teaser.map(item =>
                        <iframe title='video' width="560" height="315"
                            src={`https://www.youtube.com/embed/${item.key}`}
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>)
                }
                <h3>Reviews</h3>
                <div className='movie__review-wrapper'>
                    {this.state.reviews.map(item => <div className={reviews.join('')}>
                        <h4 className='movie__review-author'>{item.author}</h4>
                        <button onClick={this.toggleReviewClass.bind(this)}>Show full</button>
                        <p>{item.content}</p>
                    </div>)}
                </div>
            </div >
        )
    }
}


export default connect(({ movies: { movie } }) => ({
    movie: movie,
}), { getMovie })(movieDetail);