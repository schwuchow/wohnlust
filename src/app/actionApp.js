import { appartmentsURL } from '../apis/api_constants';
import { FETCH_APPARTMENTS } from '../actionConstants';

export const fetchAppartments = () => async dispatch => {

    try {
        const response = await fetch(appartmentsURL);
        const data = await response.json();
        dispatch({ type: FETCH_APPARTMENTS, payload: data });
    } catch(error) {
        console.log(error);
    }
};