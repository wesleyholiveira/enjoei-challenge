import React, { Component } from 'react';
import t from 'prop-types';

import Modal from '../../../node_modules/bootstrap/js/src/modal';
import BtnModal from '../modal';

class CouponList extends Component {
    constructor() {
        super();
        this.state = {
            radioValue: false,
            totalPrice: 0
        };

        this.totalPrice = 0;
    }

    componentDidMount() {
        const { product, checkout } = this.props.properties;
        const totalPrice = product.price + checkout.shippingPrice;
        this.setState({
            radioValue: false,
            totalPrice
        });

        this.totalPrice = totalPrice;
    }

    change(val) {
        const { checkout } = this.props.properties;
        const discount = checkout.availableCoupons[0].discount;
        let totalPrice = this.totalPrice;

        if (val) {
            totalPrice -= discount;
        }

        this.setState({
            radioValue: val,
            totalPrice
        });
    }

    updateOrder() {
        const { service, properties } = this.props;
        const { checkout } = properties;
        service.updateCheckout({
            id: checkout.id
        }).then(() => console.log('Sucesso'), v => console.log(v));
    }

    render() {
        const { product, checkout } = this.props.properties;
        const { radioValue, totalPrice } = this.state;
        const coupon = checkout.availableCoupons[0];
        return (
            <div>
                <div className="form-group">
                    <h2 className="form-group form-group--highlight">cupons</h2>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="cupom" name="customRadio" className="custom-control-input" onChange={(e) => this.change(false)} />
                        <label className="custom-control-label" htmlFor="cupom">não usar cupom</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="black" name="customRadio" className="custom-control-input" onChange={(e) => this.change(true)} />
                        <label className="custom-control-label" htmlFor="black">black friday</label>
                    </div>
                    {!!radioValue &&
                        <span className="form-group--discount">- R$ {coupon.discount}</span>
                    }
                </div>
                <div className="form-group">
                    <h2 className="form-group form-group--highlight">resumo</h2>
                    <div className="list">
                        <div className="list__summary">
                            <span className="summary-text">valor original</span>
                            <span className="summary-text form-group--right">R$ {product.price}</span>
                        </div>
                        {!!radioValue &&
                            <div className="list__summary">
                                <span className="summary-text">cupom</span>
                                <span className="summary-text form-group--discount">- R$ {coupon.discount}</span>
                            </div>
                        }
                        <div className="list__summary">
                            <span className="summary-text">frete</span>
                            <span className="summary-text form-group--right">R$ {checkout.shippingPrice}</span>
                        </div>
                        <div className="list__summary">
                            <span className="summary-text">total</span>
                            <span className="summary-text--bold form-group--right">R$ {totalPrice}</span>
                        </div>
                    </div>
                    <div className="btns-group">
                        <button className="btn btn--cancel" data-toggle="modal" data-target="#cancelar">cancelar</button>
                        <button className="btn btn--confirm" data-toggle="modal" data-target="#confirmar">confirmar</button>
                    </div>
                </div>
                <BtnModal id="cancelar" isCancelled={true}  />
                <BtnModal id="confirmar" isCancelled={false} onClick={this.updateOrder()} />
            </div>
        );
    }
}

CouponList.propTypes = {
    properties: t.object
};

export default CouponList;