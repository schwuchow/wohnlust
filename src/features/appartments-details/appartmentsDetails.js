import React from 'react';
import './appartmentsDetails.scss';

class AppartmentsDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="appartments-details">
                <h1>Appartment Properties</h1>
                <div>Year Of Construction: {this.props.appartmentUnit.yearOFConstruction}</div>
                <div>Floor: {this.props.appartmentUnit.floor}</div>
                <ul><h2>Services</h2>
                    { this.props.appartmentUnit.services.map((service, i) => {
                        return <li key={i}>- {service}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default AppartmentsDetails;