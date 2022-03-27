import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='cart'>Selected Items</h1>
            <h3>{cart.length}</h3>
            console.log(cart);
        </div>
    );
};

export default Cart;