import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='cart'>Selected Items</h1>
            <p>{cart.name}</p>
        </div>
    );
};

export default Cart;