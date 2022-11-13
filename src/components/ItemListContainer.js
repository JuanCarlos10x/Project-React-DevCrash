import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import customFetch from '../utils/customFetch';
import productos from '../utils/productos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory == undefined) {

            customFetch(2000, productos)
                .then(result => setDatos(result))
                .catch(err => console.log(err))

        } else {

            customFetch(2000, productos.filter(item => item.categoriaId == idCategory))
                .then(result => setDatos(result))
                .catch(err => console.log(err))

        }
    }, [idCategory])

    const onAdd = (qty) => {
        alert('Has seleccionado ' + qty + ' uniades.')
    }

    return (
        <div className='texto'>
            <h2>Item List Container</h2>

            <ItemList items={datos} className='contenedorInicial' />
            <ItemCount stock={15} inicial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;