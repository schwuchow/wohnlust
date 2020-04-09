import { CHANGE_SEARCH_FIELD, CHANGE_CITY_ON_DISPLAY } from '../../actionConstants';

export const searchbarReducer = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: return Object.assign({}, state, { searchField: action.payload });
        case CHANGE_CITY_ON_DISPLAY: return Object.assign({}, state, { cityOnDisplay: action.payload })
        default: return state;
    }
};