import React from "react";
import './Register.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Inputregister from "./Input";

const Register = () => {
    return (
        <>
            <header>
                <div className="toBack">
                    <div className="iconToBack">
                        <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a>
                    </div>
                    <div className="titleToBack">
                        <a href="/">Volver</a>
                    </div>
                </div>
            </header>
            <div className="inputDataRegister">
                <h1>Registrarse</h1>
                <form>
                    <Inputregister attribute={{id: 'userRegister',
                                               name: 'userRegister',
                                               placeholder: 'Usuario',
                                               type: 'text',
                                               }}/>
                    <Inputregister attribute={{id: 'userPassword',
                                               name: 'userPassword',
                                               placeholder: 'Contraseña',
                                               type: 'password',
                                               }}/>
                    <Inputregister attribute={{id: 'userNames',
                                               name: 'userNames',
                                               placeholder: 'Nombres',
                                               type: 'text',
                                               }}/>
                    <Inputregister attribute={{id: 'userLastNames',
                                               name: 'userLastNames',
                                               placeholder: 'Apellidos',
                                               type: 'text',
                                               }}/>
                    <select name="userTypeDocument" id="userTypeDocument">
                        <option value="">Tipo de Identificación</option>
                        <option value="Cedula">Cedula</option>
                        <option value="Cedula Extrangera">Cedula Extrangera</option>
                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>                     
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                    <Inputregister attribute={{id: 'userDocument',
                                               name: 'userDocument',
                                               placeholder: 'No de identificación',
                                               type: 'text',
                                               }}/>
                    <Inputregister attribute={{id: 'userDateBirth',
                                               name: 'userDateBirth',
                                               placeholder: 'Fecha de Nacimiento',
                                               type: 'date',
                                               }}/>
                    <Inputregister attribute={{id: 'userEmail',
                                               name: 'userEmail',
                                               placeholder: 'Correo',
                                               type: 'email',
                                               }}/>
                    <Inputregister attribute={{id: 'userPhone',
                                               name: 'userPhone',
                                               placeholder: 'Número móvil',
                                               type: 'number',
                                               }}/>
                </form>
            </div>
        </>
    )
}

export default Register;