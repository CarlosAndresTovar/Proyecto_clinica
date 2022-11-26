import React, { useState } from "react";
import './NavBar.css';
import LogoBarra from '../Images/LogoBarra.png'
import ConfiguracionesDesktop from "../Images/configuraciones.svg";
import CompartirDesktop from "../Images/compartir.svg";
import Ayudadesktop from "../Images/ayuda.svg";

const BarraNavegacion = () => {

    const [desplegard,setDesplegard] = useState(false)

    const ToggleActive = () => {
        if(!desplegard){
            setDesplegard(true)
        }else{
            setDesplegard(false)
        }
    }

    const clearLocalStorageDesktop = () => {
        localStorage.clear()
    }

    return (
        <>
            <header>
                        <nav>
                            <div className="container-logo">
                                <img id="logobarra" src={LogoBarra} alt="logo" />
                            </div>                   
                        </nav>
                        <div className="buttonlogin">
                            <input type="text" placeholder="Buscar" className="search"/>
                            <a href="/home"><button>Inicio</button></a>
                            <a href="/medicalhistory"><button>Historial</button></a>
                            <a href="/clinicalstatus"><button>Pacientes</button></a>
                            <a href="/calls"><button>Llamadas</button></a>
                            <a href="/home"><button>Calendario</button></a>
                            <button onClick={ToggleActive}>Wilson Calvo</button>
                        </div>
            </header>
            {desplegard &&
                <div className="Desplegar-perfil">
                    <div className="sections-perfil">
                        <a href="/home"><img src={ConfiguracionesDesktop} alt="ConfiguracionesDesktop"></img></a>
                        <a href="/home"><h3>Configuraciones</h3></a>
                    </div>
                    <div className="sections-perfil">
                        <a href="/home"><img src={CompartirDesktop} alt="CompartirDesktop"></img></a>
                        <a href="/home"><h3>Compartir</h3></a>
                    </div>
                    <div className="sections-perfil">
                        <a href="/home"><img src={Ayudadesktop} alt="Ayudadesktop"></img></a>
                        <a href="/home"><h3>Ayuda</h3></a>
                    </div>
                    <div className="salir-desktop">
                        <button><a onClick={clearLocalStorageDesktop} href="/home">Salir</a></button>
                    </div>
                </div>
            }
        </>


    )

}
export default BarraNavegacion;

