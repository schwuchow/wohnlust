import { combineReducers } from "redux";
import { searchAppartment } from './features/searchbar/reducerSearchbar';

/*
    STATE
    state = [
        appartments: {
            id: 1,
            location: Köln,
            name: Appartment,
            price: 34€,
            qm: 50,
            details: {
                description: Something,
                location: south,
                balcony: yes
            }
        },
        searchField: 'Köln
    ]

*/

const rootReducer = combineReducers({
    // reducers go here
    searchAppartment
});

export default rootReducer;