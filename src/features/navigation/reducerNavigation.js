import { CHANGE_CURRENT_NAV } from '../../actionConstants';

export const navigationReducer = (state={}, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_NAV: return Object.assign({}, state, { currentNav: action.payload });
        default: return state;
    }
};