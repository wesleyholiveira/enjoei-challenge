import React, { Component } from 'react';
import Coupon from '../../components/coupon';
import ServiceCheckout from '../../services/checkout';
import { product, checkout, coupon } from '../../components/coupon/mock';

class Main extends Component {
  constructor() {
    super();
    
    this.state = {
      data: {
        product,
        checkout,
        coupon
      }
    }

    this.service = new ServiceCheckout();
  }

  componentWillMount () {
    this.service.fetchCheckout('6544').then(v => this.setState({data: v}), v => console.log(v));
  }

  render () {
    return (
      <main className="main">
        <Coupon {...this.state.data} service={this.service} />        
      </main>
    );
  }
}

export default Main;