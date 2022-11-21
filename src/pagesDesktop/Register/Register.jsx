import React from "react";
import './Register.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";

const RegisterDesktop = () => {
    return(
            <>
                <head>
                    <title>Registrarse</title>
                </head>
                <header>
                    <nav>
                        <div className="container-logo">
                            <img id="logobarra" src={LogoBarra} alt="logo" />
                        </div>                    
                    </nav>
                </header>
                <div className="container-registro">                    
                    <div className="container-formulario-1">   
                                                                   
                        <form>  
                            <span className="registrarse">Registrarse</span>
                            <input className="cajas" type="text" placeholder="   Usuario"/>
                            <input className="cajas" type="text" placeholder="   Contraseña"/>
                            <input className="cajas" type="text" placeholder="   Nombres"/>
                            <input className="cajas" type="text" placeholder="   Apellidos"/>
                            <input className="cajas" type="text" placeholder="   Tipo de indetificacion"/><br></br>
                            <p className="condiciones">Al dar clic en enviar, Aceptas que Clinica Imperial almacene y procese la informacion personal suministrada arriba.</p>                          
                            
                        </form>                        
                    </div> 
                    <div className="linea">
                        <hr className="ln"/>
                    </div>
                    <div className="container-formulario-2">
                        <form>
                            <span className="registrarse"></span>
                            <input className="cajas" type="text" placeholder="   Numero de identificación"/>
                            <input className="cajas" type="text" placeholder="   Fecha de Nacimiento"/>
                            <input className="cajas" type="text" placeholder="   Correo"/>
                            <input className="cajas" type="text" placeholder="   Numero Movil"/>                            
                            <input className="checkbox" type="checkbox" />
                            <input className="checkbox" type="checkbox" />
                            <button type="input">Enviar</button>
                        </form>
                    </div>

                </div>                
                <FooterDesktop />                   
            </>


    )



}
export default RegisterDesktop;