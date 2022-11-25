import React from "react";
import './History.css';
import NavBar from '../NavBar/NavBar'
import FooterDesktop from "../Footer/Footer";

const ServicesDesktop = () => {
    return(
        <>
            <NavBar />
            <div className="container-buttons">
                <div className="container-buttons-internal">
                    <div className="container-text-title">
                        <span className="principal-title">Historial Clínico</span>
                    </div>                     
                    <div className="button-box">
                        <button className="button" type="input">Evoluciones</button>
                    </div>
                    <div className="button-box">
                        <button className="button" type="input">Autorizaciones Medicas</button>
                    </div>                   
                </div>
                <div className="line-division">
                    <hr className="division-line"/>
                </div>
                <div className="container-buttons-internal">
                    <div className="container-text-title">
                        <span className="principal-title"></span>
                    </div>                     
                    <div className="button-box">
                        <button className="button" type="input">Historial de Medicamentos</button>
                    </div>
                    <div className="button-box">
                        <button className="button" type="input">Imagenes Diagnosticas</button>
                    </div>                   
                </div>               
            </div>
            <FooterDesktop />              
        </>
    )
}
export default ServicesDesktop;
