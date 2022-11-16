import React from "react";
import './Register.css';
import Inputregister from "./Input";
import Header from "./Header"

const Register = () => {
    return (
        <>
            <Header />
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
            <section className="dataTreatment">
                <div className="Authorization">
                    <input type="checkbox"></input><span>Autolizo el</span> 
                    <a href="/register">tratamiento de datos personales *</a>                            
                </div>
                <div className="toAccept">
                    <input type="checkbox"></input><span>Aceptar los</span>
                    <a href="/register">términos y condiciones *</a>                    
                </div>
            </section>
            <section className="textTreatment">
                <div className="sectionTreatment">
                    <p>
                        Al dar click en enviar, Aceptas que la Clinica Imperial almacene
                        y procese la informacion personal suministrada arriba
                    </p>
                </div>
            </section>
            <div className="buttonAccept">
                <button>Enviar</button>
            </div>
        </>
    )
}

export default Register;