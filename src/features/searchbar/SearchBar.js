import React from 'react';
import './SearchBar.scss';
import Button from '../../common/button/Button';
import { setSearchField, setCityOnDisplay } from './actionSearchbar';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filteredCities: [],
            path: '/appartments'
         };
    }

    searchValues = (event) => {
        this.props.setSearchField(event.target.value);
    };

    componentDidUpdate = (prevProps) => {
        if ((prevProps.searchField !== this.props.searchField)
            && this.props.appartmentUnits !== undefined) {
            let {searchField, appartmentUnits} = this.props;
            this.filterSuggestions(searchField, appartmentUnits);
        }
    }

    filterSuggestions = (searchValue, appartmentUnits) => {
        if (searchValue !== undefined && appartmentUnits !== undefined) {
            const filteredCities = appartmentUnits.filter(app => {
                return app.location[0].city.toLowerCase().includes(searchValue.toLowerCase())});
            this.setState({ filteredCities });
        } else {
            return [];
        }
    };

    handleClickedCity = (city) => {
        this.saveClickedCity(city);
        this.redirectToAppartments();
    }

    saveClickedCity = (city) => {
        this.props.setCityOnDisplay(city);
    }

    redirectToAppartments = () => {
        this.props.history.push(this.state.path)
    }

    renderSuggestions = (cities) => {
        if (cities !== undefined) {
            const uniqueCities = cities.filter((city, i, cityArr) => {
                if (i >= 5) return true;
                return cityArr.map(c => c.location[0].city).indexOf(city.location[0].city) === i;
            });

            return (
                uniqueCities.map((city, i) =>
                    <span
                        style={{top: `${40*(i+1)}px`}}
                        key={city._id}
                        className="auto-suggest"
                        onClick={() => this.handleClickedCity(city)}>
                            {city.location[0].city}
                    </span>
                )
            );
        }
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
                    {this.renderSuggestions(this.state.filteredCities)}
                    <Button action="Search" path={this.state.path} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchbarReducer.searchField,
        appartmentUnits: state.appReducer.appartmentUnits
    };
}

export default withRouter(connect(mapStateToProps, { setSearchField, setCityOnDisplay })(SearchBar));