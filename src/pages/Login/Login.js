import React, { useState, useEffect } from "react";
import './Login.css'
import Logo from "./components/Logo/Logo";
import InputLogin from "./components/Input/Input";
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import Social from "./components/Social/Social";
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import gmail from "../../images/Gmail.svg"
import Register from "../Register/Register";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const Logincomponent = () => {

    const userAdmin = {
        adminUser: "wilsoncalvoa",
        adminPassword: "wilsoncalvoa"
    }

    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ local, setLocal] = useState(false)
    
    function handleChange(name, value) {
        if (name === 'user') {
            if (value === userAdmin.adminUser) {
                setUser(value);
            } else {
                setUser("");
            }
        } else if (name === 'password') {
            if (value === userAdmin.adminPassword){
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

    const logoutSubmit = () => {
        setUser(false)
        setPassword(false)
        localStorage.clear()
        setLocal(false)
    }

    var url = window.location.href

    return (
        <>
            { !url.includes('register') &&
                <div className="section-login">
                    { !local &&
                        <Logo />
                    }
                    { !local &&
                        <>
                            <form>
                                <InputLogin attribute={{
                                    id: 'user',
                                    name:'user',
                                    placeholder: 'Usuario',
                                    type: 'text',
                                    icon: faUser,
                                }}
                                handleChange={handleChange}/>
                                <InputLogin attribute={{
                                    id: 'password',
                                    name:'password',
                                    placeholder: 'Contraseña',
                                    type: 'password',
                                    icon: faLock
                                }}
                                handleChange={handleChange}/>
                            </form>
                            <div className="section-recording">
                                <input type="checkbox"></input>Recordarme
                                <span>¿Olvidaste tu Contraseña?</span>
                            </div>
                            <div className="section-register">
                                <a href="/register">Registrarse</a>
                            </div>
                        </>
                    }
                    { !local &&
                        <button onClick={handleSubmit}>Login</button>
                    }
                    { !local &&
                        <div className="section-social">
                            <Social attribute={{
                                url: "https://es-la.facebook.com/",
                                ruta: facebook
                            }}/>
                            <Social attribute={{
                                url: "https://twitter.com/?lang=es",
                                ruta: twitter
                            }}/>
                            <Social attribute={{
                                url: "https://www.linkedin.com/",
                                ruta: linkedin
                            }}/>
                            <Social attribute={{
                                url: "https://www.google.com/intl/es-419/gmail/about/",
                                ruta: gmail
                            }}/>
                        </div>
                    }
                    { local &&
                        <button onClick={logoutSubmit}>Logout</button>
                    }
                </div>
            }
            { url.includes('register')  &&
                <Register />
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
            </Routes>
        </BrowserRouter>
    )
}

export default Login;