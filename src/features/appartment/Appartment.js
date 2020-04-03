import React from 'react';
import imgAppartment from '../../img/appartment.png';
import './Appartment.scss';
import { connect } from 'react-redux';

class Appartment extends React.Component {

    showProps() {
        if (this.props.appartments) {
            let { location, pricePerMonth, qm, orientation} = this.props.appartments[0];
            console.log(location, pricePerMonth, qm, orientation);

            return (
                <div>
                    <div>Location: {location}</div>
                    <div>Price: {pricePerMonth}</div>
                    <div>qm: {qm}</div>
                    <div>Orientation: {orientation}</div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <img src={imgAppartment} alt="Appartment" />
                {this.showProps()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return { appartments: state.listAppartments.appartments }
};

export default connect(mapStateToProps)(Appartment);