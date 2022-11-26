import React from "react";
import './Options.css';
import NavBar from "../NavBar/NavBar";
import FooterDesktop from "../Footer/Footer";
import CertificationsDesktop from "../Images/Certifications.svg";
import MedicalAppointments from "../Images/medicalAppointments.svg";
import xRays from "../Images/xRays.svg";
import AutorizationsMipres from "../Images/autorizationsMipres.svg";
import Sincronizations from "../Images/Sincronizations.svg";
import CheckBilling from "../Images/checkBilling.svg";
import Notifications from "../Images/Notifications.svg";

const Options = () => {
    return (
        <>
            <NavBar />
            <div className="main-options">
                <img src={Notifications} alt="Notifications"></img>
                <div className="firstsectionhomedesktop">
                    <div className="section-options">
                        <div className="section-images">
                            <img src={CertificationsDesktop} alt="CertificationsDesktop"></img>
                        </div>
                        <div className="section-name-options">
                            <h3>Certificados</h3>
                        </div>
                    </div>
                    <div className="section-options">
                        <div className="section-images">
                            <img src={MedicalAppointments} alt="MedicalAppointments"></img>
                        </div>
                        <div className="section-name-options">
                            <h3>Citas medicas</h3>
                        </div>
                    </div>
                    <div className="section-options">
                        <div className="section-images">
                            <img src={xRays} alt="xRays"></img>
                        </div>
                        <div className="section-name-options">
                            <h3>Imagenes diagnosticas</h3>
                        </div>
                    </div>
                </div>
                <div className="separationhomedesktop">
                    <hr />
                </div>
                <div className="secondsectionhomedesktop">
                    <div className="section-options">
                        <div className="section-images">
                            <img src={AutorizationsMipres} alt="AutorizationsMipres"></img>
                        </div>
                        <div className="section-name-options">
                            <h3>Autorizaciónes mipres</h3>
                        </div>
                    </div>
                    <div className="section-options">
                        <div className="section-images">
                            <a href="/sincronization"><img src={Sincronizations} alt="Sincronizations"></img></a>
                        </div>
                        <div className="section-name-options">
                            <h3>Sincronización de pacientes</h3>
                        </div>
                    </div>
                    <div className="section-options">
                        <div className="section-images">
                            <img src={CheckBilling} alt="CheckBilling"></img>
                        </div>
                        <div className="section-name-options">
                            <h3>Consultar facturación</h3>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDesktop/>
        </>
    )
}

export default Options;