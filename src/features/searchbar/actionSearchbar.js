import { CHANGE_SEARCH_FIELD } from '../../actionConstants';

export const setSearchField = (textInput) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: textInput
});
