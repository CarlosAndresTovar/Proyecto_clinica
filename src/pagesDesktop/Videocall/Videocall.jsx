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
            <div className="container-body">
                <div className="container-form">
                    <p>parrafo de pruebas</p>
                    
                </div>
                <div className="linea-intermedia">
                    <hr />
                </div>

                <div className="container-video">
                    
                </div>


                
            </div>
            <FooterDesktop />
        
        
        
        </>



    )

}
export default VideoCall;
