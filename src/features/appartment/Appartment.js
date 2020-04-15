import React from 'react';
import imgAppartment from '../../img/appartment.svg';
import imgRoofAppartment from '../../img/appartment_roof.svg';
import './Appartment.scss';

class Appartment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        }
    }

    showProps = () => {

        console.log(this.props);
        let { baseRent, qm, orientation, deposit, availableFrom, details} = this.props.appartment;
console.log(this.props);
// TODO DETAILS ARRAY
        return (
            <div className="appartment__details" style={this.state.showDetails? {display: "block"}: {}}>
                <div>Price: {baseRent}</div>
                <div>qm: {qm}</div>
                <div>Available from: {availableFrom}</div>
                <div>Deposit: {deposit}</div>
                <div>Orientation: {orientation}</div>
                <div>Details: {details}</div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        return (
            <div className={this.props.styling}>
                <label>Room</label>
                <img src={imgAppartment} className="appartment__room" alt="Appartment" />
                <img src={imgRoofAppartment} className="appartment__roof" alt="Appartment" onClick={this.handleClick}/>
                {this.showProps()}
            </div>
        )
    }
}

export default Appartment;