import axios from 'axios';

export const FETCHING_IMAGES_START = 'FETCHING_IMAGES_START';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';

export const fetchAllImages = () => dispatch => {
    dispatch({ type: FETCHING_IMAGES_START });
    axios
        .get('https://api.spacexdata.com/v4/launches/latest')
        .then(res => {
                dispatch({ type: FETCH_IMAGES_SUCCESS, payload: res.data.links.flickr.original})
            }
        )
        .catch(error => {
            console.log('fetch is unsuccessful: ', error)
        })
}
