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
                        <p>Nombre de usuario</p>
                    </div>
                    
                    
                </div>
                <div className="linea-intermedia">
                    <hr />
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
