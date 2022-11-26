import React from "react";
import './Register.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";

const RegisterDesktop = () => {
    return(
            <>
                <header>
                    <nav>
                        <div className="container-logo">
                            <img id="logobarra" src={LogoBarra} alt="logo" />
                        </div>                   
                    </nav>
                    <div className="buttonlogin">
                        <a href="/home"><button>Iniciar sesión</button></a>
                    </div> 
                </header>
                <div className="container-registro">                    
                    <div className="container-formulario-1">   
                                                                   
                        <form>  
                            <span className="registrarse">Registrarse</span>
                            <input className="cajas" type="text" placeholder="Usuario"/>
                            <input className="cajas" type="text" placeholder="Contraseña"/>
                            <input className="cajas" type="text" placeholder="Nombres"/>
                            <input className="cajas" type="text" placeholder="Apellidos"/>
                            <input className="cajas" type="text" placeholder="Tipo de identificación"/>
                            <p className="condiciones">Al dar clic en enviar, aceptas que Clinica Imperial almacene y procese la información personal suministrada arriba.</p>                          
                        </form>                        
                    </div> 
                    <div className="linea">
                        <hr className="ln"/>
                    </div>
                    <div className="container-formulario-2">
                        <form>
                            <span className="registrarse"></span>
                            <input className="cajas" type="text" placeholder="Numero de identificación"/>
                            <input className="cajas" type="date" placeholder="Fecha de Nacimiento"/>
                            <input className="cajas" type="text" placeholder="Correo"/>
                            <input className="cajas" type="text" placeholder="Numero Movil"/>                            
                        </form>
                        <div className="terminosycondiciones">
                            <div className="tratamientodedatos">
                                <input className="checkbox" type="checkbox" />
                                <span>Autorizó el</span>
                                <span className="sudbrayar">tratamiento de datos personales*</span>
                            </div>
                            <div className="aceptarterminso">
                                <input className="checkbox" type="checkbox" />
                                <span>Aceptar los</span>
                                <span className="sudbrayar">términos y condiciones*</span>
                            </div>
                        </div>
                            <a href="/home"><button type="input">Enviar</button></a>
                    </div>

                </div>                
                <FooterDesktop />                   
            </>


    )



}
export default RegisterDesktop;