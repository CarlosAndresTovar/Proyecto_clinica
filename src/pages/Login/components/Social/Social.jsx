import React from "react";
import './Social.css'

const Social = ({ attribute }) => {
    return (
        <div>
            <a href={attribute.url}><img src={attribute.ruta} alt="logo" className="items-social"/></a>
        </div>
    )
}

export default Social;