import React, { useState, useEffect } from "react";
import './Login.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from "./components/Logo/Logo";
import Input_login from "./components/Input/Input";
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import Social from "./components/Social/Social";
import facebook from "/home/carlos/Documents/clinicaimperial/src/images/facebook.svg"
import twitter from "/home/carlos/Documents/clinicaimperial/src/images/twitter.svg"
import linkedin from "/home/carlos/Documents/clinicaimperial/src/images/linkedin.svg"
import gmail from "/home/carlos/Documents/clinicaimperial/src/images/Gmail.svg"

const Login = () => {

    const userAdmin = {
        adminUser: "imperial@gmail.com",
        adminPassword: "admin123"
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

    return (
        <div className="section-login">
            { !local &&
                <Logo />
            }
            { !local &&
                <>
                    <form>
                        <Input_login attribute={{
                            id: 'user',
                            name:'user',
                            placeholder: 'Usuario',
                            type: 'text',
                            icon: faUser,
                        }}
                        handleChange={handleChange}/>
                        <Input_login attribute={{
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
                        <a href="#">Registrarse</a>
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
    )
}

export default Login;