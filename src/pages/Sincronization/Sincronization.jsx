import React from "react";
import Header from "../Home/Header";
import "./Sincronization.css";
import Sincronizationlogo from "./perfil-sincronization.svg";
import Whatsapp from "../Home/Whatsapp.svg";

const Sincronization = () => {
    return (
        <>
            <Header />
            <div className="mainSincronization">
                <div className="imagesincronization">
                    <img src={Sincronizationlogo} alt="Sincronizationlogo" />
                </div>
                <div className="input-sincronization">
                    <form>
                        <input type="text" placeholder="Código del paciente"></input>
                    </form>
                    <button>Validar</button>
                </div>
                <section className="Whatsapp-sincronization">
                    <a href="https://web.whatsapp.com/"><img id="Whatsapp" src={Whatsapp} alt="Whatsapp"></img></a>
                </section>
            </div>
            
        </>
    )
}

export default Sincronization;