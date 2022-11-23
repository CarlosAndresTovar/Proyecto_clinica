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
                            <a href="/#"><img id="Certifications" src={Certifications} alt="Certifications"></img></a>
                        </div>
                        <span>Certificados</span>
                    </div>
                    <div className="section-medicalAppointments">
                        <div className="Items-medicalAppointments">
                            <a href="/#"><img id="medicalAppointments" src={medicalAppointments} alt="medicalAppointments"></img></a>
                        </div>
                        <span>Citas medicas</span>
                    </div>
                </div>
                <div className="secondSection">
                    <div className="autorizationsMipres">
                        <div className="Items-autorizationsMipres">
                            <a href="/#"><img id="autorizationsMipres" src={autorizationsMipres} alt="autorizationsMipres"></img></a>
                        </div>
                        <span>Autorizaciones mipres</span>
                    </div>
                    <div className="xRays">
                        <div className="Items-xRays">
                            <a href="/#"><img id="xRays" src={xRays} alt="xRays"></img></a>
                        </div>
                        <span>Imágenes diagnosticas</span>
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