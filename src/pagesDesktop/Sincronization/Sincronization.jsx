import React from "react";
import Notifications from "../components/Notifications";
import Perfil from "../components/Perfil"
import './Sincronization.css'

const Sincronization = () => {
    return (
        <div className="Sincronization">
            <input type={'text'} name='code' className="input" placeholder="codigo paciente"/>
            <input type="submit" value={'Validar'} className="submit" />
        </div>
    )
}

export default Sincronization;