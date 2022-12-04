import React from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addItem = (item, qty) => {
        let isInCar = cartList.find(producto => producto.id === item.id);
        if (isInCar === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    picture: item.image,
                    nombre: item.nombre,
                    price: item.price,
                    stock: item.qty,
                    qty: qty
                }
            ]);
        } else {
            isInCar.qty += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const clear = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        let nuevoarray = cartList.filter(item => item.id !== id);
        setCartList(nuevoarray);
    }

    const totalProductos = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].qty;

    }

    const total = () => {
        let totalPagar = cartList.map(item => totalProductos(item.id));
        return totalPagar.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const itemContador = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, totalProductos, total, itemContador }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider