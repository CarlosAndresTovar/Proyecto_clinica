import React from "react";
import './billing.css'
import GrupoAval from '../../images/Billing/grupoAval.svg'
import Pse from '../../images/Billing/Pse.svg'
import Visa from '../../images/Billing/Visa.svg'
import MasterCard from '../../images/Billing/Mastercard.svg'
import AmericanExpress from '../../images/Billing/AmericanExpress.svg'

const Billing = () => {
    return (
        <div className="billing">
            <h2 className="billing-title">Facturacion Clinica</h2>
            <div className="billing-section">
                <div className="bill">
                    <div className="title row border-bottom">
                        <div className="title-services services">
                            <h5>Servicio</h5>
                        </div>
                        <div className="title-value value">
                            <h5>Valor</h5>
                        </div>
                    </div>

                    <div className="details row border-bottom">
                        <div className="details-services services">
                            <div>
                                <p>Radiografias del tracto grastrointestinal inferior</p>
                                <p>Hospitalizacion</p>
                            </div>
                            <p className="subtotal">
                                Subtotal
                            </p>
                        </div>
                        <div className="details-value value ">
                            <div>
                                <p>$0.00</p>
                                <p>$0.00</p>
                            </div>
                            <p >$0.00</p>
                        </div>
                    </div>
                    <div className="additionals row border-bottom">
                        <div className="additionals-services services">
                            <p>Impuesto al consumo</p>
                            <p>Descuento</p>
                            <p>Copago/Cuota moderadora</p>
                            <p>Total Iva</p>
                        </div>
                        <div className="additionals-value value ">
                            <p>$0.00</p>
                            <p>$0.00</p>
                            <p>$0.00</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="total row">
                        <div className="total-services services">
                            <h5>Total:</h5>
                        </div>
                        <div className="total-value value">
                            <h5>$0.00</h5>
                        </div>
                    </div>
                </div>
                <div className="payment">
                <div className="payment-column">
                    <div className="payment-method">
                        <input type="radio" name="select"/>
                        <p>Efectivo</p>
                    </div>
                    <div className="payment-method">
                        <input type="radio" name="select"/>
                        <img src={GrupoAval} alt="" />
                    </div>
                    <button>Ir a pagar</button>
                </div>
                <div className="payment-column">
                    <div className="payment-method">
                        <input type="radio" name="select"/>
                        <img src={Pse} alt="" />
                    </div>
                    <div className="payment-method">
                        <input type="radio" name="select"/>
                        <img src={Visa} alt="" />
                        <img src={MasterCard} alt="" />
                        <img src={AmericanExpress} alt="" />
                    </div>
                    <button>Actualizar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Billing;