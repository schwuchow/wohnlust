import React from 'react';
import imgAppartment from '../../img/appartment.svg';
import imgRoofAppartment from '../../img/appartment_roof.svg';
import './Appartment.scss';
import plus from '../../img/plus.svg';

class Appartment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        }
        this.appartment = React.createRef();
    }

    showProps = () => {
        let { baseRent, qm, orientation, deposit, availableFrom, details} = this.props.appartment;

        return (
            <div className="appartment__details" style={this.state.showDetails? {display: "block"}: {}}>
                <div>Price: {baseRent} €</div>
                <div>qm: {qm}</div>
                <div>Available from: {(new Date(availableFrom)).toDateString()}</div>
                <div>Deposit: {deposit} €</div>
                <div>Orientation: {orientation}</div>
                <ul>Details:
                    {details.map((detail, i) => {
                        return <li key={i}><img src={plus} alt=""></img> {detail}</li>
                    })}
                </ul>
            </div>
        )
    }

    handleClick = (orientation) => {
        if (!this.state.showDetails) {
            this.props.setOrientationInParent(`anim-${orientation}`);
        } else {
            this.props.setOrientationInParent('');
        }

        this.setState({showDetails: !this.state.showDetails});
    }

    mapOrientationToRoomLetter = () => {
        switch(this.props.orientation) {
            case "north": return 'A';
            case "east": return 'B';
            case "south": return 'C';
            case "west": return 'D';
            default: return 'X';
        }
    }

    render() {
        const roomLetter = this.mapOrientationToRoomLetter();

        return (
            <div
                className={`appartment ${'appartment--' + this.props.orientation} ${this.state.showDetails? `anim-${this.props.orientation}`: ''}`}
                onClick={() => this.handleClick(this.props.orientation)}
                ref={this.appartment}>
                <img src={imgAppartment} className="appartment__room" alt="Appartment" />
                <img src={imgRoofAppartment} className="appartment__roof" alt="Appartment"/>
                <label className="appartment__room-label">Room {roomLetter}</label>
                {this.showProps()}
            </div>
        )
    }
}

export default Appartment;