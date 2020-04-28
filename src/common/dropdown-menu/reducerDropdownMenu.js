import { CHANGE_CITY_ON_DISPLAY } from '../../actionConstants';

export const dropdownMenuReducer = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_CITY_ON_DISPLAY: return Object.assign({}, state, { cityOnDisplay: action.payload })
        default: return state;
    }
};