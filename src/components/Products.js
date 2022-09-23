import React from 'react';
import Product from './Product';

const Products = ({products, onAddToCart}) => {
    return (
        <main>
            <div className='container my-3'>
                <div className='row'>
                    {products.map((product) => (
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3'>
                            <Product product={product} onAddToCart={onAddToCart}/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Products