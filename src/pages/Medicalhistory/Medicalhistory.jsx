import React from "react";
import { useState } from "react";
import Header from "../Register/Header";
import "./Medicalhistory.css";
import Union2 from "./Union2.svg";
import Union from "./Union.svg";

const Medicalhistory = () => {

    const [evolutions, setEvolutions] = useState(false);

    const updateEvolution = () => {
        if (!evolutions) {
            setEvolutions(true)
        }else {
            setEvolutions(false)
        }
    }
    
    return (
        <>
            <Header />
            <div className="medicalhistory">
                <div className="evolutions">
                    <div className="titleevolution">
                        <h1>Evoluciones</h1>
                    </div>
                    <div className="imageevolution">
                        {!evolutions &&
                            <i onClick={updateEvolution}><img src={Union2} alt="Union2"></img></i>
                        }
                        {evolutions &&
                            <i onClick={updateEvolution}><img src={Union} alt="Union"></img></i>
                        }
                    </div>
                </div>
                {evolutions &&
                    <div className="desplegable">
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
                <div className="medical-authorizations">
                    <div className="titlemedical-authorizations">
                        <h1>Autorizaciones medicas</h1>
                    </div>
                    <div className="imagemedical-authorizations">
                        <i><img src={Union2} alt="Union2"></img></i>
                    </div>
                </div>
                <div className="medication-history">
                    <div className="titlemedication-history">
                        <h1>Historial de medicamentos</h1>
                    </div>
                    <div className="imagemedication-history">
                        <i><img src={Union2} alt="Union2"></img></i>
                    </div>
                </div>
                <div className="diagnostic-imaging">
                    <div className="titlediagnostic-imaging">
                        <h1>Imágenes diagnosticas</h1>
                    </div>
                    <div className="imagediagnostic-imaging">
                        <i><img src={Union2} alt="Union2"></img></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medicalhistory;