import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <div className='contenedorProducto'>

            <div>
                <div><img src={pictureUrl} /></div>
                <h3>{title}</h3>
                <p><strong>$ {price}</strong></p>
                <p>{stock} Unidades</p>
                <Link to={`/item/${id}`}><p>Detalles</p></Link>
            </div>

        </div>
    )
}

export default Item;