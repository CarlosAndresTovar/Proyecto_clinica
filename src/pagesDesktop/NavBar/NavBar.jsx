import React from "react";
import './NavBar.css';
import LogoBarra from '../Images/LogoBarra.png'

const BarraNavegacion = () => {
    return (
        <header>
                    <nav>
                        <div className="container-logo">
                            <img id="logobarra" src={LogoBarra} alt="logo" />
                        </div>                   
                    </nav>
                    <div className="buttonlogin">
                        <input type="text" placeholder="   Buscar" />
                        <a href="/home"><button>Inicio</button></a>
                        <a href="/home"><button>Historial</button></a>
                        <a href="/home"><button>Pacientes</button></a>
                        <a href="/home"><button>Llamadas</button></a>
                        <a href="/home"><button>Calendario</button></a>
                        <a href="/home"><button>Usuario</button></a>
                    </div> 
        </header>


    )

}
export default BarraNavegacion;

