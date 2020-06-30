import {
    LOAD_MOVIES_PENDING,
    LOAD_MOVIES_FULFILLED,
    LOAD_MOVIES_REJECTED,
    GET_MOVIE
} from './actions';
import { SEARCH_MOVIES } from './actions';



const initialState = {
    list: [],
    loaded: false,
    loading: false,
    error: null,
    total: 0,
    movie: {}
}

function movies(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_FULFILLED:
            return {
                ...state,
                list: action.payload.items,
                total: action.payload.total,
                loading: false,
            }
        case LOAD_MOVIES_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case LOAD_MOVIES_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload,

            }
        case SEARCH_MOVIES:
            return {
                ...state,
                list: action.payload.items,
                total: action.payload.total,
                loading: false,
            }
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}

export default movies;