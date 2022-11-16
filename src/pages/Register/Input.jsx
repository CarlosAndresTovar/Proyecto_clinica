import React from "react";
import './Input.css'

const Inputregister = ({attribute}) => {
    return (
        <input id={attribute.id}
               name={attribute.name}
               placeholder={attribute.placeholder}
               type={attribute.type}/>
    )
}

export default Inputregister;