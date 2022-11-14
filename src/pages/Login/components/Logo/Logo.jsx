import React from "react";
import './Logo.css'
import logo from "./Logo.svg";

const Logo = () => {
    return (
        <div className="section-logo">
            <img src={logo} className="App-logo" alt="Logo" />
        </div>
    )
}

export default Logo; 