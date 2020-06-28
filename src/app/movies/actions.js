
import axios from 'axios';
export const LOAD_MOVIES_PENDING = 'movies/LOAD_MOVIES_PENDING';
export const LOAD_MOVIES_FULFILLED = 'movies/LOAD_MOVIES_FULFILLED';
export const LOAD_MOVIES_REJECTED = 'movies/LOAD_MOVIES_REJECTED';
export const SEARCH_MOVIES = 'movies/SEARCH_MOVIES';
export const MOVIE_DETAILS = 'movies/MOVIE_DETAILS';



export const loadMovies = ({ page } = {}) => (dispatch) => {
    dispatch({ type: LOAD_MOVIES_PENDING })
    axios(`https://api.themoviedb.org/3/discover/movie?api_key=4fbb4691e328ec322d3358761a861113&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
    `)
        .then(({ data }) => {
            dispatch({
                type: LOAD_MOVIES_FULFILLED, payload: {
                    total: data.total_results,
                    items: data.results
                }
            })
        })
        .catch((res) => {
            dispatch({ type: LOAD_MOVIES_REJECTED, payload: res.message })
        })
}


export const searchMovies = ({ query = 'avengers', page } = {}) => (dispatch) => {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=4fbb4691e328ec322d3358761a861113&page=${page}&query=${query}`)
        .then(({ data }) => {
            dispatch({
                type: SEARCH_MOVIES, payload: {
                    total: data.total_results,
                    items: data.results
                }
            })
        })
}





