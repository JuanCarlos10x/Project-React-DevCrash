import React from 'react'
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import productos from '../utils/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, productos.find(item => item.id == idItem))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;