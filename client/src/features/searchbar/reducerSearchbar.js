import { CHANGE_LOCATION_ON_DISPLAY, CHANGE_CURRENT_NAV } from '../../actionConstants';

export const searchbarReducer = (state = {locationOnDisplay: ''}, action) => {
    switch(action.type) {
        case CHANGE_LOCATION_ON_DISPLAY: return Object.assign({}, state, { locationOnDisplay: action.payload });
        case CHANGE_CURRENT_NAV: return Object.assign({}, state, { currentNav: action.payload });
        default: return state;
    }
};