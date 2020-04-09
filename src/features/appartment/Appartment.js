import React from 'react';
import imgAppartment from '../../img/appartment.svg';
import imgRoofAppartment from '../../img/appartment_roof.svg';
import './Appartment.scss';
import { connect } from 'react-redux';
import DropdownMenu from '../../common/dropdown-menu/DropdownMenu';

class Appartment extends React.Component {

    showProps = ({appartmentUnits, cityOnDisplay}) => {
        if (cityOnDisplay) {
            console.log(cityOnDisplay);
            // let { location, pricePerMonth, qm, orientation} = appartmentUnits[0];
            // console.log(location, pricePerMonth, qm, orientation);

            // return (
            //     <div>
            //         <div>Location: {location}</div>
            //         <div>Price: {pricePerMonth}</div>
            //         <div>qm: {qm}</div>
            //         <div>Orientation: {orientation}</div>
            //     </div>
            // )
        }
    }

    render() {
        return (
            <div className="appartment">
                <DropdownMenu />
                <label>Room</label>
                <img src={imgAppartment} className="appartment__room" alt="Appartment" />
                <img src={imgRoofAppartment} className="appartment__roof" alt="Appartment" />
                {this.showProps(this.props)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       appartmentUnits: state.appReducer.appartmentUnits,
       cityOnDisplay: state.searchbarReducer.cityOnDisplay
    }
};

export default connect(mapStateToProps)(Appartment);