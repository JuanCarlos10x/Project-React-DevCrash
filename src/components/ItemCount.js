import React from 'react'
import { useState, useEffect } from 'react';

const ItemCount = ({ stock = 0, inicial = 1, onAdd }) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(inicial);
    }, []);

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter > inicial) {
            setCounter(counter - 1)
        }
    }


    return (
        <div className='contador'>
            <button onClick={decrement}>-</button>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(counter)}>Agregar al Carrito</button>
        </div>
    )
}


export default ItemCount;