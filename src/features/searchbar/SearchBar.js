import React from 'react';
import CallToAction from '../../common/Button/CallToAction';
import './SearchBar.scss';

class SearchBar extends React.Component {

    cities = ['Hamburg', 'Köln', 'München', 'Mannheim'];

    searchValues = (event) => {
        this.filterSuggestions(event.target.value);
    };

    filterSuggestions = (searchValue) => {
        const filteredCities = this.cities.filter(city => city.startsWith(searchValue.toUpperCase()));


    };

    renderSuggestions = [
        <span>First City</span>,
        <span>Second City</span>
    ];

    render() {
        return (
            <div className="searchbar">
                <form >
                    <input 
                        type="text" 
                        placeholder="In"
                        onChange={this.searchValues}
                    ></input>
                    {this.renderSuggestions}
                    <CallToAction action="Search" />
                </form>
            </div>
        );
    }
}

export default SearchBar;