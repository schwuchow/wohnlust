import React from 'react';
import './appartmentsDetails.scss';
import plus from '../../img/plus.svg';

class AppartmentsDetails extends React.Component {

    render = () => {
        return (
            <div className={this.props.animDetails? "appartments-details anim-details": "appartments-details"} onAnimationEnd={() => this.props.resetAnim()}>
                <h1>Appartment Properties</h1>
                <div>Year Of Construction: {this.props.appartmentUnit.yearOFConstruction}</div>
                <div>Floor: {this.props.appartmentUnit.floor}</div>
                <ul><h2>Services</h2>
                    { this.props.appartmentUnit.services.map((service, i) => {
                        return <li key={i}><img src={plus} alt=""></img> {service}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default AppartmentsDetails;