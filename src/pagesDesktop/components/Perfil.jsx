import React, { useState } from "react";
import { useEffect } from "react";
import './Perfil.css'

const Perfil = (props) => {

    const [active, setActive] = useState('')

    useEffect(() => {
        setActive(props.active)
    },[props.active]);

    return (
        <div className={"perfil"+active}>
            <div className="type">
                <div className="patient">Paciente</div>
                <div className="familiar">Familiar</div>
            </div>
            <div className="option">
                <img src="./013-disabled-5.png" alt="config" />
                <span>Configuración</span>
            </div>
            <div className="option">
                <img src="./027-prothesis.png" alt="share" />
                <span>Compartir</span>
            </div>
            <div className="option">
                <img src="./026-dog.png" alt="help" />
                <span>Ayuda</span>
            </div>
            <div className="exit">
                <span>Salir</span>
            </div>
        </div>
    )
}

export default Perfil;