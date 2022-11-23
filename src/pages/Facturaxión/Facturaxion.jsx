import React from "react";
import Header from "../Register/Header";
import "./Facturaxion.css";

const Facturaxion = () => {
    return (
        <>
            <Header />
            <div className="facturaxion">
                <h2>Facturación clinica</h2>
                <div className="sectionreceipt">
                    <div className="receipt">
                        <div className="header-service">
                            <h3>Servicio</h3>
                        </div>
                        <div className="header-value">
                            <h3>Valor</h3>
                        </div>
                    </div>
                    <div className="receipt-body">
                        <div className="body-service">
                            <span>Radiografiás del tracto gastrointestinal inferior</span>
                            <span>Hospitalización</span>
                            <h4>Subtotal</h4>
                        </div>
                        <div className="body-value">
                            <span>$0.00</span>
                            <span>$0.00</span>
                            <h4>$0.00</h4>
                        </div>
                    </div>
                    <div className="receipt-footer">
                        <div className="footer-service">
                            <span>Impuesto al consumo</span>
                            <span>Descuento</span>
                            <span>Copago/Cuota moderadora</span>
                            <span>Total IVA %</span>
                        </div>
                        <div className="footer-value">
                            <span>$0.00</span>
                            <span>$0.00</span>
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                    </div>
                    <div className="receipt-total">
                        <div className="total-service">
                            <span>Total:</span>
                        </div>
                        <div className="total-value">
                            <span>$0.00</span>
                        </div>
                    </div>
                </div>
                <div className="facturaxionbutton">
                    <span>El valor a pagar a la fecha es de $0.00</span>
                    <button>Ir a pagar</button>
                    <button>Actualizar</button>
                </div>
            </div>
        </>
    )
}

export default Facturaxion;