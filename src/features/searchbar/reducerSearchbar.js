import { CHANGE_SEARCH_FIELD } from '../../actionConstants';

// Shouldn't suggestions be in state, instead of searchField???
const initialState = {
    searchField: ''
}

export const searchAppartment = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: break;
        default: return state;
    }
};