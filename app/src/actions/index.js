import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const fetchData = (days) => dispatch => {
    dispatch({ type: FETCHING_DATA_START});
    axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
        console.log(res.data);
        dispatch({ type: FETCHING_DATA_SUCCESS, payload: {data: res.data, days: days}});
    })
    .catch(err => {
        console.log(err);
    })
}