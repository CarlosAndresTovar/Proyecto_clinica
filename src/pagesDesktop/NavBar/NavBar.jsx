import React, { useState } from "react";
import './NavBar.css';
import LogoBarra from '../Images/LogoBarra.png'
import Perfil from "../components/Perfil";

const BarraNavegacion = () => {

    const [active,setActive] = useState('')

    const ToggleActive = () => {
        if(active === ''){
            setActive(' active')
        }else{
            setActive('')
        }
    }

    return (
        <header>
                    <nav>
                        <div className="container-logo">
                            <img id="logobarra" src={LogoBarra} alt="logo" />
                        </div>                   
                    </nav>
                    <div className="buttonlogin">
                        <input type="text" placeholder="Buscar" className="search"/>
                        <a href="/home"><button>Inicio</button></a>
                        <a href="/home"><button>Historial</button></a>
                        <a href="/home"><button>Pacientes</button></a>
                        <a href="/home"><button>Llamadas</button></a>
                        <a href="/home"><button>Calendario</button></a>
                        <a href="/#" onClick={ToggleActive}><button>Usuario</button></a>
                    </div>
                    <Perfil active={active}></Perfil>
        </header>


    )

}
export default BarraNavegacion;

