import React from 'react'
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext)

    const onAdd = (qty) => {
        alert('Has seleccionado ' + qty + ' uniades.')
        setItemCount(qty);
        addItem(item, qty)
    }

    return (
        <>
            {
                item
                    ?
                    <div className='productoDetalle'>
                        <img src={item.image} />
                        <div className='info'>
                            <h1>{item.nombre}</h1> {""}
                            <p>{item.descripcion}</p> {""}
                            <p><span>{item.price}</span></p> {""}
                            <p>{item.qty} piezas</p> {""}
                        </div>
                        {
                            itemCount === 0
                                ? <ItemCount stock={item.qty} inicial={itemCount} onAdd={onAdd} />
                                : <Link to='/cart'><button className='pagar'>Pagar</button></Link>
                        }
                    </div>
                    : <p className='textoEspere'>Espere... </p>
            }
        </>
    );
}

export default ItemDetail;