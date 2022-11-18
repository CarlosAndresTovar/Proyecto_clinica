import React from "react";
import './Recover.css';
import Logo_Principal from './Images/Logobarra.png';

const RecoverDesktop = () => {
    return (
        <body>
            <header>
                <nav className="barra">
                    <div className="logo-barra-superior">
                        <img src={Logo_Principal} />
                    </div>       
                </nav>
            </header>
            <container >
                <span className="titulo-recuperar">Recuperar la contraseña</span>
                <p className="texto-recuperar"> Al hacer clic en Continuar recibiras un link al correo registrado, para la recuperación de la contraseña.</p>
                
            </container> 
            <hr className="linea-1"></hr>   
            <form>
                <input className="cuadro-dialogo"></input>
            </form>  
            <div>
                <button className="boton-cancelar">Cancelar</button>
                
            </div>
            <div>
                <button className="boton-enviar">Continuar</button>
            </div>
            <footer>
                <nav className="barra-inferior">
                    <p className="texto1-barra-inferior">Siguenos en nuestras redes sociales:</p>
                    <hr className="linea-2"/>
                    <p className="texto2-barra-inferior">Nuestras Sedes:</p>
                    

                </nav>
                
            </footer>
        </body>
                     



       )
}
export default RecoverDesktop;
