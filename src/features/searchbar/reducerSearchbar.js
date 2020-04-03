import { CHANGE_SEARCH_FIELD } from '../../actionConstants';

export const searchAppartment = (state = '', action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: return Object.assign({}, state, { searchField: action.payload });
        default: return state;
    }
};