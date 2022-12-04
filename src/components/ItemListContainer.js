import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreUtils';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams()

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    }, [idCategory])

    return (
        <div className='texto'>
            <ItemList items={datos} className='contenedorInicial' />
        </div>
    )
}

export default ItemListContainer;