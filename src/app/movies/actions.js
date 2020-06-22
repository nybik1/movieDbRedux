export const LOAD_MOVIES = 'movies/LOAD_MOVIES';

export const loadMovies = ({ query = 'all' } = {}) => (dispatch, getState) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4fbb4691e328ec322d3358761a861113&query=${query}`)
        .then(res => res.json())
        .then((res) => {
            dispatch({ type: LOAD_MOVIES, payload: res.results })
        })
}