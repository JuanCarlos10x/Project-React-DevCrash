import React from 'react'
import { useState, useEffect } from 'react';

const ItemCount = ({ stock, inicial, onAdd }) => {

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
        if (counter > inicial + 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className='contador'>
            <button onClick={decrement}>-</button>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
            {
                stock && counter
                    ? <button onClick={() => onAdd(counter)} className='carrito'>Añadir al carrito</button>
                    : <button>Añadir al carrito</button>
            }
        </div>
    );
}


export default ItemCount;