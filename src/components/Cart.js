import React from 'react';
import '../css/Cart.css'

const Cart = ({cart}) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h4>Your Shopping Cart</h4>
                </div>
                {cart.line_items && cart.line_items.map((item) => (
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 my-3'>
                        <div className='row d-flex border p-3'>
                            <div className='col-md-2'>
                                <img src={item.image.url} className="product-image" alt="..." />
                            </div>
                            <div className='col-md-10'>
                                <div className="cartProduct-details">
                                    <h5 className="product-name">{item.name}</h5>
                                    <p className="product-desc">{item.desciption}</p>
                                    <p className="product-quantity">Quantity : {item.quantity}</p>
                                    <p className="product-price"><span>{item.price.formatted_with_symbol}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='cartDetails'>
                    <p><strong>Subtotal:</strong> {cart.subtotal.formatted_with_symbol}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart