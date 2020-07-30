import { FETCHING_IMAGES_START, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR } from '../actions'

const initialState = {
    images: [],
    isFetching: false,
    error: ''
}

export const imageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_IMAGES_START: 
            return {
                ...state,
                isFetching: true
            }
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state, 
                isFetching: false, 
                images: action.payload,
                error: ''
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state, 
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}