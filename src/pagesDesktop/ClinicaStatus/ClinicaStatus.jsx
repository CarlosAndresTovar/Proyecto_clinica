import React from "react";
import FooterDesktop from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import RitmoCardiaco from '../Images/RitmoCardiaco.png';
import Temperatura from '../Images/Temperatura.png';
import PresionArterial from '../Images/PresionArterial.png';
import Tension from '../Images/Tension.png';
import Respiracion from '../Images/Respiracion.png';
import Glucosa from '../Images/Glucosa.png';
import './ClinicaStatus.css';


const ClinicaStatus = () => {
    return(
    <>
        <NavBar />
        <div className="superior-container"> 
            <div className="general-container-one">               
                <div className="box-status">
                    <div className="superior-section">
                        <div className="cardiact-rite">
                            <span className="sub-title">Ritmo cardíaco</span><br></br>
                            <img src={RitmoCardiaco} alt="Ritmo_Cardiaco"></img><br></br>
                            <span className="sub-title">75 por min</span>
                        </div>
                        <div className="temperture">
                            <span className="sub-title">Temperatura</span><br></br>
                            <img src={Temperatura} alt="temperatura"></img><br></br>
                            <span className="sub-title">36.5°C</span>
                        </div>
                        <div className="pressure">
                            <span className="sub-title">Presión arterial</span><br></br>
                            <img src={PresionArterial} alt="Presion_Arterial"></img><br></br>
                            <span className="sub-title">90/60 mm Hg</span>
                        </div>
                    </div>
                    <div className="inferior-section">
                        <div className="tension-box">
                                <span className="sub-title">Tensión</span><br></br>
                                <img src={Tension} alt="Tension"></img><br></br>
                                <span className="sub-title">130/80</span>
                        </div>
                        <div className="breathing-box">
                                <span className="sub-title">Respiración</span><br></br>
                                <img src={Respiracion} alt="Respiracion"></img><br></br>
                                <span className="sub-title">12 por min</span>
                        </div>
                        <div className="glucose-box">
                                <span className="sub-title">Glucosa</span><br></br>
                                <img src={Glucosa} alt="Glucosa"></img><br></br>
                                <span className="sub-title">150 mg/dl</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-separate">
               <hr></hr> 
            </div>
            <div className="general-container-two">
                <div className="medicines">
                        <div className="medicineone">
                            <div className="medicine">
                                <h3>Medicamento:</h3>
                                <span>Linisopril</span>
                            </div>
                            <div className="indications">
                                <h3>Posologia:</h3>
                                <span className="text-posologia">Tomar 1 tableta diaria en las mañanas todos los días</span>
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
        <FooterDesktop />
               
    </>
    )

}
export default ClinicaStatus;
