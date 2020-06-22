import { LOAD_MOVIES } from './actions';

const initialState = {
    list: [],
    loaded: false
}

export default function movies(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES:
            return {
                ...state,
                loaded: true,
                list: action.payload
            }
        default:
            return state
    }
}