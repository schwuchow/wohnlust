import { combineReducers } from "redux";
import { searchbarReducer } from './features/searchbar/reducerSearchbar';
import { appReducer } from './app/reducerApp';
import { appartmentsReducer } from './layouts/appartments/reducerAppartments';

const rootReducer = combineReducers({
    searchbarReducer,
    appReducer,
    appartmentsReducer
});

export default rootReducer;