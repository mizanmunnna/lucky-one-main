import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, price, img, seller, stock } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p>Brand: {seller}</p>
                <p>In Stock: {stock}</p>
            </div>
            <button className='btn-cart'><p>ADD TO CART</p></button>
        </div>
    );
};

export default Product;