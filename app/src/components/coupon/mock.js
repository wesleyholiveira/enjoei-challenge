const coupon = {
    id: 3,
    title: 'black friday',
    discount: 35
  }
  
  const product = {
    id: 1321,
    title: 'vestido floral',
    price: 100,
    image: 'https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_398,q_70,w_375/qzancxcixtocajlrgztv.jpg'
  }
  
  const checkout = {
    id: 6544,
    productId: 1321,
    shippingPrice: 20,
    availableCoupons: [coupon]
  }

  export { product, checkout, coupon };
  