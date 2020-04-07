import React from 'react';
import imgAppartment from '../../img/appartment.svg';
import './Appartment.scss';
import { connect } from 'react-redux';

class Appartment extends React.Component {

    showProps = appartments => {
        if (appartments) {
            let { location, pricePerMonth, qm, orientation} = appartments[0];
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
            <div className="appartment">
                <img src={imgAppartment} alt="Appartment" />
                {this.showProps(this.props.appartments)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return { appartments: state.listAppartments.appartments }
};

export default connect(mapStateToProps)(Appartment);