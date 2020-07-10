import {
    LOAD_MOVIES_PENDING,
    LOAD_MOVIES_FULFILLED,
    LOAD_MOVIES_REJECTED,
    GET_MOVIE
} from './actions';
import { SEARCH_MOVIES } from './actions';



const initialState = {
    list: {},
    loaded: false,
    loading: false,
    error: null,
    total: 0,
    movie: {},
    page: 0,
    isSearch: false,
}

// obj = {
//     1: [],
//     2: [],
// }
// Object.values(obj).reduce((acc, item) => { acc.push(...item): return acc; }, []);

function movies(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_FULFILLED:
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.page]: action.payload.items
                },
                total: action.payload.total,
                page: action.payload.page,
                loading: false,
                isSearch: false,
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
                list: {
                    ...state.list,
                    [action.payload.page]: action.payload.items
                },
                total: action.payload.total,
                loading: false,
                isSearch: true,
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