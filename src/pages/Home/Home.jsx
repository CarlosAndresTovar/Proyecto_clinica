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
                    <div className="Items">
                        <img id="Certifications" src={Certifications} alt="Certifications"></img>
                    </div>
                    <div className="Items">
                        <img id="medicalAppointments" src={medicalAppointments} alt="medicalAppointments"></img>
                    </div>
                </div>
                <div className="secondSection">
                    <div className="Items">
                        <img id="autorizationsMipres" src={autorizationsMipres} alt="autorizationsMipres"></img>
                    </div>
                    <div className="Items">
                        <img id="xRays" src={xRays} alt="xRays"></img>
                    </div>
                </div>
                <div className="thirdSection">
                    <div className="Items">
                        <a href="/sincronization"><img id="Sincronizations" src={Sincronizations} alt="Sincronizations"></img></a>
                    </div>
                    <div className="Items">
                        <img id="checkBilling" src={checkBilling} alt="checkBilling"></img>
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