import React from "react";
import './Input.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Input_login = ({attribute, handleChange}) => {
    return (
        <div className="section-user">
            <i><FontAwesomeIcon icon={attribute.icon} /></i>
            <input className="Input-login"
                   id={attribute.id}
                   name={attribute.name}
                   placeholder={attribute.placeholder}
                   type={attribute.type}
                   onChange={ (e) => handleChange(e.target.name, e.target.value)}
            />
        </div>
    )
}

export default Input_login;