import React from "react";
import './History.css';
import NavBar from '../NavBar/NavBar'
import FooterDesktop from "../Footer/Footer";
import Union from "../Images/Union.svg";
import Union2 from "../Images/Union2.svg";
import { useState } from "react";

const ServicesDesktop = () => {

    const [evolutions, setEvolutions] = useState(false);

    const updateEvolution = () => {
        if (!evolutions) {
            setEvolutions(true)
        }else {
            setEvolutions(false)
        }
    }

    return(
        <>
            <NavBar />
            <div className="container-buttons">
                <div className="container-buttons-internal">
                    <span className="principal-title">Historial Clínico</span>                
                    <div className="button-box">
                        <div className="evolutions">
                            <h1>Evoluciones</h1>
                            {!evolutions &&
                                <i onClick={updateEvolution}><img src={Union2} alt="Union2"></img></i>
                            }
                            {evolutions &&
                                <i onClick={updateEvolution}><img src={Union} alt="Union"></img></i>
                            }
                        </div>
                    </div>
                    {evolutions &&
                        <div className="desplegar-historia">
                            <p>Ultima evolución</p>
                            <p>Fecha: 18/09/2022</p>
                            <p>Ubicación: Ala este piso 4 cama 15-C</p>
                            <p>Medico tratante: Dr Benito Perez Psiquiatra</p>
                            <p>Cuenta con los siguientes diagnósticos</p>
                            <p>1. Trastorno mental y de comportamiento</p>
                            <p>Asociado a consumo de sustancias no especificante</p>
                            <p>metanfetaminas</p>
                        </div>
                    }
                    <div className="button-box2">
                        <div className="evolutions">
                            <h1>Autorizaciones medicas</h1>
                            <i><img src={Union2} alt="Union2"></img></i>
                        </div>
                    </div>                   
                </div>
                <div className="line-division">
                    
                </div>
                <div className="container-buttons-internal2">
                    <div className="button-box">
                        <div className="evolutions">
                            <h1>Historial medicamentos</h1>
                            <i><img src={Union2} alt="Union2"></img></i>
                        </div>
                    </div>
                    <div className="button-box2">
                        <div className="evolutions">
                            <h1>Imagenes diagnosticas</h1>
                            <i><img src={Union2} alt="Union2"></img></i>
                        </div>
                    </div>                   
                </div>           
            </div>
            <FooterDesktop />              
        </>
    )
}
export default ServicesDesktop;
