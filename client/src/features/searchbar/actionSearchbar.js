import { CHANGE_LOCATION_ON_DISPLAY, CHANGE_CURRENT_NAV } from '../../actionConstants';

export const setLocationOnDisplay = (city) => ({
    type: CHANGE_LOCATION_ON_DISPLAY,
    payload: city
});

export const setCurrentNav = (curNav) => ({
    type: CHANGE_CURRENT_NAV,
    payload: curNav
})