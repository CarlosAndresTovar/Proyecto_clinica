import React from "react";
import './Videocall.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer"
import LogoVideo from"../Images/videouser.png"


const VideoCall = () => {
    return(
        <>
            <header>
                <nav>
                    <div className="container-logo">
                        <img id="logobarra" src={LogoBarra} alt="logo" />
                    </div>   
                </nav>
            </header>
            <div className="container-body">
                <div className="container-form">
                    <div className="container-logo-interno">
                        <img className="logo-interno" src={LogoVideo} />
                    </div>
                    <div className="titulo-interno">
                            <span className="principal-title">Nombre de usuario</span>
                    </div>
                    <div className="texto-del-form">
                        <p className="parrafo"> Es necesario tener acceso a un microfono y una cámara para unirse a la video llamada. </p>
                    </div>
                    <div className="container-button">
                        <button type="input">Permitir</button>
                    </div>
                    <div className="container-button">
                        <button type="input">Unirse</button>
                    </div>
                    
                    
                </div>
                <div className="container-linea-intermedia">
                    <hr className="division-line"/>
                </div>

                <div className="container-video">
                    <div className="caja-video">
                    </div>                    
                </div>



                
            </div>
            <FooterDesktop />
        
        
        
        </>



    )

}
export default VideoCall;
