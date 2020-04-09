import { combineReducers } from "redux";
import { searchbarReducer } from './features/searchbar/reducerSearchbar';
import { appReducer } from './app/reducerApp';

const rootReducer = combineReducers({
    searchbarReducer,
    appReducer
});

export default rootReducer;