import { FETCH_APPARTMENTS } from '../actionConstants';

export const listAppartments = (state={}, action) => {
    switch(action.type) {
        case FETCH_APPARTMENTS:
            return Object.assign({}, state, { appartments: action.payload });
        default: 
            return state;
    }
};