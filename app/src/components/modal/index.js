import React, { Component } from 'react';
import './_modal.scss'

class BtnModal extends Component {
    render() {
        const { id, isCancelled } = this.props;
        return (
            <div className="modal fade" id={id} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            {!isCancelled ? (
                                <div className="modal-container">
                                    <div className="modal-icon">
                                        <img src="assets/img/cart-success.png" alt="Confirmar" />
                                    </div>

                                    <h2 className="modal__title">compra confirmada</h2>
                                    <span className="modal__text">enviaremos atualizações sobre o pedido para o seu email</span>
                                </div>
                            ) : (
                                    <div className="modal-container">
                                        <div className="modal-icon">
                                            <img src="assets/img/cart-cancel.png" alt="Cancelar" />
                                        </div>

                                        <h2 className="modal__title">compra cancelada</h2>
                                        <span className="modal__text">o pedido não foi enviado e você não será cobrado</span>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BtnModal;