import { appartmentUnitsURL } from '../apis/api_constants';
import { FETCH_APPARTMENTUNITS } from '../actionConstants';

export const fetchAppartmentUnits = () => async dispatch => {

    try {
        const response = await fetch(appartmentUnitsURL);
        const data = await response.json();
        dispatch({ type: FETCH_APPARTMENTUNITS, payload: data });
    } catch(error) {
        console.log(error);
    }
};