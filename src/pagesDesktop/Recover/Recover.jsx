import React from "react";
import './Recover.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";


const RecoverDesktop = () => {
    return (
       
       <>
            <head>                
                <title>Recuperar</title>
            </head>
            <header>
                <nav>
                    <div className="container-logo">
                        <img id="logobarra" src={LogoBarra} alt="logo" />
                    </div>                        
                </nav>
            </header>
            <body>
                <div className="container-alignment">
                    <span id="a">Recuperar la contraseña</span> 
                </div>
                <div className="container-alignment">
                    <h5 id="b">Al hacer clic en Continuar recibiras un link al correo registrado, para la recuperación de la contraseña.</h5>
                </div>
                <div className="container-alignment">
                    <hr id="c"/>
                </div>
                <div className="container-alignment">
                    <input id="d" type="text" placeholder="Ingresa el correo electronico registrado" />
                </div>
                <div>
                    <div>
                        <button id="boton-cancelar" type="imput">Cancelar</button>
                    </div>
                    <div>
                        <button id="boton-continuar" type="imput">Continuar</button>
                    </div>                    
                </div>                
            </body>

            <footer>
                    <FooterDesktop />        
            </footer>
       </>


    )



}
export default RecoverDesktop;