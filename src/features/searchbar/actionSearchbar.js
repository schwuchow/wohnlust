import { CHANGE_SEARCH_FIELD, CHANGE_CITY_ON_DISPLAY } from '../../actionConstants';

export const setSearchField = (textInput) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: textInput
});

export const setCityOnDisplay = (city) => ({
    type: CHANGE_CITY_ON_DISPLAY,
    payload: city
});
