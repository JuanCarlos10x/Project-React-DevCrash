import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className='contenedorProducto'>
            {
                items.length > 0
                    ? items.map(item => <Item key={item.id} id={item.id} title={item.nombre} price={item.price} pictureUrl={item.image} stock={item.qty} />)
                    : <p>Espere ...</p>
            }
        </div>
    )
}

export default ItemList