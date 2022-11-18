import React from "react";
import './Register.css';
import LogoBarra from '../Images/LogoBarra.png'
import IconoFacebook from '../Images/facebook.png'
import IconoLinkedin from '../Images/linkedin.png'
import IconoTwitter from '../Images/twitter.png'
import IconoGmail from '../Images/google.png'


const RegisterDesktop = () => {
    return (
       
       <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Registrarse</title>
            </head>
            <header>
            <nav>
                    <div className="container-logo">
                        <img id="logobarra" src={LogoBarra} alt="logo" />
                    </div>
                    
            </nav>
            </header>

            <body>
                <div className="container-registro">
                    <span className="registro">Registrarse</span>
                </div>
                <form className="Contendor-cajas-dialogo">
                    <input type="text" name="usuario" value="" /><br></br>
                    <input type="text" name="usuario" value="" /><br></br>
                    <input type="text" name="usuario" value="" /><br></br>
                    <input type="text" name="usuario" value="" /><br></br>
                    <input type="text" name="usuario" value="" /><br></br>

                </form>
                
            </body>
            <footer>
                    <div className="caja-padre-footer-seccion-1">
                        <h6>VISITANOS EN NUESTRAS REDES SOCIALES: </h6>
                        <div className="iconos-redes-sociales-1">
                            <img id="icons" src={IconoFacebook} alt="iconofacebook"/>
                        </div>
                        <div className="iconos-redes-sociales-2">
                            <img id="icons" src={IconoLinkedin} alt="iconofacebook"/>
                        </div>
                        <div className="iconos-redes-sociales-3">
                            <img id="icons" src={IconoTwitter} alt="iconofacebook"/>
                        </div>  
                        <div className="iconos-redes-sociales-4">
                            <img id="icons" src={IconoGmail} alt="iconofacebook"/>
                        </div> 

                    </div>

                    <div className="caja-padre-footer-seccion-2">
                        
                        <h6>NUESTRAS SEDES: </h6>
                        <div className="acerca-de">
                                <ul>
                                    <li>Bogota, Calle 26 #68 - 32</li>
                                    <li>Medellin, Calle 49 #63 - 100 Laureles Estadio</li>                                    
                                </ul>
                        </div>
                        <hr className="vertical-line" />
                    </div>

                    <div className="caja-padre-footer-seccion-3">
                        <h6>LINEAS DE ATENCIÓN: </h6>
                        <div className="acerca-de">
                                <ul>
                                    <li>601-9783402</li>
                                    <li>605-9783402</li>
                                    <li>313-489-5602</li>
                                </ul>
                        </div>
                        <hr className="vertical-line" />
                    </div>

                    <div className="caja-padre-footer-seccion-4">
                        <h6>ACERCA DE LA CLINICA: </h6>
                            <div className="acerca-de">
                                <ul>
                                    <li>Servicios</li>
                                    <li>Nosotros</li>
                                    <li>Contactenos</li>
                                </ul>                                
                            </div>
                            <hr className="vertical-line" />

                    </div>
                  

                        
            </footer>
       </html>


    )



}
export default RegisterDesktop;