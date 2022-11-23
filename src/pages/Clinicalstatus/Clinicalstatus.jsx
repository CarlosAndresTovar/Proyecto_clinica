import React from "react";
import Header from "../Register/Header";
import "./Clinicalstatus.css";
import Bloodpressure from "./bloodpressure.svg";
import Heartrate from "./heartrate.svg";
import Temperature from "./temperature.svg";
import Breathing from "./breathing.svg";
import Glucoce from "./glucose.svg";
import Strain from "./strain.svg";

const Clinicalstatus = () => {
    return (
        <>
            <Header />
            <div className="Clinicalstatus">
                <div className="sectionstatus">
                    <h1>Estado clinico</h1>
                    <div className="statuspatien">
                        <div className="sectionfirst">
                            <div className="heartrate">
                                <span>Ritmo cardiaco</span>
                                <img src={Heartrate} alt="heartrate"></img>
                                <span>75 por min</span>
                            </div>
                            <div className="temperature">
                                <span>Temperatura</span>
                                <img src={Temperature} alt="temperature"></img>
                                <span>36.5°C</span>
                            </div>
                            <div className="bloodpressure">
                                <span>Presión arterial</span>
                                <img src={Bloodpressure} alt="bloodpressure"></img>
                                <span>90/60 mm Hg</span>
                            </div>
                        </div>
                        <div className="sectionsecond">
                            <div className="strain">
                                <span>Tension</span>
                                <img src={Strain} alt="heartrate"></img>
                                <span>130/80</span>
                            </div>
                            <div className="breathing">
                                <span>Respiración</span>
                                <img src={Breathing} alt="temperature"></img>
                                <span>12 por min</span>
                            </div>
                            <div className="glucose">
                                <span>Glucosa</span>
                                <img src={Glucoce} alt="bloodpressure"></img>
                                <span>150 mg/dl</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sectionmedicines">
                    <h1>Registro de medicamentos</h1>
                    <div className="medicines">
                        <div className="medicineone">
                            <div className="medicine">
                                <h3>Medicamento:</h3>
                                <span>Linisopril</span>
                            </div>
                            <div className="indications">
                                <h3>Posologia:</h3>
                                <span>Tomar 1 tableta diaria en las mañanas todos los dias</span>
                            </div>
                        </div>
                        <div className="medicinetwo">
                            <div className="medicine">
                                <h3>Medicamento:</h3>
                            </div>
                            <div className="indications">
                                <h3>Posologia:</h3>
                            </div>
                        </div>
                        <div className="medicinethree">
                            <div className="medicine">
                                <h3>Medicamento:</h3>
                            </div>
                            <div className="indications">
                                <h3>Posologia:</h3>
                            </div>
                        </div>
                        <div className="medicinefour">
                            <div className="medicine">
                                <h3>Medicamento:</h3>
                            </div>
                            <div className="indications">
                                <h3>Posologia:</h3>
                            </div>
                        </div>
                        <div className="medicinefive">
                            <div className="medicine">
                                <h3>Medicamento:</h3>
                            </div>
                            <div className="indications">
                                <h3>Posologia:</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clinicalstatus;