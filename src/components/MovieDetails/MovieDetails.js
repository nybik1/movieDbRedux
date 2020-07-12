import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../app/movies/actions';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
import 'antd/dist/antd.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Button, Modal } from 'antd';
// import { Accordion, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './../Reviews';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




class movieDetail extends Component {
    state = {
        images: [],
        cast: [],
        teaser: [],
        reviews: [],
        visible: false,
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


    toggleFavorites = (movie) => (e) => {
        const favorites = JSON.parse(window.localStorage.getItem('favorites'));
        const index = favorites.findIndex(item => item.id === this.props.movie.id);
        if (index !== -1) {
            favorites.splice(index, 1)
        }
        else {
            favorites.push(movie)
        };
        window.localStorage.setItem('favorites', JSON.stringify(favorites));
        this.forceUpdate();
    }

    // toggleReviewClass() {
    //     this.setState({ addClass: !this.state.addClass })
    // }

    toggleFullReview() {
        const review = this.reviewRef.current;
        review.addClass('full');
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    closeModal = e => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
        this.getMovieImg()
        this.getMovieCast()
        this.getMovieTeaser()
    }




    render() {
        const { movie, match: { params: { id: movieId } } } = this.props;
        const isMovieInFavorites = JSON.parse(window.localStorage.getItem('favorites')).find(item => item.id === movie.id)
        const favoriteBtnText = isMovieInFavorites ? 'Remove from favorites' : 'Add to favorites';
        const [image = {}] = this.state.images;

        return (
            <div>
                <div className={s.movie}>
                    <Link className={s.movie__btnBack} to='/'>Back</Link>
                    <div className={s.movie__wrapper_first} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${image.file_path})` }}>
                        <div className={s.poster_btn_wrapper}>
                            <div className={s.movie__poster}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='img'></img>
                            </div>
                            <div className={s.movie_action_wrapper}>
                                <Button onClick={this.toggleFavorites(movie)} type='primary' className={s.movie__addFav}>{favoriteBtnText}</Button>
                                <div className={s.movie__trailer}>
                                    <Button type='primary' onClick={this.showModal}>Watch trailer</Button>
                                    {this.state.teaser.map(item =>
                                        <Modal width='960px' footer={null} title={this.props.movie.original_title} visible={this.state.visible} onCancel={this.closeModal}>
                                            <iframe title='video' width='100%' height='480px'
                                                src={`https://www.youtube.com/embed/${item.key}`}
                                                frameborder="0"
                                                allowfullscreen></iframe>
                                        </Modal>)}
                                </div>
                            </div>
                        </div>
                        <div className={s.movie__info}>
                            <div className={s.movie__title}>
                                <h4>{movie.original_title}</h4>
                                <div className={s.progressWwrapper}>
                                    <CircularProgressbar strokeWidth='5' value={movie.vote_average * 10} text={movie.vote_average}
                                        styles={buildStyles({
                                            textSize: '36px'
                                        })}></CircularProgressbar>
                                </div>
                            </div>
                            <p>{movie.tagline}</p>
                            <div className={s.movie__overview}>
                                <h4 className={s.overview__title}>Overview</h4>
                                <p className={s.overview}>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.movie__wrapper_second}>
                        <div className={s.movie__images}>
                            <h3 className={s.movie__images_title}>Movies media</h3>
                            <Carousel
                                centered
                                slidesPerPage={3}
                                infinite
                                // autoPlay={2000}
                                animationSpeed={1000}>
                                {this.state.images.map(item =>
                                    <img className={s.movie__image} alt='movie img' src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}></img>

                                )}
                            </Carousel>
                        </div>
                        <div className={s.movie__cast}>
                            <h3 className={s.movie__cast_title}>Movies cast</h3>
                            <Carousel
                                slidesPerPage={10}
                                infinite
                                // autoPlay={2000}
                                animationSpeed={1000}>
                                {this.state.cast.map(item =>
                                    <div className={s.movie__actor}>
                                        {item.profile_path && <img alt='actor_photo' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} />}
                                        {!item.profile_path && <img src='https://via.placeholder.com/100x150' alt='noimg' />}
                                        <p className={s.actor__name}>{item.name}</p>
                                        <p className={s.actor__character}><strong>Character: </strong>{item.character}</p>
                                    </div>)}
                            </Carousel>
                        </div>

                        <Reviews movieId={movieId} />
                    </div >
                </div>
            </div >

        )
    }
}


export default connect(({ movies: { movie } }) => ({
    movie: movie,
}), { getMovie })(movieDetail);