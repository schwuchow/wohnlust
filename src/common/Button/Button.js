import React from 'react';
import './Button.scss';

const Button = props => {
    return (
    <button type="submit" className="btn btn__cta-btn">{props.action}</button>
    );
};

export default Button;