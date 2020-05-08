import { CHANGE_SEARCH_FIELD, CHANGE_LOCATION_ON_DISPLAY, CHANGE_CURRENT_NAV } from '../../actionConstants';

export const setSearchField = (textInput) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: textInput
});

export const setLocationOnDisplay = (city) => ({
    type: CHANGE_LOCATION_ON_DISPLAY,
    payload: city
});

export const setCurrentNav = (curNav) => ({
    type: CHANGE_CURRENT_NAV,
    payload: curNav
})