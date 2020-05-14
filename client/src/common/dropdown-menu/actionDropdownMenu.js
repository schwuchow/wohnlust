import { CHANGE_LOCATION_ON_DISPLAY } from '../../actionConstants';

export const setLocationOnDisplay = (city) => ({
    type: CHANGE_LOCATION_ON_DISPLAY,
    payload: city
});