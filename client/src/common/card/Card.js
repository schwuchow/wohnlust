import React from 'react';
import './Card.scss';

const Card = ({title, description, picture}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={picture} alt=""></img>
            <p>{description}</p>
        </div>
    )
};

export default Card;