import React from "react";
import Header from "../Register/Header";
import "./Calls.css";
import Logocalls from "./logocalls.svg";

const Calls  = () => {
    return (
        <>
            <Header />
            <div className="calls">
                <div className="logocalls">
                    <img src={Logocalls} alt="Logocalls" />
                </div>
                <div className="namepaciente">
                    <span>Paciente</span>
                </div>
                <div className="parrafopaciente">
                    <p>Es necesario tener acceso a un micrófono y una cámara para
                        unirse a la video-llamada.
                    </p>
                </div>
                <div className="botonespaciente">
                    <button>Permitir</button>
                    <button>Unirse</button>
                </div>
            </div>
        </>
    )
}

export default Calls;