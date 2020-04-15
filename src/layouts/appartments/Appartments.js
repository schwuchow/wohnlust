import React from 'react';
import Appartment from '../../features/appartment/Appartment';
import DropdownMenu from '../../common/dropdown-menu/DropdownMenu';
import { connect } from 'react-redux';
import '../layouts.scss';
import { setCityOnDisplay } from './actionAppartments';

class Appartments extends React.Component {

    // TO FIX
    componentDidUpdate = () => {

        if (this.props.appartmentUnits) {
            this.props.setCityOnDisplay(this.props.appartmentUnits[0]);
        }
    }

    render() {

        if (this.props.cityOnDisplay) {
            const appartments= this.props.cityOnDisplay.appartments;

            return (
                <div className="layout layout__appartments">
                    <DropdownMenu currentDisplay={this.props.cityOnDisplay} unitList={this.props.appartmentUnits}/>
                    <Appartment appartment={appartments[0]} styling="appartment appartment__west" />
                    <Appartment appartment={appartments[1]} styling="appartment appartment__north"/>
                    <Appartment appartment={appartments[2]} styling="appartment appartment__south"/>
                    <Appartment appartment={appartments[3]} styling="appartment appartment__east"/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        appartmentUnits: state.appReducer.appartmentUnits,
        cityOnDisplay: state.appartmentsReducer.cityOnDisplay
     }
 };

 export default connect(mapStateToProps, { setCityOnDisplay })(Appartments);