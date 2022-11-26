import React from "react";
import './Options.css';
import citaMedica from "../../images/Options/citaMedica.svg"
import cuenta from "../../images/Options/cuenta.svg"
import ganador from "../../images/Options/ganador.svg"
import radiografia from "../../images/Options/radiografia.svg"
import sello from "../../images/Options/sello.svg"
import sincronizar from "../../images/Options/citaMedica.svg"

const Options = () => {
    return (
        <div className="main-options">
            <div className="options">
                <div className="options-column">
                    <div className="option">
                            <img src={ganador} alt="l" className="option-icon"/>
                        <div className="option-title">
                            <span>Certificados</span>
                        </div>
                    </div>
                    <div className="option">
                            <img src={citaMedica} alt="h"  className="option-icon"/>
                        <div className="option-title">
                            <span>Citas medicas</span>
                        </div>
                    </div>
                    <div className="option">
                            <img src={radiografia} alt="" className="option-icon"/>
                        <div className="option-title">
                            <span>Imagenes diagnosticas</span>
                        </div>
                    </div>
                </div>
                <div className="options-column">
                    <div className="option">
                            <img src={sello} alt="" className="option-icon"/>
                        <div className="option-title">
                            <span>Autorizaciones mipres</span>
                        </div>
                    </div>
                    <div className="option">
                            <img src={sincronizar} alt="" className="option-icon"/>
                        <div className="option-title">
                            <span>Sincronizacion de pacientes</span>
                        </div>
                    </div>
                    <div className="option">
                            <img src={cuenta} alt="" className="option-icon"/>
                        <div className="option-title">
                            <span>Consultar facturacion</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;