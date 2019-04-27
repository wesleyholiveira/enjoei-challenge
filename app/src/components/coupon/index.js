import React, { Component } from 'react';
import CouponList from './coupon-list';

class Coupon extends Component {
  render() {
    return (
      <section className="coupon">
        <figure className="coupon__photo d-flex justify-content-center">
          <img
            className="coupon__photo__image"
            src="assets/img/floral.jpg"
            alt="Foto da camisa floral"
          />
        </figure>
        <CouponList properties={{...this.props}} service={this.props.service} />
      </section>
    );
  }
}

export default Coupon;