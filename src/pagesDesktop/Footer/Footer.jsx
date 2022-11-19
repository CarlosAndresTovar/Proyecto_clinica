import React from "react";
import IconoFacebook from '../Images/facebook.png'
import IconoLinkedin from '../Images/linkedin.png'
import IconoTwitter from '../Images/twitter.png'
import IconoGmail from '../Images/google.png'
import "./Footer.css";

const FooterDesktop = () => {
    return (
        <footer>
            <div className="section-Social">
                <span>Siguenos en nuestras redes sociales</span>
                <div className="logo-social">
                    <a href="https://es-la.facebook.com/"><img src={IconoFacebook} alt="logo" className="items-social"/></a>
                    <a href="https://www.linkedin.com/"><img src={IconoTwitter} alt="logo" className="items-social"/></a>
                    <a href="https://www.linkedin.com/"><img src={IconoLinkedin} alt="logo" className="items-social"/></a>
                    <a href="https://www.google.com/intl/es-419/gmail/about/"><img src={IconoGmail} alt="logo" className="items-social"/></a>
                </div>
            </div>
            <div className="line-vertical">
                <hr className="lineaVerticalFooter"></hr>
            </div>
            <div className="section-sedes">
                <div className="Sedes">
                    <div><h3>SEDES</h3></div>
                    <div><span>Bogota Calle 26 # 68 -32</span></div>
                    <div><span>Medellin Calle 49 # 63 - 100 Laureles - Estadio</span></div>
                </div>
                <div className="LineasAtencion">
                    <div><h3>LINEAS DE ATENCIÓN</h3></div>
                    <div><span>601-978-3402</span></div>
                    <div><span>601-978-3402</span></div>
                </div>
            </div>
            <div className="line-vertical">
                <hr className="lineaVerticalFooter"></hr>
            </div>
            <div className="section-about">
                <div>
                    <h4>ACERCA DE LA CLINICA</h4>
                </div>
                <div>
                    <li>Servicios</li>
                </div>
                <div>
                    <li>Nosotros</li>
                </div>
                <div>
                    <li>Contactenos</li>
                </div>
            </div>
        </footer>
    )
}

export default FooterDesktop;