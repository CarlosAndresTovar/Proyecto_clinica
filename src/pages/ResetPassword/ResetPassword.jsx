import React from "react";
import Header from "../Register/Header";
import MarcaAgua from "./MarcaAgua.svg"
import './ResetPassword.css';
import Inputregister from "../Register/Input";

const Resetpassword = () => {
    return (
        <>
            <Header />
            <section className="marcaAgua">
                <img src={MarcaAgua} alt="MarcaAgua"></img>
            </section>
            <section className="recoverPassword">
                <h1>Recuperar la contraseña</h1>
            </section>
            <Inputregister attribute={{id: 'resetPassword',
                                       name: 'resetPassword',
                                       placeholder: 'Correo electronico',
                                       type: 'text',
                                       }}/>
            <section className="textResetPassword">
                <p>
                    Al hacer click en continuar recibirás un link al correo registrado
                    para la recuperación de la contraseña.
                </p>
            </section>
            <div className="buttonContinue">
                <button>Continuar</button>
            </div>
        </>
    )
}

export default Resetpassword;