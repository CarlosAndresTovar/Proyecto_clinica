import React from "react";
import './Login.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";
import LogoDesktop from "./LogoDesktop.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';

const LoginDesktop = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="container-logo">
                        <img id="logobarra" src={LogoBarra} alt="logo" />
                    </div>   
                </nav>
            </header>
            <div className="bodyDesktop">
                <div className="LogoDesktop">
                    <div className="sectionImage">
                        <img src={LogoDesktop} alt="LogoDesktop"></img>
                    </div>
                </div>
                <div className="LineSeparacion">
                    <hr className="vertical-line"></hr>
                </div>
                <div className="IngresarDatos">
                    <div className="sectionDatos">
                        <form>
                            <div className="sectionUser">
                                <i><FontAwesomeIcon icon={faUser} /></i>
                                <input placeholder="Usuario"></input>
                            </div>
                            <div className="sectionPassword">
                                <i><FontAwesomeIcon icon={faLock} /></i>
                                <input placeholder="Contraseña"></input>
                            </div>
                        </form>
                        <div className="sectionRecording">
                            <input type="checkbox"></input>Recordarme
                            <a href="/resetpassword">¿Olvidaste tu Contraseña?</a>
                        </div>
                        <div className="sectionRegister">
                            <a href="/register">Registrarse</a>
                        </div>
                        <div className="lineaHorizontal">
                            <hr className="linea-horizontal"></hr>
                        </div>
                        <div className="buttonLogin">
                            <button>Iniciar sesion</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDesktop />
        </>

    )
}

export default LoginDesktop;