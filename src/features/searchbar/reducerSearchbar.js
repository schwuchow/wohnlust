import { CHANGE_SEARCH_FIELD, CHANGE_CITY_ON_DISPLAY, CHANGE_CURRENT_NAV } from '../../actionConstants';

export const searchbarReducer = (state = {searchField: '', cityOnDisplay: ''}, action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: return Object.assign({}, state, { searchField: action.payload });
        case CHANGE_CITY_ON_DISPLAY: return Object.assign({}, state, { cityOnDisplay: action.payload });
        case CHANGE_CURRENT_NAV: return Object.assign({}, state, { currentNav: action.payload });
        default: return state;
    }
};