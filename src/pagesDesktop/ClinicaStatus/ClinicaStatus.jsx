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
        <div className="container-title">           
            <p className="prueba">No esta aplicando estilos </p>
        </div>
        <FooterDesktop />
               
    </>



    )

}
export default ClinicaStatus;
