import React from 'react';
import Product from './Product';

const products = [
    {id: 1, name: 'Shoes', desc: 'Running Shoes', price: 10, img: 'https://rukminim1.flixcart.com/image/495/594/l0pm3680/shoe/e/9/w/9-fx3631-9-adidas-ftwwht-ftwwht-gretwo-original-imagcfspcm7nhh8y.jpeg?q=50'},
    {id: 2, name: 'Macbook', desc: 'Apple Macbook', price: 15, img: 'https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70'},
    {id: 3, name: 'Mobile', desc: 'Samsung S7', price: 20, img: 'https://rukminim1.flixcart.com/image/312/312/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70'},
    {id: 4, name: 'Pen', desc: 'Raynold Pen', price: 25, img: 'https://rukminim1.flixcart.com/image/612/612/l2z26q80/pen/4/t/6/-original-image6tfumcvgsrg.jpeg?q=70'}
];

const Products = () => {
    return (
        <main>
            <div className='container'>
                <div className='row'>
                    {products.map((product) => (
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                            <Product product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Products