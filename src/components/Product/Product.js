import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { id, name, price, img, seller, stock } = product;
    // const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p>Brand: {seller}</p>
                <p>In Stock: {stock}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    );
};

export default Product;