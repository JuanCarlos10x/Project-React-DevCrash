import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert('Has seleccionado ' + qty + ' uniades.')
    }

    return (
        <div className='productoDetalle'>
            <img src={item.image} />
            <div className='info'>
                <h1>{item.nombre}</h1> {""}
                <p>{item.descripcion}</p> {""}
                <p><span>{item.price}</span></p> {""}
                <p>{item.qty} piezas</p> {""}
                <ItemCount stock={item.qty} inicial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;