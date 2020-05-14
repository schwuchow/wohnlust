import { CHANGE_CURRENT_NAV } from '../../actionConstants';

export const setCurrentNav = (curNav) => ({
    type: CHANGE_CURRENT_NAV,
    payload: curNav
});