import React from "react";
import './Options.css'

const Options = () => {
    return (
        <div className="main-options">
            <div className="options">
                <div className="options-column">
                    <div className="option">
                        <div className="option-icon">
                            <img src="C:\Users\nauto\Downloads\proyecto_clinica-main\src\pagesDesktop\Options\balance.png" alt="l" />
                        </div>
                        <div className="option-title">
                            <span>Certificados</span>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="balance.png" alt="h" />
                        </div>
                        <div className="option-title">
                            <span>Citas medicas</span>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="balance.png" alt="" />
                        </div>
                        <div className="option-title">
                            <span>Imagenes diagnosticas</span>
                        </div>
                    </div>
                </div>
                <div className="options-column">
                    <div className="option">
                        <div className="option-icon">
                            <img src="" alt="" />
                        </div>
                        <div className="option-title">
                            <span>Autorizaciones mipres</span>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="" alt="" />
                        </div>
                        <div className="option-title">
                            <span>Sincronizacion de pacientes</span>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="" alt="" />
                        </div>
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