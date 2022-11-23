import React from "react";
import './Login.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";
import LogoDesktop from "./LogoDesktop.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RecoverDesktop from "../Recover/Recover";

const LoginDesktopMain = () => {

    const userAdmin = {
        adminUser: "wilsoncalvoa",
        adminPassword: "wilsoncalvoa"
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [local, setLocal] = useState(false)

    function handleChange(name, value) {
        if (name === 'user') {
            if (value === userAdmin.adminUser) {
                setUser(value);
            } else {
                setUser("");
            }
        } else if (name === 'password') {
            if (value === userAdmin.adminPassword) {
                setPassword(value);
            } else {
                setPassword("");
            }
        } else {

        }
    };

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('account'));
        if (items) {
            setLocal(items);
        }
    }, []);

    function handleSubmit() {
        let account = { user, password }
        if (account.user && account.password) {
            let ac = { user, password }
            let account = JSON.stringify(ac);
            localStorage.setItem('account', account);
            setLocal(true)
        } else {
            setLocal(false);
        }
    };

    return (
        <>
            {!local &&
                <header>
                    <nav>
                        <div className="container-logo">
                            <img id="logobarra" src={LogoBarra} alt="logo" />
                        </div>   
                    </nav>
                </header>
            }
            {!local &&
                <>
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
                                        <input placeholder="Usuario" id="user" name="user" type="text" onChange={(e) => handleChange(e.target.name, e.target.value)}></input>
                                        
                                    </div>
                                    <div className="sectionPassword">
                                        <i><FontAwesomeIcon icon={faLock} /></i>
                                        <input placeholder="Contraseña" id="password" type="password" name="password" onChange={(e) => handleChange(e.target.name, e.target.value)}></input>
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
                                    <button onClick={handleSubmit}>Iniciar sesion</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterDesktop />
                </>
            }
        </>

    )
}

const LoginDesktop = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<LoginDesktopMain />} />
                <Route path="/resetpassword" element={<RecoverDesktop />} />
            </Routes>
        </BrowserRouter>
    )
}

export default LoginDesktop;