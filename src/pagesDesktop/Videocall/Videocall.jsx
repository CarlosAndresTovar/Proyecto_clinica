import React from "react";
import './Videocall.css';
import LogoBarra from '../Images/LogoBarra.png'
import FooterDesktop from "../Footer/Footer";


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
            <div>
                <span>Pagina de Video Llamada</span>
            </div>
            <FooterDesktop />
        
        
        
        </>



    )

}
export default VideoCall;
