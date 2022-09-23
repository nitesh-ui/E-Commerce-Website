import React from 'react';

const Product = ({product, onAddToCart}) => {

    const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <div className="card">
            <img src={product.image.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desciption}</p>
                <p className="card-text"><span>{product.price.formatted_with_symbol}</span></p>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart <i className="bi bi-cart"></i></button>
            </div>
        </div>
    )
}

export default Product