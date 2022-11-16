import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <div className="toBack">
                <div className="iconToBack">
                    <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a>
                </div>
                <div className="titleToBack">
                    <a href="/">Volver</a>
                </div>
            </div>
        </header>
    )
}

export default Header;