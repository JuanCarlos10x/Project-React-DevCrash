import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useContext, } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const cartList = useContext(CartContext);

    return (
        <>
            <div className='noti'>
                <Link to='/cart'><FaShoppingCart badge={cartList.itemContador()} /></Link>
            </div>

        </>
    )
}

export default CartWidget;
