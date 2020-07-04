import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from './../app/movies/actions';
import { Link } from 'react-router-dom';
import './MovieDetails.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class movieDetail extends Component {
    state = {
        images: [],
        cast: [],
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
                this.setState({ cast: data.credits.cast.slice(0, 10) })
            })
    }


    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
        this.getMovieImg()
        this.getMovieCast()

    }


    render() {
        const { movie } = this.props
        return (
            <div>
                <div className='movie'>
                    <div className='movie__poster'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='img'></img>
                    </div>
                    <div className='movie__wrapper'>
                        <Carousel
                            centered
                            slidesPerPage={3}
                            infinite
                            autoPlay={2000}
                            animationSpeed={1000}>
                            {this.state.images.map(item =>
                                <img className='movie__image' alt='movie img' src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}></img>

                            )}
                        </Carousel>
                        <div className='movie__info'>
                            <h4 className="movie__title">{movie.original_title}</h4>
                            <p>{movie.overview}</p>
                            <Link className='movie__btn-back' to='/'>Back</Link>
                        </div>
                        <div className='movie__cast'>
                            {this.state.cast.map(item => <div className='movie__actor'>
                                <img alt='actor_photo' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}></img>
                                <p className='actor__name'>{item.name}</p>
                                <p className='actor__character'><strong>Character: </strong>{item.character}</p>
                            </div>)}

                        </div>
                    </div>

                </div >
            </div >
        )
    }
}


export default connect(({ movies: { movie } }) => ({
    movie: movie,
}), { getMovie })(movieDetail);