import { combineReducers } from "redux";
import { searchbarReducer } from './features/searchbar/reducerSearchbar';
import { appReducer } from './app/reducerApp';
import { appartmentsReducer } from './layouts/appartments/reducerAppartments';
import { dropdownMenuReducer } from './common/dropdown-menu/reducerDropdownMenu';

const rootReducer = combineReducers({
    searchbarReducer,
    appReducer,
    appartmentsReducer,
    dropdownMenuReducer
});

export default rootReducer;