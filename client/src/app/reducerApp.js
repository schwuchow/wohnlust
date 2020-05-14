import { FETCH_APPARTMENTUNITS } from '../actionConstants';

export const appReducer = (state={}, action) => {
    switch(action.type) {
        case FETCH_APPARTMENTUNITS:
            return Object.assign({}, state, { appartmentUnits: action.payload });
        default: 
            return state;
    }
};