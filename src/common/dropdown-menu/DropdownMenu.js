import React from 'react';
import './DropdownMenu.scss';
import { connect } from 'react-redux';
import { setLocationOnDisplay } from './actionDropdownMenu';

class DropdownMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = { dropdownClicked: false };
        this.dropdownMenu = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (!this.dropdownMenu.current.contains(event.target)) {
            this.setState({ dropdownClicked: false });
        }
    };

    toggleDropdownItems = () => {
        this.setState({ dropdownClicked: !this.state.dropdownClicked });
    }

    displayCurrentUnitAddress = () => {

        if (this.props.currentDisplay) {
            const {street, postalCode} = this.props.currentDisplay.location;

            return (
                <div>{street}<span>{postalCode}</span></div>
            )
        } else if (this.props.unitList){
            const {street, postalCode} = this.props.unitList[0].location;

            return (
                <div>{street}<span>{postalCode}</span></div>
            )
        }
    }

    renderDropDownSuggestions = () => {

        if (this.props.unitList) {
            const sameCityList = this.filterOtherLocationsInSameCity(this.props.unitList);

            if (sameCityList.length > 0) {
                return sameCityList.map((unit, i) => {

                    const {street, postalCode} = unit.location;

                    return (
                        <li key={i} onClick={() => this.selectThisAddress(unit)}>{street}<span>{postalCode}</span></li>
                    );
                })
            } else {
                return (
                    <li>No other locations available yet ＜(。_。)＞</li>
                );
            }
        } else {
            return;
        }
    }

    filterOtherLocationsInSameCity = (appartmentUnits) => {
        return appartmentUnits.filter(unit =>
            (unit.location.city === this.props.currentDisplay.location.city)
            &&
            (JSON.stringify(unit) !== JSON.stringify(this.props.currentDisplay))
        );
    }

    selectThisAddress = (city) => {
        this.props.setLocationOnDisplay(city);
    }

    render () {
        return (
            <ul className="dropdown-menu"
                style={this.state.dropdownClicked? {outline: "1px solid var(--c-light-grey-outline)"}: {}}
                ref={this.dropdownMenu}>
                <li href="#" className="dropdown-menu__current-select" onClick={this.toggleDropdownItems}>
                    {this.displayCurrentUnitAddress()}
                    <i className="arrow-down"></i>
                </li>
                <div style={this.state.dropdownClicked? {display:"block"}: {}} className="dropdown-menu__list">
                    {this.renderDropDownSuggestions()}
                </div>
            </ul>
        )
    }
}

export default connect(null, { setLocationOnDisplay })(DropdownMenu);