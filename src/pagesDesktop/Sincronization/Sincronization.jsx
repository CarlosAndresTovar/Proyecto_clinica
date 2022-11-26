import React from "react";
import './Sincronization.css';
import NavBar from "../NavBar/NavBar";
import FooterDesktop from "../Footer/Footer";

const Sincronization = () => {
    return (
        <>
            <NavBar />
            <div className="Sincronization-desktop">
                <form>
                    <input type="text" placeholder="Código del paciente"></input>
                </form>
                <button>Validar</button>
            </div>
            <FooterDesktop />
        </>
    )
}

export default Sincronization;