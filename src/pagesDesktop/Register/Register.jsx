import React from "react";
import './Register.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";

const RegisterDesktop = () => {
    return(
            <>
                <head>
                    <title>Registrarse</title>
                </head>
                <header>
                    <nav>
                        <div className="container-logo">
                            <img id="logobarra" src={LogoBarra} alt="logo" />
                        </div>                    
                    </nav>
                </header>
                <div>
                    <span>Pagina de Registro</span>
                </div>
                    
                <FooterDesktop />

                            
                    
            </>


    )



}
export default RegisterDesktop;