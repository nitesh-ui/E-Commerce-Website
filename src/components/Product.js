import React from 'react'

const Product = ({product}) => {
    return (
        <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="card-text"><span>${product.price}.00</span></p>
                <button className="btn btn-primary">Add To Cart <i className="bi bi-cart"></i></button>
            </div>
        </div>
    )
}

export default Product