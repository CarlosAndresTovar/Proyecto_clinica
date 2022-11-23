import React from "react";
import './Home.css';
import Certifications from "./Certifications.svg";
import medicalAppointments from "./medicalAppointments.svg";
import autorizationsMipres from "./autorizationsMipres.svg";
import xRays from "./xRays.svg";
import Sincronizations from "./Sincronizations.svg";
import checkBilling from "./checkBilling.svg";
import Whatsapp from "./Whatsapp.svg";
import Header from "./Header";

const Mainhome = () => {

    return (
        <>
            <Header />
            <div className="sectionHome">
                <div className="firstSection">
                    <div className="sectioncertifications">
                        <div className="Items-certifications">
                            <img id="Certifications" src={Certifications} alt="Certifications"></img>
                        </div>
                        <span>Certificados</span>
                    </div>
                    <div className="section-medicalAppointments">
                        <div className="Items-medicalAppointments">
                            <img id="medicalAppointments" src={medicalAppointments} alt="medicalAppointments"></img>
                        </div>
                        <span>Citas medicas</span>
                    </div>
                </div>
                <div className="secondSection">
                    <div className="autorizationsMipres">
                        <div className="Items-autorizationsMipres">
                            <img id="autorizationsMipres" src={autorizationsMipres} alt="autorizationsMipres"></img>
                        </div>
                        <span>Autorizaciones mipres</span>
                    </div>
                    <div className="xRays">
                        <div className="Items-xRays">
                            <img id="xRays" src={xRays} alt="xRays"></img>
                        </div>
                        <span>Imagenes diagnosticas</span>
                    </div>
                </div>
                <div className="thirdSection">
                    <div className="Sincronizations">
                        <div className="Items-Sincronizations">
                            <a href="/sincronization"><img id="Sincronizations" src={Sincronizations} alt="Sincronizations"></img></a>
                        </div>
                        <span>Sincronizar pacientes</span>
                    </div>
                    <div className="checkbilling">
                        <div className="Items-checkbilling">
                            <a href="/facturaxion"><img id="checkBilling" src={checkBilling} alt="checkBilling"></img></a>
                        </div>
                        <span>Consultar facturación</span>
                    </div>
                </div>
            </div>
            <section className="Whatsapp">
                <a href="https://web.whatsapp.com/"><img id="Whatsapp" src={Whatsapp} alt="Whatsapp"></img></a>
            </section>
        </>
    )
}

export default Mainhome;