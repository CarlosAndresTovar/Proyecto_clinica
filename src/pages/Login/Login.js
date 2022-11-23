import React, { useState, useEffect } from "react";
import './Login.css'
import Logo from "./components/Logo/Logo";
import InputLogin from "./components/Input/Input";
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Social from "./components/Social/Social";
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import gmail from "../../images/Gmail.svg"
import Register from "../Register/Register";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Resetpassword from "../ResetPassword/ResetPassword";
import Mainhome from "../Home/Home";
import Sincronization from "../Sincronization/Sincronization";
import Calls from "../Calls/Calls";
import Medicalhistory from "../Medicalhistory/Medicalhistory";
import Clinicalstatus from "../Clinicalstatus/Clinicalstatus";
import Facturaxion from "../Facturaxión/Facturaxion";

const Logincomponent = () => {

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
                <div className="section-login">
                    <div className="section-login-desk">
                        {!local &&
                            <Logo />
                        }
                        <div className="section-boxform-desk">
                            <div className="section-form-desk">
                                {!local &&
                                    <>
                                        <form>
                                            <InputLogin attribute={{
                                                id: 'user',
                                                name: 'user',
                                                placeholder: 'Usuario',
                                                type: 'text',
                                                icon: faUser,
                                            }}
                                                handleChange={handleChange} />
                                            <InputLogin attribute={{
                                                id: 'password',
                                                name: 'password',
                                                placeholder: 'Contraseña',
                                                type: 'password',
                                                icon: faLock
                                            }}
                                                handleChange={handleChange} />
                                        </form>
                                        <div className="section-recording">
                                            <input type="checkbox"></input>Recordarme
                                            <a href="/resetpassword">¿Olvidaste tu contraseña?</a>
                                        </div>
                                        <div className="section-register">
                                            <a href="/register">Registrarse</a>
                                        </div>
                                    </>
                                }
                                {!local &&
                                    <button onClick={handleSubmit}>Iniciar sesión</button>
                                }
                            </div>
                        </div>
                    </div>
                    {!local &&
                        <div className="section-social">
                            <Social attribute={{
                                url: "https://es-la.facebook.com/",
                                ruta: facebook
                            }} />
                            <Social attribute={{
                                url: "https://twitter.com/?lang=es",
                                ruta: twitter
                            }} />
                            <Social attribute={{
                                url: "https://www.linkedin.com/",
                                ruta: linkedin
                            }} />
                            <Social attribute={{
                                url: "https://www.google.com/intl/es-419/gmail/about/",
                                ruta: gmail
                            }} />
                        </div>
                    }
                </div>
            }
            {!local &&
                        <div className="section-footer">
                            <div className="section-footer-social">
                                <h5>Siguenos en nuestras redes sociales</h5>
                                <div className="section-footer-icons">
                                    <Social attribute={{
                                        url: "https://es-la.facebook.com/",
                                        ruta: facebook
                                    }} />
                                    <Social attribute={{
                                        url: "https://twitter.com/?lang=es",
                                        ruta: twitter
                                    }} />
                                    <Social attribute={{
                                        url: "https://www.linkedin.com/",
                                        ruta: linkedin
                                    }} />
                                    <Social attribute={{
                                        url: "https://www.google.com/intl/es-419/gmail/about/",
                                        ruta: gmail
                                    }} />
                                </div>
                            </div>
                            <div className="section-footer-service">
                                <div>
                                    <h5>
                                        SEDES:
                                    </h5>
                                    <p>Bogota calle 26 # 68 - 32</p>
                                    <p>Medellin calle 49 # 63 - 100 Lauresles - Estadio</p>
                                </div>
                                <div>
                                    <h5>
                                        LINEAS DE ATENCION:
                                    </h5>
                                    <p>601-9783402</p>
                                    <p>601-9783402</p>
                                </div>
                            </div>
                            <div className="section-footer-about">
                                <h5>
                                    ACERCA DE LA CLINICA:
                                </h5>
                                <ul>
                                    <li>Servicios</li>
                                    <li>Nosotros</li>
                                    <li>Contactos</li>
                                </ul>
                            </div>   
                        </div>
                    }
            {local &&
                <>
                    <Mainhome />
                </>
            }
        </>
    )
}

const ValidateLogin = () => {
    
    const items = JSON.parse(localStorage.getItem('account'));
    
    return (
        <>
            {items &&
                <Sincronization />
            }
            {!items &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            }
        </>
    )
}

const Validatecalls = () => {
    const items = JSON.parse(localStorage.getItem('account'));
    
    return (
        <>
            {items &&
                <Calls />
            }
            {!items &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            }
        </>
    )
}

const Validatemedicalhistory = () => {
    const items = JSON.parse(localStorage.getItem('account'));
    
    return (
        <>
            {items &&
                <Medicalhistory />
            }
            {!items &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            }
        </>
    )
}

const Validateclinicalstatus = () => {
    const items = JSON.parse(localStorage.getItem('account'));
    
    return (
        <>
            {items &&
                <Clinicalstatus />
            }
            {!items &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            }
        </>
    )
}

const Validatefacturaxion = () => {
    const items = JSON.parse(localStorage.getItem('account'));
    
    return (
        <>
            {items &&
                <Facturaxion />
            }
            {!items &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            }
        </>
    )
}

const Login = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Logincomponent />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword" element={<Resetpassword />} />
                <Route path="/sincronization/*" element={<ValidateLogin />} />
                <Route path="/calls/*" element={<Validatecalls />} />
                <Route path="/medicalhistory/*" element={<Validatemedicalhistory />} />
                <Route path="/clinicalstatus/*" element={<Validateclinicalstatus />}/>
                <Route path="/facturaxion/*" element={<Validatefacturaxion />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Login;