import React from "react";
import './Recover.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";


const RecoverDesktop = () => {
    return (
       
       <>
            <header>
                <nav>
                    <div className="container-logo">
                        <img id="logobarra" src={LogoBarra} alt="logo" />
                    </div>   
                </nav>
            </header>
            <div className="recoverypassworddesktop">
                <h1>Recuperar la contraseña</h1>
                <p>Al hacer clic en continuar recibiras un link al correo registrado para la recuperación de la contraseña</p>
                <div className="line-separation"></div>
                <form>
                    <input type="email" placeholder="Ingresa el correo electronico"></input>
                </form>
                <div className="buttonrecoverydesktop">
                    <button>Cancelar</button>
                    <button>Continuar</button>
                </div>
            </div>
            <FooterDesktop />
       </>
    )
}

export default RecoverDesktop;