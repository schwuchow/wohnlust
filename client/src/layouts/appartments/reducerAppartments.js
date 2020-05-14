import { CHANGE_LOCATION_ON_DISPLAY } from '../../actionConstants';

export const appartmentsReducer = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_LOCATION_ON_DISPLAY: return Object.assign({}, state, { locationOnDisplay: action.payload })
        default: return state;
    }
};