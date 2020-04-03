import React from 'react';
import './SearchBar.scss';
import Button from '../../common/button/Button';
import { setSearchField } from './actionSearchbar';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

    searchValues = (event) => {
        this.props.setSearchField(event.target.value);
        let {searchField, appartments} = this.props;
        this.filterSuggestions(searchField, appartments);
    };

    filterSuggestions = (searchValue, appartments) => {
        if (searchValue !== undefined) {
            const filteredCities = appartments.filter(app => app.location.toLowerCase().includes(searchValue.toLowerCase()));
            console.log(filteredCities);
            this.renderSuggestions(filteredCities);
        }
    };

    renderSuggestions = () => {

    };

    render() {
        return (
            <div className="searchbar">
                <form >
                    <input 
                        type="text" 
                        placeholder="In"
                        onChange={this.searchValues}
                    ></input>
                    {this.renderSuggestions()}
                    <Button action="Search" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        searchField: state.searchAppartment.searchField,
        appartments: state.listAppartments.appartments
    };
}

export default connect(mapStateToProps, { setSearchField })(SearchBar);