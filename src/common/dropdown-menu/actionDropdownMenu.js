import { CHANGE_CITY_ON_DISPLAY } from '../../actionConstants';

export const setCityOnDisplay = (city) => ({
    type: CHANGE_CITY_ON_DISPLAY,
    payload: city
});