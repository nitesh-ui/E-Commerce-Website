import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

const Cart = ({cart, onUpdateQty, onRemoveItem, onEmptyCart}) => {

    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h4>Your Shopping Cart</h4>
                </div>
                {cart.line_items && cart.line_items.length === 0 ? <div><p>There is no product in cart. <Link to="/">Add some more.</Link></p></div> : 
                    <div className='row g-3 cartProducts'>
                        {cart.line_items && cart.line_items.map((item) => (
                            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 p-4'>
                                <div className='row border p-3'>
                                    <div className='col-md-4'>
                                        <img src={item.image.url} className="product-image" alt="..." />
                                    </div>
                                    <div className='col-md-8'>
                                        <div className="cartProduct-details">
                                            <h5 className="product-name">{item.name}</h5>
                                            <p className="product-price"><span>{item.line_total.formatted_with_symbol}</span></p>
                                        </div>
                                        <div className='cartAction mb-2'>        
                                            <div className='quantityButton'>
                                                <button onClick={() => onUpdateQty(item.id, item.quantity - 1)}>-</button>
                                            </div>     
                                            <div className="product-quantity">{item.quantity}</div>   
                                            <div className='quantityButton'>
                                                <button onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
                                            </div>                              
                                        </div>
                                        <button className='btn btn-danger' onClick={() => onRemoveItem(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }               
                {cart.line_items && cart.line_items.length === 0 ? '' : 
                    <div className='cartTotal shadow-lg p-3 mb-3 bg-body rounded'>
                        <p><strong>Subtotal: </strong>{cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
                        <div>
                            <button className="emptyButton btn btn-primary" onClick={onEmptyCart}>Empty Cart</button>
                            <button className="checkoutButton btn btn-warning mx-2">Checkout</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart