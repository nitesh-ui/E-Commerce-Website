import React from 'react';
// import { Elements, CardElement, ElementConsumer } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import '../css/Checkout.css';

const PaymentForm = ({checkoutToken}) => {
    return (
        <div className='container'>
            <div className='row'>
                <h6>Order Summary</h6>
                {checkoutToken.line_items && checkoutToken.line_items.map((product) => (
                    <div className='checkoutProduct'>
                        <div className='productImage item'><img src={product.image.url} alt=" " /></div>
                        <div className='productName item'>{product.name}</div>
                        <div className='productQuantity item'>Quantity: {product.quantity}</div>
                        <div className='productPrice item'>{product.line_total.formatted_with_symbol}</div>
                    </div>
                ))}
                <div className='checkoutTotal shadow-lg p-3 mb-3 bg-body rounded'>
                    <p><strong>Total Amount : </strong>{checkoutToken.subtotal.formatted_with_symbol}</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm