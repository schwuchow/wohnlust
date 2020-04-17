import React from 'react';
import './Button.scss';
import { useHistory } from "react-router-dom";

const Button = props => {
    const history = useHistory();

    const handleBtnClick = () => {
        if (props.path) history.push(props.path);
        // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
    }

    return (
        <button type="submit" className="btn btn__cta-btn" onClick={handleBtnClick}>
            {(props.action==='Search') ? <i className="material-icons">search</i>:props.action}
        </button>
    );
};

export default Button;