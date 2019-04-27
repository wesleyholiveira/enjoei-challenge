import React, { Component } from 'react';

class Coupon extends Component {
  render() {
    return (
      <section className="coupon">
        <figure className="coupon__photo d-flex justify-content-center">
          <img
            className="coupon__photo__image"
            src="assets/img/floral.jpg"
            alt="Foto da camisa floral"
          />
        </figure>
        <div className="form-group">
          <h2 className="form-group form-group--highlight">cupons</h2>
          <div className="custom-control custom-radio">
            <input type="radio" id="cupom" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="cupom">não usar cupom</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="black" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="black">black friday</label>
          </div>
          <span className="form-group--discount">- R$ 12,00</span>
        </div>
        <div className="form-group">
          <h2 className="form-group form-group--highlight">resumo</h2>
          <div className="form-group__list">
            <div className="form-group__list__summary">
              <span className="form-group__summary-text">valor original</span>
              <span className="form-group__summary-text form-group--right">R$ 100,00</span>
            </div>
            <div className="form-group__list__summary">
              <span className="form-group__summary-text">cupom</span>
              <span className="form-group__summary-text form-group--discount">- R$ 100,00</span>
            </div>
            <div className="form-group__list__summary">
              <span className="form-group__summary-text">frete</span>
              <span className="form-group__summary-text form-group--right">R$ 100,00</span>
            </div>
            <div className="form-group__list__summary">
              <span className="form-group__summary-text">total</span>
              <span className="form-group__summary-text--bold form-group--right">R$ 100,00</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Coupon;